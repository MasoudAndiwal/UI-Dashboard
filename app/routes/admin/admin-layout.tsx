import { MobileSidebar, NavItems } from "components";
import {SidebarComponent} from '@syncfusion/ej2-react-navigations';
import {Outlet} from 'react-router';
const AdminLayout = () => {
    return (
        <div className="admin-layout">
            <MobileSidebar />   

            <aside className="w-full max-w-[270px] hidden lg:block">
                <SidebarComponent width={270} enableGestures={false} >
                    <NavItems />
                </SidebarComponent>
            </aside>
            <main className="children">   
                <p>Admin layout</p>
                <Outlet />
            </main>
        </div>
    );
}

export default AdminLayout;
