import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentUser } from "@/redux/services/auth/authSlice";
import {
  useGetUserByEmailQuery,
  useUpdatePasswordMutation,
} from "@/redux/services/auth/auth";
import { toast } from "sonner";

export default function Profile() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const userInfo = useAppSelector(selectCurrentUser);
  const { data } = useGetUserByEmailQuery(userInfo?.email);

  const user = data?.data[0];
  const [updatePassword] = useUpdatePasswordMutation();

  const email = userInfo?.email;
  const handlePasswordChange = async () => {
    if (newPassword !== confirmPassword) {
      toast.error("New Password do not match!");
      return;
    }

    const result = await updatePassword({ email, newPassword });
    console.log(newPassword);
    console.log(result);
    if (result?.data?.success) {
      toast("Password updated successfully!");
    } else {
      toast("Failed to update Password!");
    }
  };

  return (
    <Card className="w-full shadow-lg rounded-2xl bg-white p-6">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-800 text-center">
          Profile Information
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="text-lg text-gray-700">
            <p>
              <strong>Name:</strong> {user?.name}
            </p>
            <p>
              <strong>Email:</strong> {user?.email}
            </p>
            <p>
              <strong>Role:</strong> {user?.role}
            </p>
          </div>
          <CardTitle className="mt-8 text-xl font-semibold text-gray-800">
            Update Password
          </CardTitle>
          <Input
            className="p-3 border border-gray-300 rounded-lg"
            type="password"
            placeholder="Current Password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
          <Input
            className="p-3 border border-gray-300 rounded-lg"
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <Input
            className="p-3 border border-gray-300 rounded-lg"
            type="password"
            placeholder="Confirm New Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
            onClick={handlePasswordChange}
          >
            Update Password
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
