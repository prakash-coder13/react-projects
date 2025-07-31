import { Link, Outlet } from "react-router-dom";

export function Root(){

    return (
        <>
         <nav className="flex bg-black  text-white py-4 pl-2">
            <li className="list-none ">
                <Link to={"/"}>Weather Dashboard</Link>
            </li>
         </nav>  

        <div className="ml-2">
             <Outlet></Outlet>
        </div>
        </>
    )
}