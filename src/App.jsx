import { createContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Template from "./Template";
import Home from "./pages/Home";

export const PortfolioContext = createContext();

const router = createBrowserRouter([
    {
        path: "/portfolio/",
        element: <Template />,
        children: [
            {
                path: "/portfolio/",
                element: <Home />,
            },
        ],
    },
]);

export default function App() {
    return (
        <PortfolioContext.Provider>
            <RouterProvider router={router} />
        </PortfolioContext.Provider>
    );
}
