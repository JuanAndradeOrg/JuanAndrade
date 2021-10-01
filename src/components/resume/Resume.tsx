import React from 'react';
import './resume.css';
import { ResumeSection } from './ResumeSection';
import * as ResumeText from './resumeText';
import profilePicture from '../../utility/photo.jpg';
export function Resume() {
    
    return (
        <div className="floating-resume">
            <div className="resume-intro">
                <h1 className="main-title">JUAN JOSE ANDRADE PARDO</h1>
                <div className="resume-sub-title">
                    <h2>SOFTWARE ENGINEER</h2>
                </div>
            </div>
            <div className="resume-content">
                <div className="general-column personal-column">
                    <div className="fake-background"></div>
                    <div className="photo-container">
                        <img className="photo" src={profilePicture}  alt="main-photo" />
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
                    <ResumeSection 
                        title={ResumeText.Certifications.title}
                        sectionItems={ResumeText.Certifications.sectionItems}
                    />
                </div>
            </div>
        </div>
    );
}
