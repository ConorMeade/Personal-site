import "font-awesome/css/font-awesome.css";

export const data = {
    firstName: "Conor",
    lastName: "Meade",
    name: "Conor Meade",
    occupation: "Software Engineer",
    headline: "Junior Software Developer, currently living in the Boston MA area",
    alma: "University of Massachusetts Amherst",
    github: "https://github.com/ConorMeade",
    linkedin: "https://www.linkedin.com/in/conor-meade-23cm/",
    profilePic: "toucan.jpg"
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
    }
]

export const githubRepos = {
    record: `https://github.com/ConorMeade/Record-Collection`,
    
};