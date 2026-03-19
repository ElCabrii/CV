import type { Locale } from '../lib/locale';

type HeaderData = {
    name: string;
    profileImage: string;
    jobTitle: string;
    email: string;
    phone: string;
    location: string;
    linkedIn: string;
    gitHub: string;
};

type WorkExperienceItem = {
    position: string;
    company: string;
    date: string;
    responsibilities: string[];
};

type ProjectItem = {
    title: string;
    description: string;
};

type SkillCategory = {
    title: string;
    skills: string[];
};

type EducationItem = {
    title: string;
    institution: string;
    year: string;
    secondaryInfo: string;
};

type CertificationItem = {
    name: string;
    year: string;
};

type InterestItem = {
    title: string;
    description: string;
};

type NavigationLabels = {
    cv: string;
    projects: string;
    studies: string;
    interests: string;
};

type HomeLabels = {
    professionalSummary: string;
    workExperience: string;
    keyProject: string;
    skills: string;
    languages: string;
};

type ProjectsLabels = {
    activeDevelopment: string;
    completedProjects: string;
    viewSource: string;
    visitProject: string;
};

type StudiesLabels = {
    studies: string;
    certifications: string;
};

type InterestsLabels = {
    interests: string;
};

type Labels = {
    navigation: NavigationLabels;
    home: HomeLabels;
    projects: ProjectsLabels;
    studies: StudiesLabels;
    interests: InterestsLabels;
    themeToggle: string;
    languageToggle: string;
    downloadCv: string;
};

export type LocalizedContent = {
    headerData: HeaderData;
    professionalSummary: string;
    workExperience: WorkExperienceItem[];
    projects: ProjectItem[];
    skills: SkillCategory[];
    education: EducationItem[];
    certifications: CertificationItem[];
    languages: string[];
    interests: InterestItem[];
    labels: Labels;
};

const SHARED_HEADER: HeaderData = {
    name: 'Gabriel de Bure',
    profileImage: '/Gabriel.jpg',
    email: 'debure.gabriel@gmail.com',
    phone: '+33 6 24 10 34 06',
    location: 'Toulouse, France',
    linkedIn: 'https://www.linkedin.com/in/gabrieldebure',
    gitHub: 'https://github.com/ElCabrii',
    jobTitle: 'Student and apprentice Software developer',
};

const CONTENT: Record<Locale, LocalizedContent> = {
    en: {
        headerData: SHARED_HEADER,
        professionalSummary:
            'Student in Computer Science at Ynov Campus Toulouse, I have acquired strong experience in web development and software engineering through personal projects and apprenticeship work. I am highly motivated to keep learning and contribute to meaningful solutions.',
        workExperience: [
            {
                position: 'Apprentice Software Developer',
                company: 'Akkodis High Tech | Toulouse, France',
                date: 'Sep 2025 - Present',
                responsibilities: [
                    'Hired as an apprentice until my graduation in 2028, I am currently deploying the clearance processing tool conceived during my internship.',
                ],
            },
            {
                position: 'Intern',
                company: 'Akkodis High Tech | Toulouse, France',
                date: 'Mar 2025 - Jul 2025',
                responsibilities: [
                    'Worked on the backend of <a href="https://www.3djumpp.com/">3DJuump Infinite</a>, a CAD/CAO software trusted by companies such as Airbus, Airbus Defense and Space, Airbus Helicopters, Alstom Transport, SAFRAN and more.',
                    'Developed an algorithm that computes the minimum clearance between two sets of parts in a Digital Mockup.<br>E.g: find the minimum clearance between the electrical system and the fuel system in a plane.<br>For two sets of 50k parts, the algorithm takes around 5 seconds.',
                ],
            },
            {
                position: 'Crew member',
                company: "McDonald's | Gaillac, France",
                date: 'Mar 2023 - Jul 2023',
                responsibilities: [
                    'Participated in daily restaurant operations.',
                    'Helped train new crew members.',
                    'Contributed to planning and organizing events.',
                ],
            },
        ],
        projects: [
            {
                title: 'Social Media Platform: MyTuums (Ongoing)',
                description:
                    'Built a social media platform as a single monorepo using ViteJS with React and Tailwind on the frontend, and a Fastify backend with tRPC, Drizzle ORM, PostgreSQL, and Redis.',
            },
        ],
        skills: [
            {
                title: 'Frontend',
                skills: ['TypeScript', 'Next.js', 'React', 'HTML/CSS', 'Tailwind CSS'],
            },
            {
                title: 'Backend',
                skills: ['Node.js', 'NestJS', 'Python', 'Golang', 'C++'],
            },
            {
                title: 'Desktop',
                skills: ['Java', 'C#', 'Golang', 'C++', 'DirectX', 'Unity'],
            },
            {
                title: 'Databases',
                skills: ['ORMs', 'PostgreSQL', 'MongoDB'],
            },
            {
                title: 'Tools & Platforms',
                skills: ['Git', 'Docker', 'Azure', 'AWS', 'CI/CD', 'AI Prompting'],
            },
            {
                title: 'OS',
                skills: ['Bash/PowerShell', 'Debian and Arch based systems', 'Windows'],
            },
            {
                title: 'Hardware',
                skills: ['PC Building/Repairing', 'Laptop repairing'],
            },
        ],
        education: [
            {
                title: 'Computer Science Course',
                institution: 'Ynov Campus Toulouse',
                year: '2023 - 2028',
                secondaryInfo: 'Development major',
            },
            {
                title: 'Master of Computer Science (Upcoming)',
                institution: 'Toulouse Ynov Campus',
                year: 'Graduation: 2028',
                secondaryInfo: 'Software Engineering',
            },
            {
                title: 'Bachelor of Computer Science (Ongoing)',
                institution: 'Toulouse Ynov Campus',
                year: 'Graduation: 2026',
                secondaryInfo: 'Software Engineering',
            },
            {
                title: 'Coding Bootcamp',
                institution: 'Toulouse Ynov Campus',
                year: '2025',
                secondaryInfo: 'Position: 2nd',
            },
        ],
        certifications: [
            {
                name: 'Cambridge English: Advanced',
                year: '2021',
            },
        ],
        languages: ['French - Native', 'English - Fluent', 'Spanish - Intermediate'],
        interests: [
            {
                title: 'Computer Science',
                description:
                    'Deeply interested in theoretical and practical computation, from game programming and low-level software development to full-stack systems.',
            },
            {
                title: 'Automotive and aviations',
                description:
                    'Passionate about cars, planes, and the engineering behind them.',
            },
            {
                title: 'Technology as a whole',
                description:
                    'From phones to smart devices, I am always curious about new technology and how it evolves every day.',
            },
            {
                title: 'Video Games',
                description:
                    'I love Cyberpunk 2077 and competitive games like League of Legends, including the esports scene around it.',
            },
            {
                title: 'Music',
                description:
                    'I am an occasional pianist, learned guitar for a few years, and spend a lot of time listening to music.',
            },
        ],
        labels: {
            navigation: {
                cv: 'CV',
                projects: 'Personal projects',
                studies: 'Studies',
                interests: 'Interests',
            },
            home: {
                professionalSummary: 'Professional Summary',
                workExperience: 'Work Experience',
                keyProject: 'Key Project',
                skills: 'Skills',
                languages: 'Languages',
            },
            projects: {
                activeDevelopment: 'Active Development',
                completedProjects: 'Completed Projects',
                viewSource: 'View Source',
                visitProject: 'Visit Project',
            },
            studies: {
                studies: 'Studies',
                certifications: 'Certifications',
            },
            interests: {
                interests: 'Interests',
            },
            themeToggle: 'Toggle theme',
            languageToggle: 'Switch language',
            downloadCv: 'Download CV (PDF)',
        },
    },
    fr: {
        headerData: {
            ...SHARED_HEADER,
            jobTitle: 'Étudiant et développeur logiciel en alternance',
        },
        professionalSummary:
            "Étudiant en informatique a Ynov Campus Toulouse, j'ai acquis une solide experience en développement web et en ingénierie logicielle grâce à mes projets personnels et mon alternance. Je suis tres motivé pour continuer à apprendre et contribuer à des solutions utiles.",
        workExperience: [
            {
                position: 'Développeur logiciel en alternance',
                company: 'Akkodis High Tech | Toulouse, France',
                date: 'Sep 2025 - Present',
                responsibilities: [
                    "Recruté en alternance jusqu' à mon diplôme en 2028, je déploie actuellement l'outil de traitement de jeux développé pendant mon stage.",
                ],
            },
            {
                position: 'Stagiaire',
                company: 'Akkodis High Tech | Toulouse, France',
                date: 'Mar 2025 - Jul 2025',
                responsibilities: [
                    "Travail sur le backend de <a href='https://www.3djumpp.com/'>3DJuump Infinite</a>, un logiciel de CAD/CAO utilise par Airbus, Airbus Defense and Space, Airbus Helicopters, Alstom Transport, SAFRAN et d'autres.",
                    "Développement d'un algorithme calculant la distance minimum entre deux ensembles de pièces dans une maquette numérique.<br>.<br>Pour deux ensembles de 500k pièces, le calcul prend environ 10 secondes.",
                ],
            },
            {
                position: "Équipier polyvalent",
                company: "McDonald's | Gaillac, France",
                date: 'Mar 2023 - Jul 2023',
                responsibilities: [
                    "Participation aux opérations quotidiennes du restaurant.",
                    "Aide à la formation des nouveaux équipiers.",
                    "Participation à la planification et à l'organisation d'évenements.",
                ],
            },
        ],
        projects: [
            {
                title: 'Plateforme sociale : MyTuums (En cours)',
                description:
                    "Création d'une plateforme sociale en monorepo avec ViteJS, React et Tailwind pour le frontend, et un backend Fastify avec tRPC, Drizzle ORM, PostgreSQL et Redis.",
            },
        ],
        skills: [
            {
                title: 'Frontend',
                skills: ['TypeScript', 'Next.js', 'React', 'HTML/CSS', 'Tailwind CSS'],
            },
            {
                title: 'Backend',
                skills: ['Node.js', 'NestJS', 'Python', 'Golang', 'C++'],
            },
            {
                title: 'Desktop',
                skills: ['Java', 'C#', 'Golang', 'C++', 'DirectX', 'Unity'],
            },
            {
                title: 'Bases de données',
                skills: ['ORM', 'PostgreSQL', 'MongoDB'],
            },
            {
                title: 'Outils & Plateformes',
                skills: ['Git', 'Docker', 'Azure', 'AWS', 'CI/CD', 'Prompting IA'],
            },
            {
                title: 'OS',
                skills: ['Bash/PowerShell', 'Systemes Debian et Arch', 'Windows'],
            },
            {
                title: 'Hardware',
                skills: ['Montage/Réparation PC', 'Réparation laptop'],
            },
        ],
        education: [
            {
                title: "Cursus Informatique",
                institution: 'Ynov Campus Toulouse',
                year: '2023 - 2028',
                secondaryInfo: 'Spécialisation développement',
            },
            {
                title: 'Master Informatique (A venir)',
                institution: 'Ynov Campus Toulouse',
                year: 'Diplôme: 2028',
                secondaryInfo: 'Ingénierie logicielle',
            },
            {
                title: 'Bachelor Informatique (En cours)',
                institution: 'Ynov Campus Toulouse',
                year: 'Diplôme: 2026',
                secondaryInfo: 'Ingénierie logicielle',
            },
            {
                title: 'Coding Bootcamp',
                institution: 'Ynov Campus Toulouse',
                year: '2025',
                secondaryInfo: 'Classement: 2e',
            },
        ],
        certifications: [
            {
                name: 'Cambridge English: Advanced',
                year: '2021',
            },
        ],
        languages: ['Francais - Natif', 'Anglais - Courant', 'Espagnol - Intermédiaire'],
        interests: [
            {
                title: 'Informatique',
                description:
                    "Passionné par les aspects théoriques et pratiques du calcul, du game programming au développement bas niveau et full-stack.",
            },
            {
                title: 'Automobile et aviation',
                description:
                    "Passionné par l'automobile et l'aviation et leur ingénierie.",
            },
            {
                title: 'Technologies',
                description:
                    "Des smartphones aux objets connectés, je suis curieux des nouvelles technologies et de leur évolution.",
            },
            {
                title: 'Jeux vidéo',
                description:
                    "Je suis un grand fan de Cyberpunk 2077 et des jeux compétitifs comme League of Legends, y compris sa scène esport.",
            },
            {
                title: 'Musique',
                description:
                    "Pianiste occasionnel, ancien guitariste, et grand consommateur de musique au quotidien.",
            },
        ],
        labels: {
            navigation: {
                cv: 'CV',
                projects: 'Projets personnels',
                studies: 'Études',
                interests: "Centres d'interêt",
            },
            home: {
                professionalSummary: 'Profil professionnel',
                workExperience: 'Expérience professionnelle',
                keyProject: 'Projet principal',
                skills: 'Compétences',
                languages: 'Langues',
            },
            projects: {
                activeDevelopment: 'En développement actif',
                completedProjects: 'Projets terminés',
                viewSource: 'Voir le code',
                visitProject: 'Visiter le projet',
            },
            studies: {
                studies: 'Études',
                certifications: 'Certifications',
            },
            interests: {
                interests: "Centres d'interêt",
            },
            themeToggle: 'Changer le thème',
            languageToggle: 'Changer la langue',
            downloadCv: 'Télécharger le CV (PDF)',
        },
    },
};

export function getContent(pLocale: Locale): LocalizedContent {
    return CONTENT[pLocale];
}

