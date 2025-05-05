import Header from "components/Header";
import { Outlet } from "react-router";

const Dashboard = () => {
    const user = { name: "Admin" }; // Replace with actual user data
    return (
        <main className="dashboard wrapper">
            <Header 
                title={`Welcome ${user.name ?? 'Guest' } 👋`}
                description={`Track activity, trends and popular destinations in real time`}
            />

            Dashboard page contents 
        </main>
       );
};

export default Dashboard;