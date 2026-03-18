import { PagePathMapping } from "../../App";
import { INavBarItemPage } from "./NavBarItem";
import './navBar.css';
import { useState } from "react";
import classNames from "classnames";
import { RedirectionLink } from "../redirectionLink/RedirectionLink";

type INavBarItemWithDropDown = {
    navBarItemText: string;
    navBarItemPages: INavBarItemPage[];
    activePageName: string;
}

export function NavbarItemWithDropDown(props: INavBarItemWithDropDown) {
    const { navBarItemText, activePageName, navBarItemPages } = props;
    const [showDropDown, setShowDropDown] = useState(false);

    return (
        <div onMouseEnter={() => setShowDropDown(true)} onMouseLeave={() => setShowDropDown(false)} className={navBarItemPages.reduce((prev, navBarItemPage) => (prev || navBarItemPage.page === activePageName), false) ? 'nav-item item-active': 'nav-item'}>
            <span>{navBarItemText}</span>
            <div className={classNames(!showDropDown ? "hide-dropdown": null ,"navbar-dropdown")}>
                {navBarItemPages.map((option, index) => (
                        <li key={index} className="navbar-dropdown-option">
                            <RedirectionLink destinationPath={PagePathMapping[option.page]} contentText={option.pageText}/>
                        </li>
                    ))}
            </div>
        </div>
    );

};