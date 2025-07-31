import { Link } from "react-router-dom"
import type { WidgetData } from "./WidgetContainer"


export default function  Widget( props: WidgetData){

    return (
        <>
       <div className="flex flex-col justify-between w-50 border border-2 p-1">
       Widget
        <div className="flex justify-content text-blue-600">
            <div> <img alt="icon"></img></div>
        <div className="flex flex-col ml-2 ">
            <div className="font-bold">{props.title}</div>
        <div className="text-xs">{props.subtitle}</div>
        </div>
        </div>
        <div className="my-8  text-sky-400">{props.description}</div>
        <div className="flex ">
            <button className=" flex bg-indigo-500 hover:cursor-pointer hover:bg-fuchsia-500 border border-1 p-2 ml-4 text-white tracking-wide">
               <Link to={props.action.target}>{props.action.label}</Link>
                </button>
        </div>
       </div>
        </>
    )
}