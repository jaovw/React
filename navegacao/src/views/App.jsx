import React from "react";
import "./App.css"
import Content from "../components/layouts/Content";
import Menu from "../components/layouts/Menu";

const App = props => {
    return (
        <div className="App">
            <Menu/>
            <Content/>
        </div>
    )
}

export default App