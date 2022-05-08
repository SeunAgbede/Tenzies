import React from "react"
import { Link } from "react-router-dom";

export default function NoMatch() {

    const styles = {
        fontSize: "100px"
    }


    return (
        <main>
            <h2>Sorry, page does not exist! </h2>

            <h1 style={styles}>&#128546;</h1>

            <p>
                <Link to="/">Go back to home page</Link>
            </p>

        </main>
    )
}