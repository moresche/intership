import Providers from "./providers";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

ReactDOM.render(
    <React.StrictMode>
        <Providers>
            <App />
        </Providers>
    </React.StrictMode>,
    document.getElementById("root")
);
