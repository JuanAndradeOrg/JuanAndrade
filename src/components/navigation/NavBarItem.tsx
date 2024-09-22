import { Link } from "react-router-dom";
import { PageNames, PagePathMapping } from "../../App";
import './navBar.css';

export type INavBarItemPage = {
    page: PageNames;
    pageText: String;
}

type INavBarItem = {
    navBarPage: INavBarItemPage;
    activePageName: String;
}

export function NavBarItem(props: INavBarItem) {
    const { navBarPage, activePageName } = props;
    return (
        <Link className={activePageName === navBarPage.page ? 'nav-item item-active': 'nav-item'} replace to={PagePathMapping[navBarPage.page]}><span>{navBarPage.pageText}</span></Link>
    );
}