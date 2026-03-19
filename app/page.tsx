import ThemeToggle from './components/ThemeToggle';
import Navigation from './components/Navigation';
import Header from './components/Header';
import JobEntry from './components/JobEntry';
import ProjectEntry from './components/ProjectEntry';
import SkillCategory from './components/SkillCategory';
import { getContent } from './data/content';
import { getRequestLocale } from './lib/locale';

export default async function Home() {
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
                <h2>{lContent.labels.home.professionalSummary}</h2>
                <p>{lContent.professionalSummary}</p>
              </section>

              <section>
                <h2>{lContent.labels.home.workExperience}</h2>

                {lContent.workExperience.map((lJob, lIndex) => (
                  <JobEntry
                    key={lIndex}
                    pPosition={lJob.position}
                    pCompany={lJob.company}
                    pDate={lJob.date}
                    pResponsibilities={lJob.responsibilities}
                  />
                ))}
              </section>

              <section>
                <h2>{lContent.labels.home.keyProject}</h2>

                {lContent.projects.map((lProject, lIndex) => (
                  <ProjectEntry
                    key={lIndex}
                    pTitle={lProject.title}
                    pDescription={lProject.description}
                  />
                ))}
              </section>
            </div>

            <div className="sidebar">
              <section>
                <h2>{lContent.labels.home.skills}</h2>

                {lContent.skills.map((lCategory, lIndex) => (
                  <SkillCategory
                    key={lIndex}
                    pTitle={lCategory.title}
                    pSkills={lCategory.skills}
                  />
                ))}
              </section>

              <section>
                <h2>{lContent.labels.home.languages}</h2>
                <ul style={{ listStyle: 'none', marginLeft: 0 }}>
                  {lContent.languages.map((lLanguage, lIndex) => (
                    <li key={lIndex}>{lLanguage}</li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
