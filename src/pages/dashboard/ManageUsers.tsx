/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { toast } from "sonner";
import Container from "@/components/Container";
import {
  useDeleteUserMutation,
  useGetAllCustomersQuery,
} from "@/redux/services/auth/auth";

export default function ManageUsers() {
  const { data: users = [], refetch } = useGetAllCustomersQuery(undefined);
  const [deleteUser] = useDeleteUserMutation();

  const handleDelete = async (id: string) => {
    const result = await deleteUser(id);
    refetch();
    if (result?.data?.success) {
      toast("User deleted successfully!");
    }
  };

  return (
    <Container>
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Manage Users
        </h2>
        {/* You can add an Add User button here if needed in the future */}
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users?.data?.map((user: any) => (
            <TableRow key={user._id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell className="flex gap-2">
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => handleDelete(user._id)}
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
