
import { al_logo, rfa, upwork} from "../assets/images";
import {
    contact,
    css,
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
    react,
    redux,
    sass,
    tailwindcss,
    typescript
} from "../assets/icons";

import { 
    AL,
    design_studio,
    estore,
    task
} from '../assets/projects/index'

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
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
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
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
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
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
    }
];

export const experiences = [
    {
        title: "Software Developer",
        company_name: "AL Tech Lab Inc",
        icon: al_logo,
        iconBg: "#accbe1",
        date: "February 2024 - Current",
        points: [
            "Implemented adaptive and modular styles using the CSS-in-JS library-styled components, which reduced code duplication by 30% and improved maintainability.",
            "Integrated i18n into a React app, revolutionizing UX and increasing satisfaction by 20%, significantly boosting user engagement and retention.",
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Robotics For All",
        icon: rfa,
        iconBg: "#fbc3bc",
        date: "September 2023 - current",
        points: [
            "Improved user engagement by 30% through the implementation of TypeScript, React, and the integration of Prismic CMS, creating a more interactive and user-friendly platform.",
            "Revamped an outdated website using Next.js and ChakraUI, increasing mobile functionality and user engagement by 40%.",
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Upwork",
        icon: upwork,
        iconBg: "#b7e4c7",
        date: "January 2020 - February 2024",
        points: [
            "Transformed user experience, leading to a 43% increase in conversion rates with a user-friendly app interface, enhancing usability, accessibility, and PWA (Progressive Web Apps) implementation.",
            "Streamlined project execution with React and Git, achieving a 15% faster time-to-market for new websites and boosting client retention rates by 30% through improved performance and UX(user experience).",
            "Optimized technical SEO to advance the website from the 4th page to the 1st in Google search results within 19 days.",
            "Achieved conversion rates by 26% through a user-centric layout redesign and integration of key information.",
            "Revolutionized user experience and increased satisfaction by 20% by integrating Clerk into  Next.js 14 for secure authentication and Stripe for smooth transactions, significantly improving user engagement and retention in SaaS app.",
            "Slashed development cycle by 30% with shadcn/ui for UI efficiency and Cloudinary AI, enhancing feature speed and adaptivity.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Hanna-Slesarska',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/Hanna-Slesarska',
    }
];

 export const petProjects = [
//     // {
//     //     name: 'AI SaaS App',
//     //     description: 'Developed a user-friendly web application that enables users to magically enhance, restore, and manipulate images with features like object removal, recoloring, and background elimination, all powered by advanced AI technology.',
//     //     link: 'https://ai-app-six-lime.vercel.app/',
//     //     //image: ,
//     //     skillsUsed: [
//     //         {
//     //             imageUrl: nextjs,
//     //             name: "Next.js",
//     //             type: "Frontend",
//     //         },
//     //         {
//     //             imageUrl: typescript,
//     //             name: "TypeScript",
//     //             type: "Frontend",
//     //         },
//     //         {
//     //             imageUrl: mongodb,
//     //             name: "MongoDB",
//     //             type: "Database",
//     //         },
//     //         {
//     //             imageUrl: tailwindcss,
//     //             name: "Tailwind CSS",
//     //             type: "Frontend",
//     //         },
//     //     ]
//     // },
//     {
//         // iconUrl: threads,
//         // theme: 'btn-back-green',
//         name: 'Full Stack Social Media App',
//         description: 'Built a Social Media App, allowing users to share photos and connect with friends in a social media environment.',
//         link: 'https://social-media-app-mern.netlify.app/',
//         //image: ,
//         skillsUsed: [
//             {
//                 imageUrl: react,
//                 name: "React",
//                 type: "Frontend",
//             },
//             {
//                 imageUrl: nodejs,
//                 name: "Node.js",
//                 type: "Backend",
//             },
//             {
//                 imageUrl: express,
//                 name: "Express",
//                 type: "Backend",
//             },
//             {
//                 imageUrl: mui,
//                 name: "Material-UI",
//                 type: "Frontend",
//             },
//             {
//                 imageUrl: mongodb,
//                 name: "MongoDB",
//                 type: "Database",
//             },
//         ]
//     },

    
//     {
       
//         name: 'BMI Calculator',
//         description: 'Web App which lets users calculate their Body Mass Index using either the Metric or Imperial systems. The application also includes a theme switcher for light and dark modes, providing an adaptable user experience.',
//         link: 'https://body-mass-index-calculator-react.netlify.app/',
//         //image: ,
//         skillsUsed: [
//             {
//                 imageUrl: react,
//                 name: "React",
//                 type: "Frontend",
//             }
//         ]
//     },
 ];

 export const clientProjects = [
    {
        name: 'Sophie.',
        description: 'Design and deploy a full-stack eCommerce site, featuring products, pricing, contact form',
        link: 'https://sophie-estore.netlify.app/',
        image: estore,
        skillsUsed: [
            {
                imageUrl: react,
                name: "React",
                type: "Frontend",
            },
            {
                imageUrl: nodejs,
                name: "Node.js",
                type: "Backend",
            },
            {
                imageUrl: express,
                name: "Express",
                type: "Backend",
            },
            {
                imageUrl: mongodb,
                name: "MongoDB",
                type: "Database",
            },
        ]
    },
    {
        name: 'Design Studio',
        description: "Developed a sophisticated portfolio website for an interior designer, utilizing cutting-edge web technologies and best practices to deliver an exceptional user experience. The site is built with a mobile-first approach, ensuring optimal performance and usability across all devices, and features a custom UI component library for consistent and reusable design elements.",
        link: 'https://olesya-martin.netlify.app/',
        image: design_studio,
        skillsUsed: [
            {
                imageUrl: html,
                name: "HTML",
                type: "Frontend",
            },
            {
                imageUrl: css,
                name: "CSS",
                type: "Frontend",
            },
            {
                imageUrl: javascript,
                name: "React",
                type: "Frontend",
            },
        ]
    },
    {
        name: 'AL Tech Labs',
        description: "Design and develop a mobile-first website for AL Tech Labs with essential features like a service carousel, detailed company insights, interactive CSS animations, and optimized for speed and SEO. The site also functions as a PWA for enhanced user experience.",
        link: 'https://altech.digital/',
        image: AL,
        skillsUsed: [
            {
                imageUrl: html,
                name: "HTML",
                type: "Frontend",
            },
            {
                imageUrl: css,
                name: "CSS",
                type: "Frontend",
            },
            {
                imageUrl: react,
                name: "React",
                type: "Frontend",
            },
        ]
    },
    {
        name: 'Task Manager',
        description: "Design and develop a full stack app managing tasks",
        link: 'https://todolist-app-hanna.netlify.app',
        image: task,
        skillsUsed: [
            {
                imageUrl: html,
                name: "HTML",
                type: "Frontend",
            },
            {
                imageUrl: css,
                name: "CSS",
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
                imageUrl: nodejs,
                name: "Node.js",
                type: "Backend",
            },
            {
                imageUrl: express,
                name: "Express",
                type: "Backend",
            },
        ]
    },
]