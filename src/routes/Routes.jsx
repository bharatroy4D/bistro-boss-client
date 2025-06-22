import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ContactUs from "../Pages/Contact us/ContactUs";
import Dashboard from "../Pages/Dashboard/Dashboard";
import OurMenu from "../Pages/OurMenu/OurMenu";
import OurShop from "../Pages/OurShop/OurShop";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/contact', element: <ContactUs /> },
            { path: '/dashboard', element: <Dashboard /> },
            { path: '/ourMenu', element: <OurMenu /> },
            { path: '/ourShop', element: <OurShop /> },
        ]
    },
]);