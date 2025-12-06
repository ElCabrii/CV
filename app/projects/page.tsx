import ThemeToggle from '../components/ThemeToggle';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import ProjectEntry from '../components/ProjectEntry';

import { HEADER_DATA } from '../data/content';

export default function Projects() {
    return (
        <>
            <ThemeToggle />
            <div className="main-wrapper">
                <div className="nav-sidebar">
                    <Navigation />
                </div>
                <div className="container">
                    <Header
                        pName={HEADER_DATA.name}
                        pProfileImage={HEADER_DATA.profileImage}
                        pJobTitle={HEADER_DATA.jobTitle}
                        pEmail={HEADER_DATA.email}
                        pPhone={HEADER_DATA.phone}
                        pLocation={HEADER_DATA.location}
                        pLinkedIn={HEADER_DATA.linkedIn}
                        pGitHub={HEADER_DATA.gitHub}
                    />

                    <div className="content">
                        <div className="main">
                            <section>
                                <h2>Active Development</h2>
                                <ProjectEntry
                                    pTitle="Tuums"
                                    pDescription="A social media platform for gamers currently under active development. It integrates gaming accounts from multiple platforms to aggregate and display gamer statistics on a unified profile."
                                    pTags={['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase (Self-hosted)']}
                                    pUrl="https://mytuums.com"
                                />
                                <ProjectEntry
                                    pTitle="ScholAI"
                                    pDescription="An advanced AI-powered mentorship platform designed to guide students through coding and software design. It functions as an interactive programming tutor, fostering skill development through personalized assistance and project-based learning."
                                    pTags={['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase (Self-hosted)']}
                                    pUrl="https://scholai.app"
                                />
                            </section>

                            <section>
                                <h2>Completed Projects</h2>
                                <ProjectEntry
                                    pTitle="Speed Maze"
                                    pDescription="A time-based first-person maze challenge developed in Unity. Players must navigate through a series of maze blocks, each containing a checkpoint, while managing a strict 10-second timer per block. Developed as a second-year Game Programming module project."
                                    pTags={['Unity', 'C#']}
                                    pUrl="https://github.com/ElCabrii/SpeedMaze"
                                    pUrlText="View Source"
                                />
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
