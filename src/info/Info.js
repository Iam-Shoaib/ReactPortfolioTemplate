import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0, 163, 255)", "rgb(0, 255, 164)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Muhammad Shoaib",
    lastName: "Ali",
    initials: "MSA", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Node.js Backend Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself.
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
        // You can add GitHub, Twitter, etc. here later if you want.
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
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
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