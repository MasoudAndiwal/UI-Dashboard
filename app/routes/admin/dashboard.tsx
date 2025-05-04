import { Outlet } from "react-router"; // یا "react-router-dom" بسته به پروژه‌ات

const dashboard = () => {
    return(
        <>
            <div>Dashboard</div>

            <aside className="children ">
                <br />
            <Outlet />
        </aside>
        </>
    )
}
export default dashboard;