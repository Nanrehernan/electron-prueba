import React, { Fragment } from "react"
import {HashRouter as Router, Routes, Route} from "react-router-dom"
import Header from "./pure/Header"
import Menu from "./pure/Menu"

export default function Main(){
    return (
        <Fragment>
            <Header />
            <Router>
                <Routes>
                    <Route path="/" element={<Menu />} />
                    <Route path="/header" element={<Header />}/>
                </Routes>
            </Router>
        </Fragment>
    )
}