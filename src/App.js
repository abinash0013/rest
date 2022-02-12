import React from "react";
import "./App.css";
import Header from "./Components/Header";
import About from "./Components/About";
import Shop from "./Components/Shop";
import Menu from "./Components/Menu";

function App() {
    return (
        <div className="App">
            <Header />
            <About />
            <Shop />
            <Menu />
        </div>
    );
}

export default App;
