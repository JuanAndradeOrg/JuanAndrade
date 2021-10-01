import React from 'react';
import './resumeSection.css';
import stickyDate from '../../utility/date-sticky.png';

type IResumeSection = {
    title: String;
    mainText?: String;
    sectionItems?: Array<IResumeSectionItem>;
}

type IResumeSectionItem = {
    title?: String;
    subTitle?: String;
    content?: String;
    finalDate?: String;
    startDate?: String;
    subItems?: Array<String>;
}

export function ResumeSection(props: IResumeSection) {
    const { title, mainText, sectionItems } = props;
    const sectionItemsElements = sectionItems?  sectionItems.map((sectionItem, sectionIndex) => (
        <li className={sectionItem.finalDate ? 'item-with-date': ''}>
            { sectionItem.finalDate && (
                <div className="date-container">
                    <div className="item-date">
                        <img  className="sticky-date" src={stickyDate}  alt={'Date:'+ sectionItem.finalDate} />
                        <div className="date-text-container">
                            <p className="date-text">{sectionItem.finalDate}</p>
                        </div>
                    </div>
                    {sectionIndex === 0 && <div className="date-pointer fake-date-background"></div>}
                    <svg className="date-pointer" height="12" width="12">
                        <circle cx="6" cy="6" r="6" fill="#e0b27de7" />
                    </svg>
                    {sectionItem.startDate && (
                        <>
                            <p className="date-text start-date">{sectionItem.startDate}</p>
                            <svg className="date-pointer-bottom" width="12" height="6">
                                <rect width="12" height="6" fill="#e0b27de7" />
                            </svg>
                            {(sectionIndex > 0 && sectionItem.startDate !== sectionItems[sectionIndex-1].startDate) 
                                && <div className="fake-bottom-date-background"></div>
                            }
                        </>
                        )}
                </div>
            )}
            <div className={sectionItem.finalDate ? 'content-container': ''}>
                {sectionItem.title && <h4>{sectionItem.title} </h4>}
                {sectionItem.subTitle && <p className="sub-title">{sectionItem.subTitle}</p>}
                {sectionItem.content && <p>{sectionItem.content}</p>}
                {sectionItem.subItems ? sectionItem.subItems.map((sectionSubItem) => <p>{sectionSubItem}</p>) : <></>}
            </div>
        </li>
    )) : <></>;

    return (
        <div className="section-container">
            <h3 className="section-title">{title}</h3>
            {mainText && <p>{mainText}</p>}
            {sectionItems && <ul className="section-item">{sectionItemsElements}</ul>}
        </div>
    );
}