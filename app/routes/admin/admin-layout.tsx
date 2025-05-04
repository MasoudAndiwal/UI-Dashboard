import { Outlet } from "react-router"

const AdminLayout = () => {
    return (
        <div className="admin-layout">
            mobileSidebar   <br />

            <aside className="W-full max-w-[270px] hidden lg:block">
                Sidebar
            </aside>

            {/* ⬇️ اینجا باید باشه تا dashboard یا سایر routeهای فرزند نمایش داده بشن */}
            <main className="flex-1">
                <Outlet />
            </main>
        </div>
    );
}

export default AdminLayout;
