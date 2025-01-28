import Skeleton from "../components/Skeleton/Skeleton";
import { IProduct, ProductCard } from "../components/Shared/ProductCard";
import { useGetProductsQuery } from "../redux/services/product/product";
import Container from "@/components/Container";
import ContactUs from "@/components/home/ContactUs";
import Footer from "@/components/Shared/Footer";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";

const Home = () => {
  const { isLoading, data } = useGetProductsQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const products: IProduct[] = data?.data || [];
  return (
    <div className="mx-auto">
      <Container>
        <div className="text-center h-[90vh] md:h-[80vh] rounded-xl py-40 space-y-10  inset-0 bg-cover bg-center text-white bg-[url('@/assets/banner.jpg')] ">
          {/* <h1 className="text-4xl font-bold mb-4">Find Your Perfect Bike</h1>
          <p className="text-lg mb-6">
            Explore the latest collection of bikes for every terrain and style.
          </p>
          <Button variant="default" className="px-6 py-3 text-lg">
            Shop Now
          </Button> */}

          {/* <img
            className="w-full h-[90vh] md:h-[80vh] object-cover rounded-xl"
            src={banner}
            alt="banner"
          /> */}
        </div>

        {isLoading ? (
          <Skeleton />
        ) : (
          <div className="mx-auto px-4 py-10">
            <h2 className="sr-only">Products</h2>
            <div className="columns-1 md:columns-2 gap-10">
              {products.slice(0, 6).map((product, i) => (
                <ProductCard key={i} product={product} />
              ))}
            </div>
            <div className="w-full text-center">
              <Link to="all-product">
                <Button variant={"outline"}>View All Product... </Button>
              </Link>
            </div>
          </div>
        )}

        <ContactUs />
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
