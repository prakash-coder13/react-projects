import { useEffect, useState } from "react";
import WidgetData from "./Widget";
import Widget from "./Widget";

export interface WidgetAction {
  label: string;
  target: string;
}
export interface WidgetData {
  title: string;
  subtitle: string;
  description: string;
  index: number;
  action: WidgetAction;
}
const getWidgets =  ():WidgetData[] => {
  const widgetData: WidgetData[] = [
    {
      title: "weather",
      subtitle: "how is looking out there",
      description:
        "The weather widget gives weather conditions around the world",
        "index": 0,
        action: {
            label:"Explore",
            target:"/weather"
        }
    },
     {
      title: "temperature",
      subtitle: "is it getting hot",
      description:
        "The temperature widget gives temerature conditions around the world",
        "index": 1,
        action: {
            label:"Explore",
            target:"/temperature"
        }
    },
     {
      title: "humidity",
      subtitle: "is it sweaty?",
      description:
        "The weather widget gives humidity conditions around the world",
        "index": 2,
        action: {
            label:"Visit",
            target:"/humidity"
        }
    },
     {
      title: "wind",
      subtitle: "hold it out there",
      description:
        "The weather widget gives wind conditions around the world",
        "index": 3,
        action: {
            label:"Explore",
            target:"/wind"
        }
    },
     {
      title: "Atmospheric pressure",
      subtitle: "Dont be stressed",
      description:
        "The weather widget gives Atmospherric pressure conditions around the world",
        "index": 4,
        action: {
            label:"Explore",
            target:"/pressure"
        }
    },
     {
      title: "precipitation",
      subtitle: "rain, show, sleet, hail, drizzle out ",
      description:
        "The weather widget gives precipitations  conditions around the world",
        "index": 5,
        action: {
            label:"Explore",
            target:"/precipitation"
        }
    },
     {
      title: "visiblilty",
      subtitle: "how is looking out there?",
      description:
        "The weather widget gives visiblity conditions around the world",
        "index": 6,
        action: {
            label:"Explore",
            target:"/visibility"
        }
    },
     {
      title: "air quality",
      subtitle: "don't hold your breath..",
      description:
        "The weather widget gives conditions  of air quality around the world",
        "index": 7,
        action: {
            label:"Explore",
            target:"/air"
        }
    },

  ];

  return widgetData;
};
export default function WidgetContainer() {
    const [widgetsData, setWidgetsData] = useState<WidgetData[]>([])
    useEffect(
        ()=>{
            console.log("Will get widgets ");
            setWidgetsData(()=>getWidgets());
        },[]
    )
  return (
    <>
      <div className="my-10"> Welcome to the weather dashboard. You can explore the weather around the world here  </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {
       widgetsData &&  widgetsData.map(
            (d:WidgetData)=>{
                return < Widget {...d} key={d.index}></Widget>
            } 
        )}
       
      </div>
    </>
  );
}
