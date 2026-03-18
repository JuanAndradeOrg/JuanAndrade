import { PageNames, PagePathMapping } from "../../App";
import './navBar.css';
import { RedirectionLink } from "../redirectionLink/RedirectionLink";

export type INavBarItemPage = {
    page: PageNames;
    pageText: string;
}

type INavBarItem = {
    navBarPage: INavBarItemPage;
    activePageName: string;
}

export function NavBarItem(props: INavBarItem) {
    const { navBarPage, activePageName } = props;
    return (
        <RedirectionLink classNames={activePageName === navBarPage.page ? 'nav-item item-active': 'nav-item'} destinationPath={PagePathMapping[navBarPage.page]} contentText={navBarPage.pageText}/>
    );
}