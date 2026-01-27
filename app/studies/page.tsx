import ThemeToggle from '../components/ThemeToggle';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import EducationItem from '../components/EducationItem';

import { HEADER_DATA, EDUCATION, CERTIFICATIONS } from '../data/content';

export default function Studies() {
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
                                <h2>Studies</h2>
                                {EDUCATION.map((edu, index) => (
                                    <EducationItem
                                        key={index}
                                        pTitle={edu.title}
                                        pInstitution={edu.institution}
                                        pYear={edu.year}
                                        pSecondaryInfo={edu.secondaryInfo}
                                    />
                                ))}
                            </section>

                            <section>
                                <h2>Certifications</h2>
                                {CERTIFICATIONS.map((cert, index) => (
                                    <div className="education-item" key={index}>
                                        <p>
                                            <strong>{cert.name}</strong>
                                        </p>
                                        <p className="year">{cert.year}</p>
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
