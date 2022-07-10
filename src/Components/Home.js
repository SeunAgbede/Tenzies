import React from "react"
import { useNavigate } from "react-router-dom";
import "../Styles/Home.css"

export default function Home() {

    localStorage.clear()

    const [name, setName] = React.useState("user")

    // Handling data from the input field
    function handleChange(e) {
        setName(e.target.value)
    }

    const navigate = useNavigate()
    // Navigates to Game Component
    function toGamePage() {
        navigate('/game', { state: name })
    }


    return (

        <main>
            <div className="home">

                <h1>&#10024; Welcome to Tenzies! &#10024;</h1>

                <h3>Please enter your name</h3>

                <form className="home--form" onSubmit={toGamePage}>

                    <input
                        type="text"
                        placeholder="e.g John"
                        className="name--input"
                        onChange={handleChange}
                        required
                    />

                    <input className="roll--btn-1" type="submit" value="Start Game" />
                </form>

            </div>
        </main>
    )
}