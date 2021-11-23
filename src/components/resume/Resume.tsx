import React from 'react';
import './resume.css';
import { ResumeSection } from './ResumeSection';
import * as ResumeText from './resumeText';
import profilePicture from '../../utility/photo.jpg';
import resumePDF from '../../utility/resume.pdf';
import DownloadIcon from '@mui/icons-material/Download';
import { IconButton } from '@mui/material';
// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';

type IResume = {
    activateTab?: (tab: String) => void;
}

export function Resume(props: IResume) {
    /* const generatePDF = () => {
            const input: HTMLElement = document.getElementById('resume')!;
            html2canvas(input)
              .then((canvas) => {
                const imgData: string = canvas.toDataURL('image/png');
                const pdf = new jsPDF();

                var width = pdf.internal.pageSize.getWidth();
                var height = pdf.internal.pageSize.getHeight();
                pdf.addImage(imgData, 'PNG', 0, 0, width, height);
                pdf.save("download.pdf");
              });
    } */
    if (props.activateTab) {
        props.activateTab('resume');
    }

    return (
        <div className="floating-resume" id="resume">
            <div className="resume-intro">
                <h1 className="main-title">JUAN JOSE ANDRADE PARDO</h1>
                <div className="resume-sub-title">
                    <h2>SOFTWARE ENGINEER</h2>
                </div>
                <a className="download-button"  href={resumePDF} download="AndradeResume.pdf">
                    <IconButton  aria-label="download resume">
                        <DownloadIcon htmlColor="#ffffff"/>
                    </IconButton>
                </a>
            </div>
            <div className="resume-content">
                <div className="general-column personal-column">
                    <div className="fake-background"></div>
                    <div className="photo-container">
                        <img className="photo" src={profilePicture}  alt="main-profile" />
                    </div>
                    <ResumeSection 
                        title={ResumeText.ContactInfo.title}
                        sectionItems={ResumeText.ContactInfo.sectionItems}
                    />
                    <ResumeSection 
                        title={ResumeText.Skills.title}
                        sectionItems={ResumeText.Skills.sectionItems}
                    />
                    <ResumeSection 
                        title={ResumeText.Languages.title}
                        sectionItems={ResumeText.Languages.sectionItems}
                    />
                    <ResumeSection 
                        title={ResumeText.Certifications.title}
                        sectionItems={ResumeText.Certifications.sectionItems}
                    />
                </div>
                <div className="general-column">
                    <ResumeSection 
                        title={ResumeText.Summary.title}
                        mainText={ResumeText.Summary.mainText}
                    />
                    <ResumeSection 
                        title={ResumeText.WorkExperience.title}
                        sectionItems={ResumeText.WorkExperience.sectionItems}
                    />
                    <ResumeSection 
                        title={ResumeText.Education.title}
                        sectionItems={ResumeText.Education.sectionItems}
                    />
                    <ResumeSection 
                        title={ResumeText.AwardsConferences.title}
                        sectionItems={ResumeText.AwardsConferences.sectionItems}
                    />
                </div>
            </div>
        </div>
    );
}
