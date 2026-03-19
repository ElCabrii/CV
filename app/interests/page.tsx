import ThemeToggle from '../components/ThemeToggle';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import InterestEntry from '../components/InterestEntry';
import { getContent } from '../data/content';
import { getRequestLocale } from '../lib/locale';

export default async function Interests() {
    const lLocale = await getRequestLocale();
    const lContent = getContent(lLocale);

    const lNavItems = [
        { pHref: '/', pLabel: lContent.labels.navigation.cv },
        { pHref: '/projects', pLabel: lContent.labels.navigation.projects },
        { pHref: '/studies', pLabel: lContent.labels.navigation.studies },
        { pHref: '/interests', pLabel: lContent.labels.navigation.interests },
    ];

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
                                <h2>{lContent.labels.interests.interests}</h2>
                                {lContent.interests.map((lInterest, lIndex) => (
                                    <InterestEntry
                                        key={lIndex}
                                        pTitle={lInterest.title}
                                        pDescription={lInterest.description}
                                    />
                                ))}
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
