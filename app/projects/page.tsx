import ThemeToggle from '../components/ThemeToggle';
import Navigation from '../components/Navigation';
import Header from '../components/Header';

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
                                <h2>Personal Projects</h2>
                                <p>
                                    This section will showcase my personal projects and side work. Currently under construction.
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
