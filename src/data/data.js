import "font-awesome/css/font-awesome.css";

export const data = {
    firstName: "Conor",
    lastName: "Meade",
    website: "https://www.conormeade.com",
    name: "Conor Meade",
    occupation: "Software Engineer",
    headline: "Junior Software Developer, currently living in the Boston MA area",
    alma: "University of Massachusetts Amherst",
    github: "https://github.com/ConorMeade",
    linkedin: "https://www.linkedin.com/in/conor-meade-23cm/",
    profilePic: "headshot1.jpg"
}


export const contactData = [
    {
        href: data.linkedin,
		icon: "fa fa-linkedin",
		text: "LinkedIn",
    },
    {
        href: data.github,
		icon: "fa fa-github",
		text: "Github",
    },
    {
        href: "mailto:cmeade6479@gmail.com",
        icon: "fa fa-envelope",
        text: "Email"
    }
]

export const skills = [
    {
        key: 0,
        name:"React.js",

    },
    {
        key: 1,
        name:"Python"
    },
    {
        key: 2,
        name: "PostgreSQL"
    },
    {
        key: 3,
        name: "C#"
    },
    {
        key: 4,
        name: "Node.js"
    },
    {
        key: 5,
        name: "git"
    },
    {
        key: 6,
        name: "Javascript"
    },
    {
        key: 7,
        name: "ASP.NET"
    },
    {
        key: 8,
        name: "Java"
    },
    {
        key: 9,
        name: "Typescript"
    }

]

export const projects = [
    {
        title: "Record Collection Slideshow",
        imageUrl: "album-slideshow.png",
        description: "A running and clickable slideshow with my record collection on display (Full Stack).",
        technology: "React • JavaScript • Flask • SQL • Node.js • Semantic UI • Discogs API",
        git: `https://github.com/ConorMeade/Record-Collection`

    },
    {
        title: "UMass Vultures",
        imageUrl: "vultures.png",
        description: "School Project focused on providing a posting list of free and reduced price meal options to students.",
        technology: "Python • Django • Bootstrap • SQL",
        git: `https://github.com/ConorMeade/s_sasquatch5`
    },
    {
        title: "Developer Portfolio Site",
        imageUrl: 'homepage.png',
        description: "Personal developer site, lists info about myself as well as my projects/resume",
        technology: "React • Javascript • MaterialUI • HTML • CSS",
        git: `https://github.com/ConorMeade/Personal-site`
    },
    
];