import React from "react";
import ReactDom from "react-dom";
import "./styles/styles.scss";
import App from "./src/app";


ReactDom.render(
    <App />,
document.getElementById("app")
);

if (module.hot) {
    module.hot.accept();
}
