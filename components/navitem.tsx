import {  cn } from "~/lib/utils";
import { Link, NavLink } from "react-router";
import {sidebarItems } from "~/constants";
import { Sidebar } from "@syncfusion/ej2-react-navigations";

const NavItems = ({handleClick}: {handleClick?: () => void}) => {
    const user ={
        name: 'Masoud',
        email: 'masoudandiwal89@gmail.com',
        imgUrl: '/assets/images/david.webp',
    }
    return (
      <section className="nav-items ">
            <Link to='/' className="link-logo">
            <img src="/assets/icons/logo.svg" alt="logo"
            className="size-[30px]" />
            <h1>Tourvisto</h1>
            </Link>

            <div className="container">
            
                <nav>
                    {sidebarItems.map(({id , href , icon , label}) =>
                    <div>
                        <NavLink to={href} key={id}>
                            {({isActive}: {isActive : boolean})=>(
                                <div className={
                                    cn(
                                        'group nav-item' ,{'bg-primary-100 !text-white': isActive
                                        })} onClick={handleClick}>
                                            <img src="icon" alt="label" 
                                            className={`group-hover: brightness-0 size-0 group-hover:invert ${isActive ? 'brightness-0 invert ': 'text-dark-200' } `}
                                            />

                                    {label}
                                </div>
                            )}
                        </NavLink>
                    </div>
                    )}
                </nav>

                <footer className="nav-footer">
                    <img src={user?.imgUrl || '/assets/images/david.webp'} alt={user.name || "Masoud"} className="w-10 h-10 rounded-full" />

                    <article className="ml-4">
                        <h2 className="text-sm font-semibold">{user.name}</h2>
                        <p className="text-xs text-gray-500">{user.email}</p>
                    </article>

                    <button
                        onClick={() => {
                            console.log('Logout');
                        }}
                        className="cursor-pointer "
                    >
                        <img 
                            src="/assets/icons/logout.svg"
                            alt="logout"
                            className="size-6"
                        />
                    </button>
                </footer>
                
            </div>
        </section>
    )
  
}
export default NavItems;