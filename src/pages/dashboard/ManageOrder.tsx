/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { toast } from "sonner";
import Container from "@/components/Container";
import {
  useDeleteOrderMutation,
  useGetOrdersQuery,
  useUpdateOrderStatusMutation,
} from "@/redux/services/order/order";
import Skeleton from "@/components/Skeleton/Skeleton";

export interface Transaction {
  id: string;
  transactionStatus: string | null;
  bank_status: string;
  date_time: string;
  method: string;
  sp_code: string;
  sp_message: string;
}

export interface Product {
  product: string;
  quantity: number;
  _id: string;
}

export interface Order {
  transaction: Transaction;
  _id: string;
  user: string;
  products: Product[];
  totalPrice: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export default function ManageOrders() {
  const { isLoading, data, refetch } = useGetOrdersQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  const orderData: Order[] = data?.data;

  const [updateOrderStatus] = useUpdateOrderStatusMutation();
  const [deleteOrder] = useDeleteOrderMutation();

  const handleStatusUpdate = async (id: string, newStatus: string) => {
    try {
      const result = await updateOrderStatus({ id, status: newStatus });
      if (result?.data?.success) {
        toast("Order status updated successfully!");
        refetch();
      } else {
        toast("Failed to update order status!");
      }
    } catch (error) {
      toast("Error updating order status!");
      console.log(error);
    }
  };

  const handleDeleteOrder = async (id: string) => {
    try {
      const result = await deleteOrder(id);
      if (result?.data?.success) {
        console.log(result);
        toast("Order deleted successfully!");
        refetch();
      } else {
        toast("Failed to delete order!");
      }
    } catch (error) {
      console.log(error);

      toast("Error deleting order!");
    }
  };

  if (isLoading) {
    return <Skeleton />;
  }
  return (
    <Container>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Manage Orders</h2>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order ID</TableHead>
            <TableHead>User</TableHead>
            <TableHead>Total Price</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orderData?.map((order: any) => (
            <TableRow key={order._id}>
              <TableCell>{order._id}</TableCell>
              <TableCell>{order.user}</TableCell>
              <TableCell>{order.totalPrice}</TableCell>
              <TableCell>{order.status}</TableCell>
              <TableCell className="flex gap-2">
                {order.status !== "Delivered" && (
                  <Button
                    size="sm"
                    onClick={() =>
                      handleStatusUpdate(
                        order._id,
                        order.status === "Paid" ? "Delivered" : "Paid"
                      )
                    }
                  >
                    Mark as {order.status === "Paid" ? "Delivered" : "Paid"}
                  </Button>
                )}
                <Button
                  size="sm"
                  variant="destructive" // Style it as a delete button
                  onClick={() => handleDeleteOrder(order?._id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}
