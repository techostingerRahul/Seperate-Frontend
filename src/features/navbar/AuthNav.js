import React from "react";
import "./AuthNav.css";
import { Link } from "react-router-dom";

export default function AuthNav() {
    const styles = {
        boxShadow: "0px 5px 6.1px rgba(171, 29, 121, 0.23)",
    };

    return (
        <header className="z-10 relative" style={styles}>
            <div className="header-content ">
                <h1 className="logo-nav">
                        <h1 className="logo-h">Second Half</h1>
                </h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/register">Create a new account</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
