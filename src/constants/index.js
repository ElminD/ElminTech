import { meta, johndeere, SourceAllies, caseys, iowastate, agrisync} from "../assets/images";
import {
    car,
    terraform,
    docker,
    azure,
    aws,
    jest,
    golang,
    csharp,
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
    {
        imageUrl: terraform,
        name: "terraform",
        type: "Backend",
    },
    {
        imageUrl: docker,
        name: "docker",
        type: "Backend",
    },
    {
        imageUrl: azure,
        name: "azure",
        type: "Backend",
    },
    {
        imageUrl: aws,
        name: "aws",
        type: "Backend",
    },
    {
        imageUrl: jest,
        name: "jest",
        type: "Backend",
    },
    {
        imageUrl: golang,
        name: "golang",
        type: "Backend",
    },
    {
        imageUrl: csharp,
        name: "csharp",
        type: "Backend",
    },
];

export const experiences = [
    {
        title: "Software Engineering Intern",
        company_name: "John Deere",
        icon: johndeere,
        iconBg: "#b7e4c7",
        date: "August 2023 - Current",
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
        title: "Software Engineering Intern",
        company_name: "John Deere",
        icon: johndeere,
        iconBg: "#b7e4c7",
        date: "August 2022 - May 2023",
        points: [
            "Identified and resolved reported bugs while creating new tests to prevent future occurrences",
            "Revamped the user interface for error reporting in a tractor application using C++ and QT",
            "Enhanced the self-driving requirement section by incorporating unit tests and additional UI elements, resulting in a clean look and streamlined process",
        ],
    },
    {
        title: "ABCS Fellow",
        company_name: "Meta",
        icon: meta,
        iconBg: "#BBF3FA",
        date: "August 2022 - October 2022",
        points: [
            "Attended weekly development workshops geared towards enhancing knowledge of programming fundamentals, engaging with industry professionals, and ensuring career readiness",
            "Collaborating with industry-leading software engineers to master essential data structure and algorihm skills",
      ],
    },
    {
        title: "Software Engineering Intern",
        company_name: "Casey's General Stores",
        icon: caseys,
        iconBg: "#fbc3bc",
        date: "May 2022 - August 2023",
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
        date: "September 2021 - December 2022",
        points: [
            "Published a paper on user interface design patterns that document Human-Agent Team (HAT)",
            "Published a paper on Team skill metrics by translating team constructs to metrics based on observable behaviors"
        ],
    },
    {
        title: "Software Engineer Test Intern",
        company_name: "AgriSync",
        icon: agrisync,
        iconBg: "#b7e4c7",
        date: "May 2019 - August 2019",
        points: [
            "Created UI test for Mobile and Web applications tracking User creation and UI/UX updates",
            "Worked with developers creating tickets with Trello in a Agile team environment"
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