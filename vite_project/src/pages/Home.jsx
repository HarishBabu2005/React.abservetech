import React from "react";
import "./Home.css"

export default function Home () {
    const style = {
        color: "red"
    }
    return (
        <div style={{color: "blue"}}>
            <div>
            Home Page
        </div>
        <div style={style}>
            Home Page
        </div>
        <div>
            Home Page
        </div>
        </div>
    )
}

const Home2 = () => {
    return (
        <div>Home 2</div>
    )
}

function Home3 () {
    return (
        <div>
            Home Page
        </div>
    )
}

export { Home2, Home3 }
