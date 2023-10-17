import React from "react";

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <a className="navbar-brand" href="#">TextUtils</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home </a>
                    </li>
                </ul>
            </div>

            <div className={`custom-control custom-switch text-${props.mode === "light" ? "dark" : "light"}`}>
                <input type="checkbox" onClick={props.toggleMode} className="custom-control-input" id="customSwitch1" />
                <label className="custom-control-label" htmlFor="customSwitch1">Enable Dark Mode</label>
            </div>
        </nav>
    )
}