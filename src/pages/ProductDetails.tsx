import React from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { useGetProductByIdQuery } from "@/redux/services/product/product";
import Container from "@/components/Container";
import { useAppDispatch } from "@/redux/hooks";
import Skeleton from "@/components/Skeleton/Skeleton";
import { addToCart } from "@/redux/services/cart/cartSlice";
import { ShoppingCart, Star } from "lucide-react";

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);

  // Get parts of the date
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" }); // e.g., "January"
  const year = date.getFullYear();

  // Return the formatted date
  return `${month} ${day}, ${year}`;
};

const ProductDetails: React.FC = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useGetProductByIdQuery(id);
  const product = data?.data;
  console.log(product);
  if (isLoading) {
    return <Skeleton />;
  }

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        product: product._id,
        name: product.name,
        price: product.price,
        quantity: 1,
        stock: product.stock,
        imageUrl: product.image as string,
      })
    );
  };

  return (
    <Container>
      <div className=" mb-10">
        <Card className="shadow-2xl rounded-lg overflow-hidden">
          <CardHeader className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 object-cover rounded-t-lg"
            />
            <div className="absolute text-2xl font-bold top-5 right-5 bg-black bg-opacity-50 text-white px-3 py-1 rounded-md">
              ${product?.price}
            </div>
          </CardHeader>
          <CardContent className="p-8">
            <CardTitle className="text-4xl font-bold text-gray-800 mb-2">
              {product.name}
            </CardTitle>
            <CardDescription className="text-lg text-gray-600 mb-4">
              {/* <p className="text-3xl font-bold">${product.price.toFixed(2)}</p> */}
              <div className="mt-3 flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.round(4) ? "text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm text-gray-500">
                  ({4} reviews)
                </span>
              </div>
            </CardDescription>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {product.description}
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                <strong>Brand:</strong> {product.brand}
              </li>
              <li>
                <strong>Model:</strong> {product.model}
              </li>

              <li>
                <strong>Category:</strong> {product.category}
              </li>
              <li>
                <strong>Stock:</strong> {product.stock} units available
              </li>
              <li>
                <strong>Added: </strong>
                {formatDate(product.createdAt)}
              </li>
              <li>
                <strong>Last updated: </strong>
                {formatDate(product.updatedAt)}
              </li>
            </ul>
            <div className="mt-6 flex ">
              <Button onClick={() => handleAddToCart()} className="w-full">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
};

export default ProductDetails;
