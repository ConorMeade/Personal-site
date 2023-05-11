import "font-awesome/css/font-awesome.css";

export const data = {
    firstName: "Conor",
    lastName: "Meade",
    website: "https://www.conormeade.com",
    name: "Conor Meade",
    occupation: "Software Engineer",
    headline: "Software Developer • Greater Boston area",
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
        name: "SQL"
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
        name: "Javascript/Typescript"
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
        name: "Linux"
    },
    {
        key: 10,
        name: "Shell Scripting"
    },
    {
        key: 10,
        name: "Rust"
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
        title: "Fitness Dashboard",
        imageUrl: "fitness.png",
        description: "Dashboard application to track exercise progress, add new exercises, and count calories.",
        technology: "React • Typescript • Node.js • Express.js • MongoDB",
        git: `https://github.com/ConorMeade/exercise-app`
    },
    {
        title: "Stock Tracking App",
        imageUrl: "CSharp_Docker.jpg",
        description: "Takes in stock ticker symbol (MSFT, AAPL, etc.) and date ranges to determine the daily returns for those given dates using iexcloud data.",
        technology: "C# • Docker • .NET Core",
        git: `https://github.com/ConorMeade/StockTracker`
    },
    {
        title: "Developer Portfolio Site",
        imageUrl: 'homepage.png',
        description: "Personal developer site, lists info about myself as well as my projects/resume",
        technology: "React • Javascript • MaterialUI • HTML • CSS",
        git: `https://github.com/ConorMeade/Personal-site`
    },
    
];