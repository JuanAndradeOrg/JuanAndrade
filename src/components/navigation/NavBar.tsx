import React, { useState } from 'react';
import './navBar.css';
import { Link } from "react-router-dom";
import { PageNames, PagePathMapping } from '../../App';


type INavBar = {
    activePageName: PageNames;
}

export function NavBar(props: INavBar) {
    const { activePageName } = props;
    return (
        <div className="nav-bar">
            <Link className={activePageName === PageNames.RESUME ? 'nav-item item-active': 'nav-item'} replace to={PagePathMapping[PageNames.RESUME]}>Resume</Link>
            <Link className={activePageName === PageNames.JOURNEY_TO_LIGHT ? 'nav-item item-active': 'nav-item'}  replace to={PagePathMapping[PageNames.JOURNEY_TO_LIGHT]}>Journey To Light</Link>
            <Link className={activePageName === PageNames.GIFT ? 'nav-item item-active': 'nav-item'}  replace to={PagePathMapping[PageNames.GIFT]}>Gift</Link>
        </div>
    );
}