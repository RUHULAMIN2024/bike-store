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

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: product, isLoading, isError } = useGetProductByIdQuery(id);

  if (isLoading) {
    return (
      <div className="text-center py-20 text-lg font-semibold">Loading...</div>
    );
  }

  if (isError || !product) {
    return (
      <div className="text-center py-20 text-red-500 font-semibold">
        Something went wrong!
      </div>
    );
  }

  return (
    <Container>
      <div className=" py-10">
        <Card className="shadow-2xl rounded-lg overflow-hidden">
          <CardHeader className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 object-cover rounded-t-lg"
            />
            <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-md">
              ${product.price}
            </div>
          </CardHeader>
          <CardContent className="p-8">
            <CardTitle className="text-4xl font-bold text-gray-800 mb-2">
              {product.name}
            </CardTitle>
            <CardDescription className="text-lg text-gray-600 mb-4">
              {product.brand}
            </CardDescription>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {product.description}
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                <strong>Model:</strong> {product.model}
              </li>
              <li>
                <strong>Stock:</strong> {product.stock} units available
              </li>
              <li>
                <strong>Category:</strong> {product.category}
              </li>
            </ul>
            <Button className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold rounded-lg shadow-lg transition-all">
              Buy Now
            </Button>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
};

export default ProductDetails;
