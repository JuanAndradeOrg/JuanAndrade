import React from 'react';
import './resume.css';
import { ResumeSection } from './ResumeSection';
import * as ResumeText from './resumeText';
import profilePicture from '../../utility/photo.jpg';
import resumePDF from '../../utility/AndradeResume.pdf';
import DownloadIcon from '@mui/icons-material/Download';
import { IconButton } from '@mui/material';
import { savePDF } from '@progress/kendo-react-pdf';


export function Resume() {
    const resumeRef: any = React.createRef();

    const generatePDF = () => {
        savePDF(resumeRef.current, { 
            paperSize: 'A4',
            fileName: 'AndradeResume.pdf',
            keepTogether:'#resume',
            scale: 0.444
        });
    } 

    return (
        <div  id="resume" ref={resumeRef}>
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
