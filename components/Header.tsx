import { useLocation } from "react-router"; 
import {  cn } from "~/lib/utils";

interface props {
    title: string;
    description: string;
}
const Header =  ({title , description } : props) => {
    const location = useLocation()
    return (
        <div>
            <h1 className={cn("text-dark-100",   location.pathname === "/" ? 'text-2xl md:text-4xl' : 'text-xl md:text-2xl font-semibold' )}>{title}</h1>
            <br></br>
            <p>{description}</p>
        </div>
    )
}
export default Header ;