// Website related settings
const settings = {
  isSplash: true,
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Prathap BR",
  logo_name: "<Prathap BR/>",
  full_name: "Prathap Kumar B R",
  subTitle: " MERN Stack Developer, Life Long Learner.",
  resumeLink:
    "https://drive.google.com/file/d/1RtzkxUSGQ8qEfeKW8Pky1AKsqTVQfBzd/view?usp=sharing",
  mail: "mailto:prathapbr93@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/Prathap-Kumar-BR",
  linkedin: "https://www.linkedin.com/in/prathap-kumar-br/",
  twitter: "https://twitter.com/Prathap_BR_93",
  instagram: "https://www.instagram.com/prathap_b_rajashekar/",
};

const skills = {
  data: [
    {
      title: "MERN Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Creating application backend in Node and Express, ",
        "⚡ Hosting and managing websites in heroku ",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#563d7c",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },

        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },

        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },

        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },

        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "simple-icons:redux",
          style: {
            color: "#6863A6",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Dr.Ambedakar Institute of Technology",
      subtitle: " Master of Technology ",
      logo_path: "Dr_Ait_Logo.jfif",
      alt_name: "Dr.AIT",
      duration: "2016 - 2018",
      descriptions: [],
      website_link: "https://www.drait.edu.in/",
    },
    {
      title: "Govt. Engineering College Kushalanagar ",
      subtitle: "Bachelors in Electronics and Communication Engineering",
      logo_path: "Geck_logo.gif",
      alt_name: "Geck",
      duration: "2011 - 2015",
      descriptions: [],
      website_link: "https://vtu.ac.in/",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work ",
  description:
    "I've completed more than 2 years in SQL support. I've done own projects on MERN stack and I am actively looking for MERN stack full time job",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Tech Ops Excecutive",
          company: "Ninjacart",
          company_url: "https://ninjacart.in/",
          logo_path: "Ninjacart.jpg",
          duration: "Sept 2020 - Mar 2021",
          location: "Bangalore",
          description: `Create SQL database and tables, Solving application run time errors, Guide the employees about application working, Manage several databases, Manage end to end database
          `,
          color: "#0071C5",
        },
        {
          title: "Assistant Manager",
          company: "Axis Bank",
          company_url: "https://www.axisbank.com/",
          logo_path: "axisbank_logo.jpg",
          duration: "Jan 2019 - Aug 2020",
          location: "Bangalore",
          description: `Giving support on run time errors  Check the data and find out the issues Manage end to end database.
          `,
          color: "#ee3c26",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I have built projects in React js, Redux, bootstrap, Node js, express js, MongoDB",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile_photo_4.jpg",
    description:
      "You can contact me any platform mentioned below. I will respond immediately",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "Still the time i am not write any blog, Presently documention on e-commerce project it will update on medium blog page.",
    link: "https://medium.com/@prathapbr93",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "QRest",
      url: "https://qrestobrp.herokuapp.com/",
      description: "e-commerce pizza delivery application ",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "Node js",
          iconifyClass: "simple-icons:node-dot-js",
        },
        {
          name: "MongoDB",
          iconifyClass: "simple-icons:mongodb",
        },
      ],
    },
    {
      id: "1",
      name: "Qnotes",
      url: "https://qnotes2021.herokuapp.com/",
      description: "It has simple data store application using MERN Stack ",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "Node js",
          iconifyClass: "simple-icons:node-dot-js",
        },
        {
          name: "MongoDB",
          iconifyClass: "simple-icons:mongodb",
        },
      ],
    },

    {
      id: "2",
      name: "Portfolio Website",
      url: "https://brpportfolio.herokuapp.com/#/home",
      description: "Present viewing application 😉",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "Node js",
          iconifyClass: "simple-icons:node-dot-js",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
