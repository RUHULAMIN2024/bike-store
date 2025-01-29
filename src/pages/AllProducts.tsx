import Container from "@/components/Container";
import Footer from "@/components/Shared/Footer";
import { IProduct, ProductCard } from "@/components/Shared/ProductCard";
import Skeleton from "@/components/Skeleton/Skeleton";
import { useGetProductsQuery } from "@/redux/services/product/product";

const AllProducts = () => {
  const { isLoading, data } = useGetProductsQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  console.log(data);
  const products: IProduct[] = data?.data?.result || [];

  if (isLoading) {
    return <Skeleton />;
  }

  return (
    <div>
      <Container>
        <div className="min-h-screen py-5">
          <h1 className="text-3xl font-bold text-center mb-8">All Products</h1>

          {/* Product Cards */}
          <div className="columns-1 md:columns-2 gap-10">
            {products?.map((product, i) => (
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
