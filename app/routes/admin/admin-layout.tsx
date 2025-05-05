import React from "react";
import { MobileSidebar, NavItems } from "components";
import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import { Outlet } from "react-router";
import { useMediaQuery } from "react-responsive";

const AdminLayout = () => {
  // Detect if the screen width is less than 1024px (mobile mode)
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  console.log('Is mobile:', isMobile); // <-- Add debug line here

  return (
    <div className="admin-layout">
      {isMobile ? (
        // Render MobileSidebar for mobile mode
        <MobileSidebar />
      ) : (
        // Render desktop SidebarComponent for larger screens
        <aside className="w-full max-w-[270px] hidden lg:block">
          <SidebarComponent width="270px" enableGestures={false}>
            <NavItems />
          </SidebarComponent>
        </aside>
      )}

      <main className="children">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;