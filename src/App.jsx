import { createContext } from "react";
import { createBrowserRouter, RouterProvider, HashRouter as Router } from "react-router-dom";
import Template from "./Template";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import AboutMe from "./pages/AboutMe";

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
            {
                path: "/portfolio/projects",
                element: <Projects />,
            },
            {
                path: "/portfolio/contact",
                element: <Contact />,
            },
            {
                path: "/portfolio/about-me",
                element: <AboutMe />,
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
