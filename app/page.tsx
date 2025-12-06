import ThemeToggle from './components/ThemeToggle';
import Navigation from './components/Navigation';
import Header from './components/Header';
import JobEntry from './components/JobEntry';
import ProjectEntry from './components/ProjectEntry';
import SkillCategory from './components/SkillCategory';
import EducationItem from './components/EducationItem';
import {
  HEADER_DATA,
  PROFESSIONAL_SUMMARY,
  WORK_EXPERIENCE,
  PROJECTS,
  SKILLS,
  EDUCATION,
  CERTIFICATIONS,
  LANGUAGES
} from './data/content';

export default function Home() {
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
              {/* Professional Summary */}
              <section>
                <h2>Professional Summary</h2>
                <p>
                  {PROFESSIONAL_SUMMARY}
                </p>
              </section>

              {/* Work Experience */}
              <section>
                <h2>Work Experience</h2>

                {WORK_EXPERIENCE.map((job, index) => (
                  <JobEntry
                    key={index}
                    pPosition={job.position}
                    pCompany={job.company}
                    pDate={job.date}
                    pResponsibilities={job.responsibilities}
                  />
                ))}
              </section>

              {/* Projects */}
              <section>
                <h2>Key Projects</h2>

                {PROJECTS.map((project, index) => (
                  <ProjectEntry
                    key={index}
                    pTitle={project.title}
                    pDescription={project.description}
                  />
                ))}
              </section>
            </div>

            {/* Sidebar */}
            <div className="sidebar">
              {/* Skills */}
              <section>
                <h2>Skills</h2>

                {SKILLS.map((category, index) => (
                  <SkillCategory
                    key={index}
                    pTitle={category.title}
                    pSkills={category.skills}
                  />
                ))}
              </section>

              {/* Education */}
              <section>
                <h2>Education</h2>

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

              {/* Certifications */}
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

              {/* Languages */}
              <section>
                <h2>Languages</h2>
                <ul style={{ listStyle: 'none', marginLeft: 0 }}>
                  {LANGUAGES.map((lang, index) => (
                    <li key={index}>{lang}</li>
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

