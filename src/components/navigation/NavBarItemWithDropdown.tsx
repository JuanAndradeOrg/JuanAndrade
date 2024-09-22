import { Link } from "react-router-dom";
import { PagePathMapping } from "../../App";
import { INavBarItemPage } from "./NavBarItem";
import './navBar.css';
import { useState } from "react";

type INavBarItemWithDropDown = {
    navBarItemText: String;
    navBarItemPages: INavBarItemPage[];
    activePageName: String;
}

export function NavbarItemWithDropDown(props: INavBarItemWithDropDown) {
    const { navBarItemText, activePageName, navBarItemPages } = props;
    const [showDropDown, setShowDropDown] = useState(false);
    return (
        <div onMouseEnter={() => setShowDropDown(true)} onMouseLeave={() => setShowDropDown(false)} className={navBarItemPages.reduce((prev, navBarItemPage) => (prev || navBarItemPage.page === activePageName), false) ? 'nav-item item-active': 'nav-item'}>
            <span>{navBarItemText}</span>
            {showDropDown && (
                <div className="navbar-dropdown">
                    {navBarItemPages.map((option, index) => (
                            <li key={index} className="navbar-dropdown-option">
                                <Link replace to={PagePathMapping[option.page]}>{option.pageText}</Link>
                            </li>
                        ))}
                </div>
            )}
        </div>
    );

};