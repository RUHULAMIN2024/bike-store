import { useState } from "react";
import Container from "@/components/Container";
import Footer from "@/components/Shared/Footer";
import { IProduct, ProductCard } from "@/components/Shared/ProductCard";
import Skeleton from "@/components/Skeleton/Skeleton";
import { useGetProductsQuery } from "@/redux/services/product/product";

const AllProducts = () => {
  const { isLoading, data } = useGetProductsQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const products: IProduct[] = data?.data?.result || [];

  // State for search and filters
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [priceRange, setPriceRange] = useState("");

  // Extract unique categories, brands, and models
  const categories = Array.from(
    new Set(products.map((product) => product.category))
  );
  const brands = Array.from(new Set(products.map((product) => product.brand)));
  const models = Array.from(new Set(products.map((product) => product.model)));

  // Filtered products based on search and filters
  const filteredProducts = products.filter((product) => {
    return (
      (product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedCategory ? product.category === selectedCategory : true) &&
      (selectedBrand ? product.brand === selectedBrand : true) &&
      (selectedModel ? product.model === selectedModel : true) &&
      (priceRange ? product.price <= parseInt(priceRange) : true)
    );
  });

  if (isLoading) {
    return <Skeleton />;
  }

  return (
    <div>
      <Container>
        <div className="min-h-screen py-5">
          <h1 className="text-3xl font-bold text-center mb-8">All Products</h1>

          {/* Search and Filters */}
          <div className="mb-5 flex flex-col md:flex-row gap-4 justify-center">
            <input
              type="text"
              placeholder="Search by name, brand, or category..."
              className="border p-2 rounded w-full md:w-1/2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <select
              className="border p-2 rounded w-full md:w-1/4"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>

            <select
              className="border p-2 rounded w-full md:w-1/4"
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
            >
              <option value="">All Brands</option>
              {brands.map((brand, index) => (
                <option key={index} value={brand}>
                  {brand}
                </option>
              ))}
            </select>

            <select
              className="border p-2 rounded w-full md:w-1/4"
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
            >
              <option value="">All Models</option>
              {models.map((model, index) => (
                <option key={index} value={model}>
                  {model}
                </option>
              ))}
            </select>

            <input
              type="number"
              placeholder="Max Price"
              className="border p-2 rounded w-full md:w-1/4"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
            />
          </div>

          {/* Product Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, i) => (
                <div key={i}>
                  <ProductCard product={product} />
                </div>
              ))
            ) : (
              <p className="text-center col-span-2 text-gray-500">
                No products found.
              </p>
            )}
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default AllProducts;
