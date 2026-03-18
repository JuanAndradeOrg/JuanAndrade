export const Summary = {
    title: "Summary",
    mainText: "Software engineer with 6+ years of experience building scalable, high-availability systems in cloud environments. Skilled in full-stack development (Java, JavaScript, React.js, SQL) and AWS cloud (CDK/Terraform, Lambda, S3). Experienced in designing, launching, and optimizing products used by millions, with expertise in distributed systems, CI/CD, and agile practices."
};

export const WorkExperience = {
    title: "Work Experience",
    sectionItems: [
        {   
            title: "Amazon",
            subTitle: "Software Development Engineer",
            content: "Full stack software development for Amazon Business Registration team.",
            finalDate: "Nov 2025",
            keyPoints: [
                "Designed and integrated an automated load-testing framework into the CI/CD pipeline for the Amazon Business registration application, which exposed a critical load-balancer defect capping traffic at 50% and ultimately enabled the team to resolve the bottleneck and restore the system to 100% of its targeted capacity.",
                "Led the architectural transformation of an SMS and Email notification endpoint within distributed Amazon Business registration web application, successfully deploying the update to production with zero downtime to reduce message delivery latency by 60% without disrupting active users.",
                "Architected and implemented the registration capabilities for Spanish public entities within Amazon Business, enabling thousands of public sector organizations to register and establishing a scalable foundation for future European Union expansion.",
                "Led the technical planning and implementation of age-restriction system for Amazon Business registration, ensuring strict compliance with EU policies and preventing unauthorized account creation by minors.",
                "Mitigated a critical IDOR vulnerability within the registration service’s connection to Amazon’s address system, proactively securing backend systems and preventing potential data exposure for millions of customers.",
                "Modernized registration backend logging infrastructure by migrating from legacy hourly exports to AWS CloudWatch, leveraging real-time monitoring and telemetry to significantly accelerate the resolution of production issues.",
                "Resolved a critical defect affecting several downstream relational databases by patching an AWS Lambda function and executing a data backfill, successfully restoring cross-team operations affected by corrupted information.",
                "Engineered an AWS Step Function to safely test 15 redesigned registration emails in different regions, launching the policycompliant templates across 10 marketplaces and 20+ languages with zero production impact.",
            ],
        },
        {   
            title: "Scotiabank",
            subTitle: "Full Stack Software Engineer Specialist.",
            content: "Full Stack software development for ScotiaHome (Application that manages Scotiabank mortgages in Canada).",
            finalDate: "Aug 2022",
            keyPoints: [
                "Integrated mortgage platform with a KYC micro-frontend, guaranteeing up-to-date client data to significantly reduce financial and operational risks for the bank.",
                "Led the development of a verified-address restriction feature within the ScotiaHome application, accelerating mortgage processing by eliminating manual entry errors and reducing operational costs.",
                "Instructed an internal programming bootcamp covering HTML, CSS, and modern JS (React.js), successfully empowering a non-technical employee to transition into a technical engineering role."
            ],
        },
        {   
            title: "Blackboard",
            subTitle: "Associate Software Engineer",
            content: "Full stack software development for the Learn/Ultra product.",
            finalDate: "Apr 2021",
            keyPoints: [
                "Implemented a performance optimization project for Blackboard’s course content page (Used by millions of users). By identifying inefficient code and resolving these defects using AngularJS, I improved overall page performance by 30% within just three weeks.",
                "Authored several E2E tests covering professor feedback and rubric evaluation flows, preventing system regressions and increasing product resilience during automated deployments of new features.",
                "Implemented the front-end ReactJS rubrics component for the Learn/Ultra platform, delivering the user interface that allowed millions of students and teachers to directly input grades and review evaluation criteria.",
            ],
        },
    ],
};

export const Education = {
    title: "Education",
    sectionItems: [
        
        {
            title: "Master of Science, Computer Science",
            content: "Georgia Institute of Technology",
            finalDate: "May 2027",
        },
        {
            title: "Bachelor of Computer Systems Engineering",
            content: "Colombian School of Engineering Julio Garavito",
            finalDate: "Jun 2019",
        },
        {
            title: "International Baccalaureate Diploma",
            content: "International Baccalaureate",
            finalDate: "Jul 2014",
        },
    ],
};

export const Certifications = {
    title: "Certifications",
    sectionItems: [
        {
            content: "LinkedIn: AWS Essential Training for Developers",
        },
        {
            content: "LinkedIn: Microservices Foundations",
        },
        {
            content: "LinkedIn: Learning Redux",
        },
        {
            content: "LinkedIn: Unconscious Bias",
        },
        {
            content: "LinkedIn: Artificial Intelligence Foundations: Machine Learning",
        },
        {
            content: "LinkedIn: Artificial Intelligence Foundations: Thinking Machines",
        },
        {
            content: "CertiProf: Scrum Foundation Professional Certificate",
        },
    ],
};

export const ContactInfo = {
    title: "Contact",
    sectionItems: [
        {
            title: "Phone",
            content: "+34 625991715",
        },
        {
            title: "Mail",
            content: "juan.andradepardo@gmail.com",
            isLink: true,
        },
        {
            title: "LinkedIn",
            content: "https://www.linkedin.com/in/juan-jose-andrade/",
            isLink: true,
        },

    ],
};

export const Skills = {
    title: "Skills",
    sectionItems: [
        {
            title: "Languages & Frameworks:",
            content: "Java, JavaScript, Python, C++, C#, SQL, React.js, Vue.js, Angular.js",
        },
        {
            title: "Technologies",
            content: "AWS CDK, CloudFormation, Lambda, EC2, S3, Git, SQS, SNS",
        },
    ],
};

export const Languages = {
    title: "Languages",
    sectionItems: [
        {
            title: "Spanish",
            content: "Native proficiency",
        },
        {
            title: "English",
            content: "Professional working proficiency",
        },
    ],
};

export const AwardsConferences = {
    title: "Awards",
    sectionItems: [
        {
            title: "Best Saber Pro 2018",
            subTitle: "Colombian Institute for the Evaluation of Education",
            content: "Among the most outstanding students in the national knowledge tests for professionals.",
            finalDate: "Feb 2019",
        },
        {
            title: "First place in IT Innovation and Entrepreneurship projects",
            subTitle: "Colombian School of Engineering Julio Garavito",
            content: "Trophy, application designed to create bets in real time for video games using Java and React.js.",
            finalDate: "May 2019",
        },
        {
            title: "First place in projects of Introduction to Computer Systems Engineering",
            subTitle: "Colombian School of Engineering Julio Garavito",
            content: "MercaScan, Application to manage and optimize the process of buying products in a store.",
            finalDate: "Nov 2014",
        },
    ],
};