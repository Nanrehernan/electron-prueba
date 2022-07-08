import React from "react";
import { Link } from "react-router-dom";

export default function Menu(){
    return (
        <nav>
            <Link to="/header" className="btn btn-primary">Header</Link>
            <Link to="/" className="btn btn-primary">Hola</Link>
            <Link to="/" className="btn btn-primary">Hola</Link>
            <Link to="/" className="btn btn-primary">Hola</Link>
            <Link to="/" className="btn btn-primary">Hola</Link>
        </nav>
    )
}