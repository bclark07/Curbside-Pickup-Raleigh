import React from "react";
import { BrowserRouter as Router } from 'react-router-dom'
import ReactDOM from "react-dom";
import App from "./App";

const RouterApp = () => (
    <Router>
        <App />
    </Router>
)

ReactDOM.render(<RouterApp />, document.getElementById("root"));
