import {
  Home,
  Package,
  Settings,
  ShoppingCart,
  User,
  Users,
} from "lucide-react";

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
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Profile",
    url: "/dashboard",
    icon: User,
  },
  {
    title: "Products",
    url: "/dashboard/product",
    icon: Package,
  },
  {
    title: "Users",
    url: "/dashboard/user",
    icon: Users,
  },
  {
    title: "Orders",
    url: "/dashboard/order",
    icon: ShoppingCart,
  },

  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

const customerRoute = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Profile",
    url: "/dashboard",
    icon: User,
  },
  {
    title: "Order",
    url: "/dashboard/order",
    icon: ShoppingCart,
  },

  {
    title: "Settings",
    url: "#",
    icon: Settings,
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
