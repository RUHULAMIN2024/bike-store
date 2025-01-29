/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import {
  useCreateProductMutation,
  useDeleteProductMutation,
  useGetProductsQuery,
  useUpdateProductMutation,
} from "@/redux/services/product/product";
import { toast } from "sonner";
import Container from "@/components/Container";

export default function ManageProducts() {
  const { data, refetch } = useGetProductsQuery(undefined);
  const products = data?.data.result || [];
  const [createProduct] = useCreateProductMutation();
  const [updateProduct] = useUpdateProductMutation();
  const [deleteProduct] = useDeleteProductMutation();

  const { register, handleSubmit, reset } = useForm();
  const {
    register: registerEdit,
    handleSubmit: handleSubmitEdit,
    reset: resetEdit,
    setValue: setValueEdit,
  } = useForm();

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);

  const handleAddProduct = async (data: any) => {
    const result = await createProduct(data);
    console.log(data);
    if (result?.data?.success) {
      toast("Product added successfully!");
    }
    refetch();
    reset();
    setOpenAddModal(false);
    console.log(selectedProduct);
  };

  const handleUpdateProduct = async (data: any) => {
    if (selectedProduct) {
      const result = await updateProduct({
        id: selectedProduct,
        updatedData: data,
      });
      refetch();
      resetEdit();
      setSelectedProduct(null);
      setOpenEditModal(false);
      if (result?.data?.success) {
        toast("Product updated successfully!");
      }
    }
  };

  const handleEdit = (product: any) => {
    setSelectedProduct(product._id);
    setValueEdit("name", product.name);
    setValueEdit("brand", product.brand);
    setValueEdit("model", product.model);
    setValueEdit("category", product.category);
    setValueEdit("description", product.description);
    setValueEdit("stock", product.stock);
    setValueEdit("price", product.price);
    setValueEdit("image", product.image);

    setOpenEditModal(true);
  };

  const handleDelete = async (id: string) => {
    const result = await deleteProduct(id);
    refetch();
    if (result?.data?.success) {
      toast("Product deleted successfully!");
    }
  };

  return (
    <Container>
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Manage Products
        </h2>
        <Button onClick={() => setOpenAddModal(true)}>Add Product</Button>
      </div>

      <Dialog open={openAddModal} onOpenChange={setOpenAddModal}>
        <DialogContent>
          <DialogTitle>Add Product</DialogTitle>
          <DialogDescription>Fill in the product details.</DialogDescription>
          <form onSubmit={handleSubmit(handleAddProduct)}>
            <Input
              {...register("name")}
              placeholder="Product Name"
              className="mb-2"
              required
            />
            <Input
              {...register("brand")}
              placeholder="Brand"
              className="mb-2"
              required
            />
            <Input
              {...register("model")}
              placeholder="Model"
              className="mb-2"
              required
            />
            <Input
              {...register("category")}
              placeholder="Category"
              className="mb-2"
              required
            />
            <Input
              {...register("description")}
              placeholder="Description"
              className="mb-2"
              required
            />
            <Input
              {...register("stock")}
              type="number"
              placeholder="Stock Quantity"
              className="mb-2"
              required
            />
            <Input
              {...register("price")}
              type="number"
              placeholder="Price"
              className="mb-2"
              required
            />
            <Input
              {...register("image")}
              placeholder="Image URL"
              className="mb-2"
              required
            />

            <Button type="submit" className="mt-2 w-full">
              Save
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog open={openEditModal} onOpenChange={setOpenEditModal}>
        <DialogContent>
          <DialogTitle>Edit Product</DialogTitle>
          <DialogDescription>Modify the product details.</DialogDescription>
          <form onSubmit={handleSubmitEdit(handleUpdateProduct)}>
            <Input
              {...registerEdit("name")}
              placeholder="Product Name"
              className="mb-2"
              required
            />
            <Input
              {...registerEdit("brand")}
              placeholder="Brand"
              className="mb-2"
              required
            />
            <Input
              {...registerEdit("model")}
              placeholder="Model"
              className="mb-2"
              required
            />
            <Input
              {...registerEdit("category")}
              placeholder="Category"
              className="mb-2"
              required
            />
            <Input
              {...registerEdit("description")}
              placeholder="Description"
              className="mb-2"
              required
            />
            <Input
              {...registerEdit("stock")}
              type="number"
              placeholder="Stock Quantity"
              className="mb-2"
              required
            />
            <Input
              {...registerEdit("price")}
              type="number"
              placeholder="Price"
              className="mb-2"
              required
            />
            <Input
              {...registerEdit("image")}
              placeholder="Image URL"
              className="mb-2"
              required
            />
            <Button type="submit" className="mt-2 w-full">
              Update
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Brand</TableHead>
            <TableHead>Model</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product: any) => (
            <TableRow key={product._id}>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.brand}</TableCell>
              <TableCell>{product.model}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>${product.price}</TableCell>
              <TableCell className="flex gap-2">
                <Button size="sm" onClick={() => handleEdit(product)}>
                  Edit
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => handleDelete(product._id)}
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
