import React, { useState } from "react"
import "./App.css"
import Logo from "./asset/google-logo.png"

function App() {
    //Using useState to set the background color
    const [color, setColor] = useState("#fff")
    //txtHandler for performing the onChange function specified in the input box
    const txtHandler = (e) => {
        setColor(e.target.value)
        console.log(e.target.value)
    }

    return (
        <div
            className="App"
            style={{ backgroundColor: color, height: "100vh" }}
        >
            <div className="header" style={{ backgroundColor: "#fff" }}>
                {" "}
                {/*This is the header part, it won't change as per the textbox to provide text accesibility */}
                Use the input box and see the magic ;)
            </div>
            <div className="page">
                <img src={Logo} alt="" style={{ width: "30%" }} />
                <input
                    type="text"
                    onChange={txtHandler}
                    name="A dummy search"
                    id=""
                    placeholder="Type anything here"
                    style={{ padding: "5px", width: "40%" }}
                />
            </div>
        </div>
    )
}

export default App
