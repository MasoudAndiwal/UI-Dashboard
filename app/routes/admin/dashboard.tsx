import { StatsCard, TripCard } from "components";
import Header from "components/Header";
import { Outlet } from "react-router";

const Dashboard = () => {
    const user = { name: "Admin" }; // Replace with actual user data
    const DashboardStats = {
        totalusers : 12450 ,
        userJoined : { currentMonth : 218 , lastMonth : 176} , 
        totalTrips : 3210 , 
        tripCreated : {currentMonth : 150 , lastMonth :  250 },
        userRole : {total : 62 , currentMonth : 25 , lastMonth :15 },

    }
    const {totalusers , userJoined , totalTrips , tripCreated , userRole} = DashboardStats;

    return (
        <main className="dashboard wrapper">
            <Header 
                title={`Welcome ${user.name ?? 'Guest' } 👋`}
                description={`Track activity, trends and popular destinations in real time`}
            />
            <section className="flex felx-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
               
                <StatsCard 
                headerTitle = "Total users"
                total = {totalusers}
                currentMonthCount={userJoined.currentMonth}
                lastMonthCount={userJoined.lastMonth}
                />
              <StatsCard 
                headerTitle="Total Trips"
                total={totalTrips}
                currentMonthCount={tripCreated.currentMonth}
                lastMonthCount={tripCreated.lastMonth}
                />
              <StatsCard 
                headerTitle="Active Users"
                total={totalTrips}
                currentMonthCount={tripCreated.currentMonth}
                lastMonthCount={tripCreated.lastMonth}
                />
                </div>
            </section>
        
        </main>
       );
};

export default Dashboard;