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
        name: "T-SQL / SQL Server"
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
        name: "R"
    },
    {
        key: 10,
        name: "Azure DevOps"
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
        title: "MARL Delivery Tasks",
        imageUrl: "",
        description: "an examination into Multi Agent Reinforcement Learning. The PettingZoo simple_spread_v3 environment is used to facilitate these experiments.",
        technology: "Python • Reinforcement Learning • AI • PettingZoo",
        git: `https://github.com/ConorMeade/MARL-Delivery-Tasks`
    },
    {
        title: "NBAGraphs",
        imageUrl: "CSharp_Docker.jpg",
        description: "A graphical representation of NBA stats, built with C# and .NET Core, and deployed using Docker.",
        technology: "C# • Javascript • .NET Core",
        git: `https://github.com/ConorMeade/NBAGraphs`
    },
    {
        title: "Developer Portfolio Site",
        imageUrl: 'homepage.png',
        description: "Personal developer site, lists info about myself as well as my projects/resume",
        technology: "React • Javascript • MaterialUI • HTML • CSS",
        git: `https://github.com/ConorMeade/Personal-site`
    },    
];

export const readingList = [
    {
        title: "Infinite Jest",
        author: "David Foster Wallace",
        type: "Book",
        description: "A sprawling, complex novel that explores themes of addiction, entertainment, and the human condition.",
        link: "https://www.goodreads.com/book/show/11486.Infinite_Jest"
    },
    {
        title: "Portnoy's Complaint",
        author: "Philip Roth",
        type: "Book",
        description: "A humorous and provocative novel that delves into the psyche of a young man grappling with his desires and identity.",
        link: "https://www.goodreads.com/book/show/11487.Portnoy_s_Complaint"
    },
    {
        title: "Moby Dick",
        author: "Herman Melville",
        type: "Book",
        description: "Call Me Ishmael. A classic tale of obsession and revenge on the high seas, as Captain Ahab hunts the elusive white whale.",
        link: "https://www.goodreads.com/book/show/153747.Moby_Dick"
    }
];