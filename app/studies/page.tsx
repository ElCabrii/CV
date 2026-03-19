import ThemeToggle from '../components/ThemeToggle';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import EducationItem from '../components/EducationItem';
import { getContent } from '../data/content';
import { getRequestLocale } from '../lib/locale';

export default async function Studies() {
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
                                <h2>{lContent.labels.studies.studies}</h2>
                                {lContent.education.map((lEducation, lIndex) => (
                                    <EducationItem
                                        key={lIndex}
                                        pTitle={lEducation.title}
                                        pInstitution={lEducation.institution}
                                        pYear={lEducation.year}
                                        pSecondaryInfo={lEducation.secondaryInfo}
                                    />
                                ))}
                            </section>

                            <section>
                                <h2>{lContent.labels.studies.certifications}</h2>
                                {lContent.certifications.map((lCertification, lIndex) => (
                                    <div className="education-item" key={lIndex}>
                                        <p>
                                            <strong>{lCertification.name}</strong>
                                        </p>
                                        <p className="year">{lCertification.year}</p>
                                    </div>
                                ))}
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
