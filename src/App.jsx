import { ChatCircleDots, List } from "phosphor-react";
import {
    createBrowserRouter,
    Route,
    RouterProvider,
    Routes,
    useNavigate,
} from "react-router-dom";
import { createContext, useState } from "react";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import Template from "./Template";

export const PortfolioContext = createContext();

const router = createBrowserRouter([
    {
        path: "/portfolio",
        element: <Template />,
        children: [
            {
                path: "/portfolio",
                element: <Home />,
            },
            {
                path: "/portfolio/projects/:name",
                element: <ProjectDetail />,
            },
        ],
    },
]);

export default function App() {
    return (
        <>
            <PortfolioContext.Provider>
                <RouterProvider router={router} />
            </PortfolioContext.Provider>
        </>
    );
}
