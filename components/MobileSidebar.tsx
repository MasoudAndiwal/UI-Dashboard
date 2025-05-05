import { SidebarComponent } from "@syncfusion/ej2-react-navigations"
import NavItems from "./navitem";
import { Link } from "react-router";


{/* @ts-ignore */}

const mobileSidebar = () => {
    let sidebar : SidebarComponent; 
    const toggleSidebar = ()=>{
        sidebar.toggle()
    }
   return(
    <div className="mobile-sidebar wrapper">
        
        <header>
           <Link to="/">
           <img src="/assets/icon/logo.svg" alt="logo"
           className="size-[30px]" />
           <h1>Tourvisto</h1>
          <NavItems handleClick={toggleSidebar} />
          </Link>
           
            <button onClick={()=> sidebar.toggle()}></button> 
           <img src="/assets/icons/menu.svg" alt="menu" className="size-7" />
        </header>

            <SidebarComponent
            width="270px"
            ref={(instance: SidebarComponent) => { sidebar = instance; }}
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
export default mobileSidebar