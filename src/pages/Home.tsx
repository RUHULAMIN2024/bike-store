import Skeleton from "../components/Skeleton/Skeleton";
import { IProduct, ProductCard } from "../components/Shared/ProductCard";
import { useGetProductsQuery } from "../redux/services/product/product";
import Container from "@/components/Container";
import banner from "@/assets/banner.jpg";
import ContactUs from "@/components/home/ContactUs";
import Footer from "@/components/Shared/Footer";
import Featured from "@/components/home/Featured";

const Home = () => {
  const { isLoading, data } = useGetProductsQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const products: IProduct[] = data?.data || [];
  return (
    <div className="mx-auto">
      <Container>
        <div>
          {/* <h1 className="text-9xl font-bold drop-shadow-lg shadow-black">
            <span className="text-lime-500">Shurjo</span> Pay
          </h1>
          <h3 className="text-6xl font-bold  drop-shadow-md">
            Payment Method Integration
          </h3>  */}
          <img
            className="w-full h-[90vh] md:h-[80vh] object-cover rounded-xl"
            src={banner}
            alt="banner"
          />
        </div>

        {isLoading ? (
          <Skeleton />
        ) : (
          <div className="mx-auto px-4 py-16">
            <h2 className="sr-only">Products</h2>
            <div className="columns-1 md:columns-2 gap-5 divide-x">
              {products.map((product, i) => (
                <ProductCard key={i} product={product} />
              ))}
            </div>
          </div>
        )}
        <Featured />
        <ContactUs />
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
