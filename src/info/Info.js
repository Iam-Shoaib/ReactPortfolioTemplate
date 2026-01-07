import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

export const colors = ["rgb(0, 163, 255)", "rgb(0, 255, 164)"];

// Set to true for single-page scrollable layout, false for multi-page navigation
export const singlePage = false;

export const info = {
    firstName: "Muhammad Shoaib",
    lastName: "Ali",
    initials: "MSA",
    position: "a Node.js Backend Developer",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '💻',
            text: '3+ years of Node.js backend experience'
        },
        {
            emoji: '📍',
            text: 'based in Lahore, Pakistan'
        },
        {
            emoji: "🎓",
            text: "Master\'s in Computer Science (PUCIT)"
        },
        {
            emoji: "📧",
            text: "m.shoaib.fiaz.47@gmail.com"
        }
    ],
    socials: [
        {
            link: "mailto:m.shoaib.fiaz.47@gmail.com",
            icon: "fa fa-envelope",
            label: "email"
        },
        {
            link: "https://www.linkedin.com/in/shoaib999/",
            icon: "fa fa-linkedin",
            label: "linkedin"
        }
    ],
    bio: "I am a backend-focused software engineer with over 3 years of experience building scalable, high-performance web applications. My core expertise is in Node.js, Express.js, TypeScript, and MongoDB, and I have a strong background in designing RESTful APIs, integrating third-party services, and optimizing backend performance. I have worked on production systems for social housing, virtual tours, travel services, and fintech, collaborating closely with teams and clients to turn business requirements into reliable, maintainable code.",
    skills:
        {
            proficientWith: [
                'javascript',
                'typescript',
                'node.js',
                'express.js',
                'mongodb',
                'rest apis',
                'stripe',
                'php',
                'laravel',
                'mysql',
                'postgresql',
                'git',
                'github',
                'bitbucket'
            ],
            exposedTo: [
                'react',
                'next.js',
                'angular',
                'firebase',
                'wordpress',
                'bootstrap',
                'jquery',
                'ajax',
                'twilio',
                'mailchimp'
            ]
        }
    ,
    hobbies: [
        {
            label: 'reading & learning',
            emoji: '📖'
        },
        {
            label: 'technology & innovation',
            emoji: '💡'
        },
        {
            label: 'travel',
            emoji: '✈️'
        },
        {
            label: 'sports & fitness',
            emoji: '🏃‍♂️'
        }
    ],
    portfolio: [
        {
            title: "MSH (My Social Housing)",
            live: "#",
            source: "#",
            image: mock1
        },
        {
            title: "LBRD (Virtual Tour)",
            live: "#",
            source: "#",
            image: mock2
        },
        {
            title: "Tripscon",
            live: "#",
            source: "#",
            image: mock3
        },
        {
            title: "YouRemit",
            live: "#",
            source: "#",
            image: mock4
        },
        {
            title: "HaleemDiag",
            live: "https://haleemdiag.com/",
            source: "#",
            image: mock5
        }
    ]
}