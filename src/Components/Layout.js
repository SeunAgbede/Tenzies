import React from "react"
import { Outlet, Link } from "react-router-dom";

export default function Layout() {

    const styles = {
        color: "#0B2434",
        backgroundColor: "#FFFFFF",
        padding: "8px",
        borderRadius: "50%",
        marginBottom: "10px"

    }

    return (

        <div>
            <Link to="/"  >
                <span  style={styles} class="material-symbols-outlined">home
                </span>
            </Link>

            <Outlet />
        </div>
    
    );
}