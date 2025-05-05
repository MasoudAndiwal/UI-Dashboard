import { Outlet } from "react-router"; 

const dashboard = () => {
    return(
        <>
            <div>Dashboard</div>

            <aside className="children ">
                    <Outlet />
        </aside>
        </>
    )
}
export default dashboard;