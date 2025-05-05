import { Outlet } from "react-router";

const Dashboard = () => {
    return (
        <>
            <div>Dashboard</div>
            <Outlet /> {/* Render nested routes here */}
        </>
    );
};

export default Dashboard;