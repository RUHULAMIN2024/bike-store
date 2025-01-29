import { Home, Package, ShoppingCart, User, Users } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router";
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentUser } from "@/redux/services/auth/authSlice";

// Menu items.
const adminRoute = [
  {
    title: "Back Home",
    url: "/",
    icon: Home,
  },
  {
    title: "My Profile",
    url: "/dashboard",
    icon: User,
  },
  {
    title: "Manage Products",
    url: "/dashboard/manage-products",
    icon: Package,
  },
  {
    title: "Manage Users",
    url: "/dashboard/manage-users",
    icon: Users,
  },
  {
    title: "Manage Orders",
    url: "/dashboard/manage-orders",
    icon: ShoppingCart,
  },
];

const customerRoute = [
  {
    title: "Back Home",
    url: "/",
    icon: Home,
  },
  {
    title: "My Profile",
    url: "/dashboard",
    icon: User,
  },
  {
    title: "My Order",
    url: "/dashboard/my-order",
    icon: ShoppingCart,
  },
];

export function AppSidebar() {
  const user = useAppSelector(selectCurrentUser);

  const items = user?.role == "admin" ? adminRoute : customerRoute;

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
