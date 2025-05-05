import  { SidebarComponent } from "@syncfusion/ej2-react-navigations"
import NavItems from "./navitem";
import { Link } from "react-router";

const MobileSidebar = () => {
  let sidebar: SidebarComponent;
  const toggleSidebar = () => {
    sidebar.toggle()
  }
  
  return (
    <div className="mobile-sidebar wrapper">
      <header>
        <Link to="/" className="flex items-center">
          <img 
            src="/assets/icon/logo.svg" 
            alt="logo"
            className="size-[30px]" 
          />
          <h1 className="ml-2">Tourvisto</h1>
        </Link>
          
        <button onClick={toggleSidebar}>
          <img 
            src="/assets/icons/menu.svg" 
            alt="menu" 
            className="size-7" 
          />
        </button>
      </header>

      <SidebarComponent
        width="270px"
        ref={(Sidebar: SidebarComponent) => { sidebar = Sidebar }}
        created={() => sidebar.hide()}
        closeOnDocumentClick={true}
        showBackdrop={true}
        type="Over"
      >
        <NavItems handleClick={toggleSidebar} />
      </SidebarComponent>
    </div>
  )
}

export default MobileSidebar;