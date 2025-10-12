import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Template from "./Template";
import { BrowserRouter, HashRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <HashRouter>
            <Template />
        </HashRouter>
    </StrictMode>
);
