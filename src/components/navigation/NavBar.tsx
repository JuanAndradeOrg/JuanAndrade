import React from 'react';
import './navBar.css';
import { Link } from "react-router-dom";

type INavBar = {
    activeTab?: String;
}

export function NavBar(props: INavBar) {
    const { activeTab } = props;
    return (
        <div className="nav-bar">
            <Link className={activeTab === 'portafolio' ? 'nav-item item-active': 'nav-item'}  replace to="/">Projects</Link>
            <Link className={activeTab === 'resume' ? 'nav-item item-active': 'nav-item'} replace to="/resume">Resume</Link>
        </div>
    );
}