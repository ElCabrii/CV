import ThemeToggle from '../components/ThemeToggle';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import ProjectEntry from '../components/ProjectEntry';
import { getContent } from '../data/content';
import { getRequestLocale } from '../lib/locale';

export default async function Projects() {
    const lLocale = await getRequestLocale();
    const lContent = getContent(lLocale);

    const lNavItems = [
        { pHref: '/', pLabel: lContent.labels.navigation.cv },
        { pHref: '/projects', pLabel: lContent.labels.navigation.projects },
        { pHref: '/studies', pLabel: lContent.labels.navigation.studies },
        { pHref: '/interests', pLabel: lContent.labels.navigation.interests },
    ];

    const lActiveDescription =
        lLocale === 'fr'
            ? "Un hub social pour joueurs actuellement en developpement. Il integre une messagerie instantanee, une plateforme de streaming video et un agregateur de statistiques de jeu provenant de plusieurs plateformes."
            : 'A social media hub for gamers currently under active development. It integrates an instant messaging app, a video-streaming platform, and a gaming statistics aggregator from various gaming platforms.';

    const lCompletedDescription =
        lLocale === 'fr'
            ? "Un jeu de labyrinthe en vue a la premiere personne base sur le temps, developpe avec Unity. Le joueur traverse une serie de blocs avec checkpoints tout en gerant une limite stricte de 10 secondes par bloc. Projet realise dans le module Game Programming de deuxieme annee."
            : 'A time-based first-person maze challenge developed in Unity. Players must navigate through a series of maze blocks, each containing a checkpoint, while managing a strict 10-second timer per block. Developed as a second-year Game Programming module project.';

    return (
        <>
            <ThemeToggle pTitle={lContent.labels.themeToggle} />
            <div className="main-wrapper">
                <div className="nav-sidebar">
                    <Navigation pItems={lNavItems} />
                </div>
                <div className="container">
                    <Header
                        pName={lContent.headerData.name}
                        pProfileImage={lContent.headerData.profileImage}
                        pJobTitle={lContent.headerData.jobTitle}
                        pEmail={lContent.headerData.email}
                        pPhone={lContent.headerData.phone}
                        pLocation={lContent.headerData.location}
                        pLinkedIn={lContent.headerData.linkedIn}
                        pGitHub={lContent.headerData.gitHub}
                    />

                    <div className="content">
                        <div className="main">
                            <section>
                                <h2>{lContent.labels.projects.activeDevelopment}</h2>
                                <ProjectEntry
                                    pTitle="MyTuums"
                                    pDescription={lActiveDescription}
                                    pTags={['ViteJS', 'React', 'TypeScript', 'Tailwind CSS', 'Fastify', 'tRPC', 'Drizzle', 'PostgreSQL', 'Redis']}
                                    pUrl="https://mytuums.fr"
                                    pUrlText={lContent.labels.projects.visitProject}
                                />
                            </section>

                            <section>
                                <h2>{lContent.labels.projects.completedProjects}</h2>
                                <ProjectEntry
                                    pTitle="Speed Maze"
                                    pDescription={lCompletedDescription}
                                    pTags={['Unity', 'C#']}
                                    pUrl="https://github.com/ElCabrii/SpeedMaze"
                                    pUrlText={lContent.labels.projects.viewSource}
                                />
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
