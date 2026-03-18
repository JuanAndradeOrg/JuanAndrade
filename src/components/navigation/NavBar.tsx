import React from 'react';
import './navBar.css';
import { PageNames } from '../../App';
import { INavBarItemPage, NavBarItem } from './NavBarItem';
import { NavbarItemWithDropDown } from './NavBarItemWithDropdown';

type INavBar = {
    activePageName: PageNames;
}

export function NavBar(props: INavBar) {
    const { activePageName } = props;
    const projectsNavBarDropdownOptions: INavBarItemPage[] = [
        {page: PageNames.RELICS_OF_THE_FALLEN, pageText: "Relics of the Fallen"},
        {page: PageNames.JOURNEY_TO_LIGHT, pageText: "Journey to light"},
        {page: PageNames.GIFT, pageText: "Gift"}
    ];
    return (
        <div className="nav-bar">
            <NavBarItem 
                navBarPage={
                    ({
                        page: PageNames.RESUME,
                        pageText: "Resume",
                    })
                } 
                activePageName={activePageName}
            />
            <NavbarItemWithDropDown
                navBarItemText="Projects"
                navBarItemPages={projectsNavBarDropdownOptions}
                activePageName={activePageName}
            />
        </div>
    );
}