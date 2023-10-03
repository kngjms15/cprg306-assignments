"use client";

import { useState } from "react";


export default function Registration(){

    const[username, setUsername] = useState ("");

    const regFormSubmit = (event) => {
        event.preventDefault();

        alert(`Your Username: ${username}`);
        //alert("Your Username: " + username");

    }

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
        console.dir(event);
    }

    return(
        <div>
            <header>
                <h1>Registration Form</h1>
            </header>
            <form onSubmit={regFormSubmit}>

            <div>
                <label>Username:</label>
                <input type="text" required onChange={handleUsernameChange} value={username}/>
            </div>

            <div>
                <input type="submit" value="Submit"/>
            </div>
            </form>
        </div>
    )
}