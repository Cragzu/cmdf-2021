import './App.css';
import Sidebar from './components/Sidebar';

import Driver from "./components/Driver";
import React from "react";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Driver/>
            </header>
        </div>
    );
}

export default App;
