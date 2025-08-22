import { python, docker, visualBasic, javascript, cPlus, cSharp, html, css, mongodb, c, fastApi, sql, react, next, three, blender, java, typeScript, django, tailwind, bootstrap, unity, express, linux, node, git, github  } from "./assets/tech/index"
import { question } from "./assets/others/index"
import { linkedIn } from "./assets/tech/other"

export const githubLink:string = "https://github.com/NarayanTim";
export const LinkedInLink:string = "https://www.linkedin.com/in/laxmi-timsina-5b6a05261/";

export const ResumeLink:string = "LaxmiTimsinaResume-Software.pdf"

export const techSkills = [
    {
        title : "Python", 
        icon:python,
    },
    {
        title : "Java",
        icon:java,
    },
    {
        title : "C",
        icon:c,
    },
    {
        title : "C++",
        icon:cPlus,
    },

    {
        title : "C#",
        icon:cSharp,
    },
    {
        title : "JavaScript",
        icon:javascript,
    },
    {
        title : "TypeScript",
        icon:typeScript,
    },
    {
        title : "HTML",
        icon:html,
    },

    {
        title : "CSS",
        icon:css,
    },

    {
        title : "Visual Basic",
        icon:visualBasic,
    },


]

export const frameworks = [
    {
        title : "React",
        icon:react,
    },
    {
        title : "Django",
        icon:django,
    },
    {
        title : "Express",
        icon:express,
    },
    {
        title : "Three",
        icon:three,
    },

    {
        title : "Next jS",
        icon:next,
    },
    {
        title : "FastAPI",
        icon:fastApi,
    }

]

export const tools = [
    {
        title : "Git",
        icon:git,

    },   
    {
        title : "Docker",
        icon:docker,

    },
    {
        title : "Blender",
        icon:blender,

    },   
    {
        title : "Unity",
        icon:unity,

    },
    {
        title : "Linux",
        icon:linux,

    },
    {
        title : "Tailwind CSS",
        icon:tailwind,
    },
    {
        title : "Bootstrap",
        icon:bootstrap,
    }

]

export const experiences = [
    {
        id:1,
        title: "Cashier",
        companyName: "Wegmans",
        icon: question,
        date: "January 13 - Present",
        description : "Cash Handling & Transactions: Operated the cash register accurately, processed payments (cash, credit, and debit), and managed large amounts of money in a high-volume setting.",
       
    },



]


export const footerList = [
    {title:"Github", link:githubLink, icon:github},
    {title:"Linkedin", link:LinkedInLink, icon:linkedIn},
]



export const education = [
    {
      title: "Calculus 1-3",
      description: "A comprehensive study of differential and integral calculus, covering limits, derivatives, integrals, sequences, series, and multivariable calculus. These courses provide the foundation for advanced mathematics, including applications in physics, engineering, and economics.",
    },
    {
      title: "Data Structures and Algorithms",
      description: "An introduction to the fundamental data structures such as arrays, linked lists, stacks, queues, and graphs. The course also covers essential algorithms for sorting, searching, and optimization, emphasizing the importance of algorithm complexity and efficiency.",
    },
    {
      title: "Linear Algebra",
      description: "This course covers vector spaces, matrices, eigenvalues, eigenvectors, and linear transformations. Topics include systems of linear equations, determinants, matrix factorizations, and applications in computer graphics, data science, and engineering.",
    },
    {
      title: "DEQ (Differential Equations)",
      description: "An introduction to the theory and solution techniques for ordinary differential equations (ODEs), including first-order, second-order, and higher-order equations, along with applications to modeling physical, biological, and engineering systems.",
    },
    {
      title: "Object-Oriented Programming",
      description: "This course introduces object-oriented programming (OOP) concepts such as classes, objects, inheritance, polymorphism, encapsulation, and abstraction. Students will learn how to design and implement software using OOP principles, with a focus on practical applications and problem-solving.",
    },
    {
      title: "Programming Embedded Microcontrollers in C and Assembly",
      description: "A hands-on course focusing on programming microcontrollers using C and assembly languages. Topics include low-level hardware programming, memory management, interrupt handling, and interfacing microcontrollers with sensors, actuators, and other hardware components in embedded systems.",
    },
    {
      title: "Artificial Intelligence",
      description: "An introduction to artificial intelligence, covering topics like search algorithms, machine learning, and natural language processing.",
    },
    {
      title: "Computer Graphics",
      description: "This course covers the fundamentals of computer graphics, including rendering, and shading.",
    },
    {
      title: "Operating Systems",
      description: "An in-depth study of operating systems, focusing on processes, memory management, file systems, and system calls. The course covers how modern operating systems manage hardware resources and provide services to software applications, with hands-on experience in system programming and debugging.",
    },
    {
      title: "Software Engineering",
      description: "This course introduces the principles of software engineering, including requirements analysis, system design, testing, and project management. Students learn the software development lifecycle and best practices for building scalable, maintainable, and efficient software systems.",
    },
];





export const dataBase = [
    {
        title : "MongoDB",
        icon : mongodb,
    },

    {
        title : "Sql",
        icon : sql,
    },

]


export const aboutMeData = "I'm a passionate developer focusing on programming, game and web development, and a growing interest in artificial intelligence and machine learning."
export const uniqueAbout = "I am a dedicated individual who successfully balances academics, work, and family responsibilities. I assist my parents with managing medical appointments, bills, and hospital visits, ensuring everything runs smoothly. This has honed my skills in time management, problem-solving, and adaptability, which I apply both personally and professionally."



export const educationData = [
    {
        major : "Bachelor of Science in Computer Science",
        school : "St. John Fisher University", 
        date : "Graduation: May 2025",
        courses : "Below are some of the courses I`ve taken during my educational journey"
    }
]

export const projects = [
    {
        title: 'Budget App',
        desc: 'Built a full-stack web application featuring secure user authentication and comprehensive budget tracking with CSV file uploads.',
        sub_desc: 'Utilized Django, SQL, Pandas, Matplotlib, and Seaborn to process financial data and dynamically visualize monthly expenses and reports.',
        videoUrl: "./video/budget.mp4",
        githubLink: "https://github.com/NarayanTim/CarbonApp",
        demoLink: "https://devpost.com/software/leaf-zer0",
        tags: [
            { id: 1, name: 'Django', icon: django },
            { id: 2, name: 'Bootstrap', icon: bootstrap },
            { id: 3, name: 'Javascript', icon: javascript },
            { id: 4, name: 'CSS', icon: css },
            { id: 5, name: 'HTML', icon: html },
            { id: 6, name: 'SQL', icon: sql },
        ],
    },
    {
        title: 'AmbuLink',
        desc: 'Emergency response management system built to streamline hospital-patient communication and ambulance dispatch.',
        sub_desc: 'Implemented with Django, SQL, and React to ensure real-time updates, scalability, and intuitive UI.',
        videoUrl: "./video/link.mp4",
        githubLink: "",
        demoLink: "https://devpost.com/software/ambulink",
        tags: [
            { id: 1, name: 'Django', icon: django },
            { id: 2, name: 'SQL', icon: sql },
            { id: 3, name: 'React', icon: react },
        ],
    },
    {
        title: 'Travel the Canal',
        desc: 'Developed an immersive, interactive game simulating a journey along the Erie Canal from Buffalo to Albany.',
        sub_desc: 'Created in Unity with C#, featuring dynamic gameplay elements like quizzes, shopping, sickness events, and adaptive storytelling. Password to access: Travel-Canal-4990 ',
        videoUrl: "./video/canal.mp4",
        githubLink : "",
        demoLink : "https://bitsofcodedev.itch.io/travel-the-canal",
        tags: [
            { id: 1, name: 'Unity', icon: unity },
            { id: 2, name: 'C#', icon: cSharp },
        ],
    },
    {
        title: 'Mission To Mars',
        desc: 'A Unity-based game simulating a colonization mission to Mars, involving resource management, survival mechanics, and base-building.',
        sub_desc: 'Designed using C# and Unity, focusing on modular game systems, immersive environment interactions, and challenge-driven gameplay. Password to access: astro-test-one',
        videoUrl: "./video/mars.mp4",
        githubLink : "",
        demoLink : "https://bitsofcodedev.itch.io/mars-mission",
        tags: [
            { id: 1, name: 'Unity', icon: unity },
            { id: 2, name: 'C#', icon: cSharp },
        ],
    },
    {
        title: 'LeafZer0',
        desc: 'Web app for identifying plant species and tracking user-submitted plant sightings with visual and geographic data.',
        sub_desc: 'Built with Django, Python, Bootstrap, and HTML, leveraging external APIs for classification and a robust SQL backend for storage.',
        videoUrl: "./video/leaf.mp4",
        githubLink : "https://github.com/NarayanTim/CarbonApp",
        demoLink : "https://devpost.com/software/leaf-zer0",
        tags: [
            { id: 1, name: 'Django', icon: django },
            { id: 2, name: 'Python', icon: python },
            { id: 3, name: 'HTML', icon: html },
            { id: 4, name: 'Bootstrap', icon: bootstrap },
        ],
    },


    {
        title: 'Mercury Mobile',
        desc: 'Collaborated with a team to develop Mercury Mobile, a dynamic and responsive MERN-stack web application.',
        sub_desc: 'Built full-stack features with custom UI frameworks, (Work in progress)',
        videoUrl: "./video/home.mp4",
        githubLink : "",
        demoLink : "",
        tags: [
            { id: 1, name: 'Express', icon: express },
            { id: 2, name: 'React', icon: react },
            { id: 3, name: 'Tailwind', icon: tailwind },
            { id: 4, name: 'Node', icon: node },
            { id: 5, name: 'MongoDB', icon: mongodb },
        ],
    },
];



