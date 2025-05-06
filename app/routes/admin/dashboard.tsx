import { StatsCard, TripCard } from "components";
import Header from "components/Header";
import { Outlet } from "react-router";
import { DashboardStats, user, allTrips , users } from "~/constants";
const Dashboard = () => {
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
            <section className="container">
                <h1 className="text-xl font-semibold text-dark-100"> Created Trips</h1>
                <div className="trip-grid">
                    {allTrips.slice(0, 4).map(({ id, name, imageUrls, itinerary, tags, travelStyle, estimatedPrice }) => (
                        <TripCard
                            key={id}
                            id={id.toString()}
                            name={name}
                            imageUrls={imageUrls || []} // Ensure imageUrls is at least an empty array
                            itinerary={itinerary}
                            tags={tags}
                            travelStyle={travelStyle}
                            estimatedPrice={estimatedPrice}
                        />
                    ))}
                </div>
            </section>
        </main>
       );
};

export default Dashboard;