type IRedirectionLink = {
    destinationPath: string;
    contentText: string;
    classNames?: string;
}

export function RedirectionLink(props: IRedirectionLink) {
    const { destinationPath, contentText, classNames } = props;
    const handleReloadClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const newHash = e.currentTarget.dataset.path || "#";
        e.preventDefault();
        if (window.location.hash === newHash) {
            return;
        }
    
        window.location.hash = newHash;
        window.location.reload();
    };

    return (
        <a 
        onClick={handleReloadClick}
        data-path={`#${destinationPath}`}
        className={classNames}>
            {contentText}
       
        </a>                  
    );
};