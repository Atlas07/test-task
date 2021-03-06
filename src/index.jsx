import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route } from "react-router-dom"

import "semantic-ui-css/semantic.min.css"
import "./assets/fonts/style.css"

import App from "./containers/App"

ReactDOM.render(
    <BrowserRouter>
        <Route component={App} />
    </BrowserRouter>,
    document.getElementById("root")
)
