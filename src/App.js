import React from "react"


import Layout from "./Components/Layout";
import Home from "./Components/Home"
import Game from "./Components/Game"
import NoMatch from "./Components/NoMatch";
import { Routes, Route } from "react-router-dom";


export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route index element={<Home />} />
                <Route path="game" element={<Game />} />
                <Route path="*" element={<NoMatch />} />
            </Route>
        </Routes>
    )
}