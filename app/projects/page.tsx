import ThemeToggle from '../components/ThemeToggle';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import ProjectEntry from '../components/ProjectEntry';

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
                        pName="Gabriel de Bure"
                        pJobTitle="Student and apprentice Software developer"
                        pEmail="debure.gabriel@gmail.com"
                        pPhone="+33 6 24 10 34 06"
                        pLocation="Toulouse, France"
                        pLinkedIn="https://www.linkedin.com/in/gabrieldebure"
                        pGitHub="https://github.com/ElCabrii"
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
