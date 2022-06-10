import React from "react";
import "./App.css"
import { BrowserRouter as Router } from 'react-router-dom'
import Content from "../components/layouts/Content";
import Menu from "../components/layouts/Menu";

const App = props => {
    return (
        <div className="App">
            <Router>
                <Menu />
                <Content />
            </Router>

        </div>
    )
}

export default App