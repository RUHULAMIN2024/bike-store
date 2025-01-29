import Container from "@/components/Container";
import Skeleton from "@/components/Skeleton/Skeleton";
import { Badge } from "@/components/ui/badge";
import { useMyOrdersQuery } from "@/redux/services/order/order";
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

export default function MyOrder() {
  const { isLoading, data } = useMyOrdersQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  const myOrder: Order[] = data?.data;

  return isLoading ? (
    <Skeleton />
  ) : (
    <Container>
      <div className="mx-auto mb-5 space-y-5">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          My Order
        </h1>
        {myOrder?.map((order, index) => (
          <div
            key={index}
            className="p-6 bg-white shadow-md rounded-lg border border-gray-200"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Customer Information
                </h3>
                <p className="text-gray-600">User ID: {order?.user}</p>
                <p className="text-gray-600">
                  Order Date: {new Date(order?.createdAt).toLocaleString()}
                </p>
                <p className="text-gray-600">
                  Last Updated: {new Date(order?.updatedAt).toLocaleString()}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Order Summary
                </h3>
                <p className="text-gray-600">
                  Total Price: ${order?.totalPrice?.toFixed(2)}
                </p>
                <p className="text-gray-600">
                  Status:{" "}
                  <Badge
                    variant={
                      order?.status === "Pending" ? "outline" : "default"
                    }
                  >
                    {order?.status}
                  </Badge>
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Products
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  {order?.products?.map((product, i) => (
                    <li key={i} className="text-gray-600">
                      Product ID: {product?.product}, Quantity:{" "}
                      {product?.quantity}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Transaction Details
                </h3>
                <p className="text-gray-600">
                  Transaction ID: {order?.transaction?.id}
                </p>
                <p className="text-gray-600">
                  Payment Method: {order?.transaction?.method}
                </p>
                <p className="text-gray-600">
                  Transaction Date: {order?.transaction?.date_time}
                </p>
                <p className="text-gray-600">
                  Transaction Status: {order?.transaction?.bank_status}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
