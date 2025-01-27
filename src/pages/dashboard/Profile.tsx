import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentUser } from "@/redux/services/auth/authSlice";

export default function Profile() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const userInfo = useAppSelector(selectCurrentUser);

  const handlePasswordChange = () => {
    if (newPassword !== confirmPassword) {
      alert("New passwords do not match");
      return;
    }
    // API call to update password
    alert("Password updated successfully");
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
              <strong>Name:</strong> {userInfo?.name}
            </p>
            <p>
              <strong>Email:</strong> {userInfo?.email}
            </p>
            <p>
              <strong>Role:</strong> {userInfo?.role}
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
