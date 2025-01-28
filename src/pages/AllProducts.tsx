import Container from "@/components/Container";
import Footer from "@/components/Shared/Footer";
import { IProduct, ProductCard } from "@/components/Shared/ProductCard";
import Skeleton from "@/components/Skeleton/Skeleton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGetProductsQuery } from "@/redux/services/product/product";

const AllProducts = () => {
  const { isLoading, data } = useGetProductsQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const products: IProduct[] = data?.data || [];

  const handleSearch = (e) => {};

  if (isLoading) {
    return <Skeleton />;
  }

  return (
    <div>
      <Container>
        <div className="min-h-screen py-5">
          <h1 className="text-3xl font-bold text-center mb-8">All Products</h1>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <Input
              placeholder="Search by name, brand, or category"
              onChange={handleSearch}
              className="w-full"
            />

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="0-500">0-500</SelectItem>
                <SelectItem value="500-1000">500-1000</SelectItem>
                <SelectItem value="1000-1500">1000-1500</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Brand" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="TrailMaster">TrailMaster</SelectItem>
                <SelectItem value="Speedster">Speedster</SelectItem>
                <SelectItem value="EcoRide">EcoRide</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="Mountain">Mountain</SelectItem>
                <SelectItem value="Road">Road</SelectItem>
                <SelectItem value="Hybrid">Hybrid</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Availability" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="available">Available</SelectItem>
                <SelectItem value="unavailable">Unavailable</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Product Cards */}
          <div className="columns-1 md:columns-2 gap-10">
            {products.map((product, i) => (
              <ProductCard key={i} product={product} />
            ))}
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default AllProducts;
