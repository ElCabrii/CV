export const HEADER_DATA = {
    name: "Gabriel de Bure",
    profileImage: "/Gabriel.jpg",
    jobTitle: "Student and apprentice Software developer",
    email: "debure.gabriel@gmail.com",
    phone: "+33 6 24 10 34 06",
    location: "Toulouse, France",
    linkedIn: "https://www.linkedin.com/in/gabrieldebure",
    gitHub: "https://github.com/ElCabrii",
};

export const PROFESSIONAL_SUMMARY =
    "Student in Computer Science at Ynov Camput Toulouse, i have aquired a powerful experience in web development and software engineering throughout my personal projects and my apprenticeship. More motivated than ever to learn more, and contribute to the development of solutions that make a difference.";

export const WORK_EXPERIENCE = [
    {
        position: "Apprentice Software Developer",
        company: "Akkodis High Tech | Toulouse, France",
        date: "Sep 2025 - Present",
        responsibilities: [
            "Hired as an apprentice until my graduation in 2028, I am currently deploying the clearance processing tool conceived during my internship.",
        ],
    },
    {
        position: "Intern",
        company: "Akkodis High Tech | Toulouse, France",
        date: "Mar 2025 - Jul 2025",
        responsibilities: [
            'Working on the backend of <a href="https://www.3djumpp.com/">3DJuump Infinite</a>, a CAD/CAO software trusted by companies such as Airbus, Airbus Defense and Space, Airbus Helicopters, Alstom Transport, SAFRAN and more.',
            "Developed an algorithm that computes the minimum clearance between two sets of parts in a Digital Mockup<br>E.g : Find the minimum clearance between the electrical system and the fuel system in a plane.<br>For two sets of 50k parts, the algorithm takes 5 seconds to compute the minimum clearance.",
        ],
    },
    {
        position: "Crew member",
        company: "McDonald's | Gaillac, France",
        date: "Mar 2023 - Jul 2023",
        responsibilities: [
            "Participated in the daily operations of the restaurant",
            "Assisted in the training of new crew members",
            "Participated in the planning and organization of events",
        ],
    },
];

export const PROJECTS = [
    {
        title: "Social Media Platform : Tuums (Ongoing)",
        description: "Built the backend of a social media platform using Golang with built-in authentication and authorization, then switched to NestJS for better compatibility with the frontend and to take advantage of tRPC and BetterAuth.",
    },
    {
        title: "AI Saas : ScholAI (Ongoing)",
        description: "Developing a Saas application that uses AI to help students learning programming. Ojective : Replace the conventional AI coding assistant by a more personalized and interactive one, that acts like a teacher.",
    },
];

export const SKILLS = [
    {
        title: "Frontend",
        skills: ["TypeScript", "Next.js", "React", "HTML/CSS", "Tailwind CSS"],
    },
    {
        title: "Backend",
        skills: ["Node.js", "NestJS", "Python", "Golang", "C++"],
    },
    {
        title: "Desktop",
        skills: ["Java", "C#", "Golang", "C++", "DirectX", "Unity"],
    },
    {
        title: "Databases",
        skills: ["ORMs", "PostgreSQL", "MongoDB"],
    },
    {
        title: "Tools & Platforms",
        skills: ["Git", "Docker", "Azure", "AWS", "CI/CD", "AI Prompting"],
    },
    {
        title: "OS",
        skills: ["Bash/PowerShell", "Debian and Arch based systems", "Windows"],
    },
    {
        title: "Hardware",
        skills: ["PC Building/Repairing", "Laptop repairing"],
    },
];

export const EDUCATION = [
    {
        title: "Master of Computer Science (Upcoming)",
        institution: "Toulouse Ynov Campus",
        year: "Graduation: 2028",
        secondaryInfo: "Software Engineering",
    },
    {
        title: "Bachelor of Computer Science (Ongoing)",
        institution: "Toulouse Ynov Campus",
        year: "Graduation: 2026",
        secondaryInfo: "Software Engineering",
    },
    {
        title: "Coding Bootcamp",
        institution: "Toulouse Ynov Campus",
        year: "2025",
        secondaryInfo: "Position : 2nd",
    },
];

export const CERTIFICATIONS = [
    {
        name: "TOEIC (Upcoming, mock tests around 910)",
        year: "2025",
    },
    {
        name: "Cambridge English: Advanced",
        year: "2021",
    },
];

export const LANGUAGES = [
    "French - Native",
    "English - Fluent",
    "Spanish - Intermediate",
];
