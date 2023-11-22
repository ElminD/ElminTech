import { meta, johndeere, SourceAllies, caseys, iowastate} from "../assets/images";
import {
    car,
    android,
    openai,
    python,
    cpp,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: cpp,
        name: "C++",
        type: "Backend",
    },
    {
        imageUrl: python,
        name: "python",
        type: "Backend",
    },
];

export const experiences = [
    {
        title: "Software Engineering Intern",
        company_name: "John Deere",
        icon: johndeere,
        iconBg: "#b7e4c7",
        date: "August 2022 - Current",
        points: [
            "Identified and resolved reported bugs while creating new tests to prevent future occurrences with C++ and QT",
            "Revamped UI elements for autonomous tractors to display detailed errors in tractor sensors",
        ],
    },
    {
        title: "Software Engineering Intern",
        company_name: "Source Allies",
        icon: SourceAllies,
        iconBg: "#BBF3FA",
        date: "May 2023 - August 2023",
        points: [
            "Built a full-stack React application to handle user accounts in Azure, AWS and Gsuite saving $74,000 per year",
            "Achieved 95% test code coverage by using Jest and TDD (Test Driven Development) minimizing production issues",
            "Connected 100+ employee accounts calling Azure API to achieve SSO with Axios and TypeScript",
            "Deployed a web application with Terraform and GitHub actions to Azure Enterprise Applications",
        ],
    },
    {
        title: "Casey's General Stores",
        company_name: "Casey's General Stores",
        icon: caseys,
        iconBg: "#fbc3bc",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Tested API Calls to over 20+ Cred Cards, increasing code quality with xUnit and TDD",
            "Designed generic website error pages for all web applications with Figma, HTML/CSS and JavaScript",
      ],
    },
    {
        title: "Undergraduate Research Assistant",
        company_name: "Iowa State",
        icon: iowastate,
        iconBg: "#fbc3bc",
        date: "Jan 2023 - Present",
        points: [
            "Published a paper on user interface design patterns that document Human-Agent Team (HAT)",
            "Published a paper on Team skill metrics by translating team constructs to metrics based on observable behaviors"
        ],
    },
];

export const socialLinks = [
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/ElminD',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/elmind/',
    }
];

export const projects = [
    {
        iconUrl: python,
        theme: 'btn-back-green',
        name: 'HumanDetection',
        description: 'HumanDetection is a Computer Vision project detecting Human Faces, Eyes, Upper body and, Full Body. Using OpenCV opencv and Python ',
        link: 'https://github.com/ElminD/HumanDetection',
    },
    {
        iconUrl: cpp,
        theme: 'btn-back-blue',
        name: 'CS:GO Cheats',
        description: 'External CS:GO Cheat created by altering the game memory using C++',
        link: 'https://github.com/ElminD/CSGO_aimbot',
    },
    {
        iconUrl: android,
        theme: 'btn-back-green',
        name: 'LiftUp',
        description: 'Android Application to track workouts and diet. Using Java, Material UI, Docker, and Springboot',
        link: 'https://github.com/ElminD/LiftUp',
    },
    {
        iconUrl: javascript,
        theme: 'btn-back-yellow',
        name: 'DrawingApp',
        description: 'DrawingApp is a simple drawing application created using JavaScript, HTML, and CSS',
        link: 'https://github.com/ElminD/DrawingApp',
    },
    {
        iconUrl: openai,
        theme: 'btn-back-black',
        name: 'OpenAI Pet Name Generator ',
        description: 'OpenAI Pet Name Generator is a simple application that generates pet names using OpenAI API',
        link: 'https://github.com/ElminD/OpenAIPetNameGenerator',
    },
    {
        iconUrl: react,
        theme: 'btn-back-blue',
        name: 'Des Moines Iowa Tech Job Site',
        description: 'Hack-a-thon project recreating levels.fyi using React, Tailwind, and JavaScript',
        link: 'https://github.com/ElminD/HackISU.io',
    }
];