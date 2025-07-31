import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import WidgetContainer from "./components/WidgetContainer";
import WeatherPage from "./routes/WeatherPage";
import TemperaturePage from "./routes/TemperaturePage";
import HumidityPage from "./routes/HumidityPage";
import WindPage from "./routes/WindPage";
import PressurePage from "./routes/Pressure";
import PercipitationPage from "./routes/PercipitationPage";
import VisibilityPage from "./routes/VisibilityPage";
import AirQualityPage from "./routes/AirQualityPage";
import { Root } from "./components/Root";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <WidgetContainer /> },
        { path: "/weather", element: <WeatherPage /> },
        { path: "/temperature", element: <TemperaturePage /> },
        { path: "/humidity", element: <HumidityPage /> },
        { path: "/wind", element: <WindPage /> },
        { path: "/pressure", element: <PressurePage /> },
        { path: "/percipitation", element: <PercipitationPage /> },
        { path: "visibility", element: <VisibilityPage /> },
        { path: "air", element: <AirQualityPage /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
