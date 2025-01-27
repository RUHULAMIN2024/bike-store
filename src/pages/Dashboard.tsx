import Container from "@/components/Container";
import { Outlet } from "react-router";

const Dashboard = () => {
  return (
    <div className="bg-red-300 w-full">
      <Container>
        <Outlet />;
      </Container>
    </div>
  );
};

export default Dashboard;
