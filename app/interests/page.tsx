import ThemeToggle from '../components/ThemeToggle';
import Navigation from '../components/Navigation';
import Header from '../components/Header';

import { HEADER_DATA } from '../data/content';

export default function Interests() {
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
                                <h2>Interests</h2>
                                <p>
                                    This section will explore my hobbies and interests outside of work. Currently under construction.
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
