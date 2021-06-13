import './App.css';
import React from "react";
import Button from "./components/ButtonContainer/Button";

function handleClick(){
        console.log("clicked")
}

function App() {
    return (
        <div className="App">
            <Button onClick={handleClick} color="primary" startIcon="local_grocery_store" endIcon="local_grocery_store"/>
        </div>
    );
}
export default App;
