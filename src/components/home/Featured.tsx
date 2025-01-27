import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useGetProductsQuery } from "@/redux/services/product/product";

const FeaturedProducts: React.FC = () => {
  const { data: products, isLoading, isError } = useGetProductsQuery(undefined);
  const navigate = useNavigate();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wrong!</div>;
  }

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {products?.data?.slice(0, 6).map((product: any) => (
          <Card
            key={product.id}
            className="shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <CardHeader>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </CardHeader>
            <CardContent>
              <CardTitle>{product.name}</CardTitle>
              <CardDescription className="text-gray-500">
                {product.brand}
              </CardDescription>
              <p className="text-lg font-semibold">${product.price}</p>
              <p className="text-sm text-gray-600">Model: {product.model}</p>
              <p className="text-sm text-gray-600">Stock: {product.stock}</p>
              <Button
                className="mt-4 w-full"
                onClick={() => navigate(`/product/${product._id}`)}
              >
                View Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
