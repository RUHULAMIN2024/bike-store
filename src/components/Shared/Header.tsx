import { Link, NavLink, useNavigate } from "react-router";
import { Button } from "../ui/button";
import { useEffect } from "react";
import { ShoppingBagIcon } from "lucide-react";
import icon from "../../assets/icon.svg";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "../ui/badge";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  removeFromCart,
  updateQuantity,
} from "@/redux/services/cart/cartSlice";
import { logout, selectCurrentUser } from "@/redux/services/auth/authSlice";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useCreateOrderMutation } from "@/redux/services/order/order";
import { toast } from "sonner";
import { ModeToggle } from "../mode-toggle";
import Container from "../Container";

const CartSheet = () => {
  const dispatch = useAppDispatch();

  const cartData = useAppSelector((state) => state.cart);

  const [createOrder, { isLoading, isSuccess, data, isError, error }] =
    useCreateOrderMutation();

  const handlePlaceOrder = async () => {
    await createOrder({ products: cartData.items });
  };

  const toastId = "cart";
  useEffect(() => {
    if (isLoading) toast.loading("Processing ...", { id: toastId });

    if (isSuccess) {
      toast.success(data?.message, { id: toastId });
      if (data?.data) {
        setTimeout(() => {
          window.location.href = data.data;
        }, 1000);
      }
    }

    if (isError) toast.error(JSON.stringify(error), { id: toastId });
  }, [data?.data, data?.message, error, isError, isLoading, isSuccess]);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="link" className="relative">
          <ShoppingBagIcon className="h-6 w-6" />
          <Badge className="absolute right-0 top-0 bg-red-600 text-white rounded-full text-xs p-1">
            {cartData.totalQuantity}
          </Badge>
        </Button>
      </SheetTrigger>

      <SheetContent className="flex flex-col gap-4 p-6 bg-white shadow-lg rounded-lg max-w-md">
        <SheetHeader className="border-b pb-4">
          <SheetTitle className="text-xl font-semibold">Your Cart</SheetTitle>
          <SheetDescription className="text-sm text-gray-500">
            Review your items and proceed to checkout.
          </SheetDescription>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto">
          {cartData.items.length > 0 ? (
            <ul className="space-y-4">
              {cartData.items.map((item) => (
                <li key={item.product} className="flex items-center gap-4">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="h-16 w-16 rounded object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="text-sm font-medium">{item.name}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <button
                        onClick={() =>
                          dispatch(
                            updateQuantity({
                              id: item.product,
                              quantity: Math.max(item.quantity - 1, 1),
                            })
                          )
                        }
                        className="w-6 h-6 bg-gray-200 text-black rounded hover:bg-gray-300"
                      >
                        -
                      </button>
                      <span className="text-sm font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          dispatch(
                            updateQuantity({
                              id: item.product,
                              quantity: Math.min(item.quantity + 1, item.stock),
                            })
                          )
                        }
                        className="w-6 h-6 bg-gray-200 text-black rounded hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-gray-800">
                    ${(item.quantity * item.price).toFixed(2)}
                  </p>
                  <button
                    onClick={() => dispatch(removeFromCart(item.product))}
                    className="text-red-600 text-sm hover:underline"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          )}

          <div className="border-b my-3"></div>

          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-gray-700">
              Total Quantity:
            </span>
            <span className="text-lg font-bold">{cartData.totalQuantity}</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-gray-700">
              Total Price:
            </span>
            <span className="text-lg font-bold">
              ${cartData.totalPrice.toFixed(2)}
            </span>
          </div>
        </div>

        <SheetFooter className="border-t pt-4">
          <SheetClose asChild>
            <Button className="w-full" onClick={handlePlaceOrder}>
              Place Order
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default function Header() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const user = useAppSelector(selectCurrentUser);

  return (
    <Container>
      <div>
        <header className="flex justify-between h-20 w-full shrink-0 items-center px-4 md:px-6">
          <Link to="/" className="mr-6 hidden lg:flex">
            <img className="  w-10" src={icon} alt="icon" />
          </Link>
          <div className="flex gap-2">
            <Link to="/">
              <Button variant="link" className="px-2 py-1 text-xs">
                Home
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="link" className="px-2 py-1 text-xs">
                About
              </Button>
            </Link>
            <Link to="/all-product">
              <Button variant="link" className="px-2 py-1 text-xs">
                All Product
              </Button>
            </Link>
            <Link to="/order">
              <Button variant="link" className="px-2 py-1 text-xs">
                Order
              </Button>
            </Link>
            <CartSheet />
          </div>
          <div className="flex gap-2">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger>{user.email}</DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>{user.role}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => navigate(`/dashboard`)}>
                    Dashboard
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => dispatch(logout())}>
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <NavLink to="/login">
                  <Button
                    variant="link"
                    className="justify-self-end px-2 py-1 text-xs"
                  >
                    Sign In
                  </Button>
                </NavLink>
              </>
            )}
            <ModeToggle />
          </div>
        </header>
      </div>
    </Container>
  );
}
