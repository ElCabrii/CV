import ThemeToggle from './components/ThemeToggle';
import Navigation from './components/Navigation';
import Header from './components/Header';
import JobEntry from './components/JobEntry';
import ProjectEntry from './components/ProjectEntry';
import SkillCategory from './components/SkillCategory';
import EducationItem from './components/EducationItem';

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
              {/* Professional Summary */}
              <section>
                <h2>Professional Summary</h2>
                <p>
                  Student in Computer Science at Ynov Camput Toulouse, i have aquired a powerful
                  experience in web development and software engineering throughout my personal projects and my
                  apprenticeship. More motivated than ever to learn more, and contribute to the development of
                  solutions that make a difference.
                </p>
              </section>

              {/* Work Experience */}
              <section>
                <h2>Work Experience</h2>

                <JobEntry
                  pPosition="Apprentice Software Developer"
                  pCompany="Akkodis High Tech | Toulouse, France"
                  pDate="Sep 2025 - Present"
                  pResponsibilities={[
                    'Hired as an apprentice until my graduation in 2028, I am currently deploying the clearance processing tool conceived during my internship.',
                  ]}
                />

                <JobEntry
                  pPosition="Intern"
                  pCompany="Akkodis High Tech | Toulouse, France"
                  pDate="Mar 2025 - Jul 2025"
                  pResponsibilities={[
                    'Working on the backend of <a href="https://www.3djumpp.com/">3DJuump Infinite</a>, a CAD/CAO software trusted by companies such as Airbus, Airbus Defense and Space, Airbus Helicopters, Alstom Transport, SAFRAN and more.',
                    'Developed an algorithm that computes the minimum clearance between two sets of parts in a Digital Mockup<br>E.g : Find the minimum clearance between the electrical system and the fuel system in a plane.<br>For two sets of 50k parts, the algorithm takes 5 seconds to compute the minimum clearance.',
                  ]}
                />

                <JobEntry
                  pPosition="Crew member"
                  pCompany="McDonald's | Gaillac, France"
                  pDate="Mar 2023 - Jul 2023"
                  pResponsibilities={[
                    'Participated in the daily operations of the restaurant',
                    'Assisted in the training of new crew members',
                    'Participated in the planning and organization of events',
                  ]}
                />
              </section>

              {/* Projects */}
              <section>
                <h2>Key Projects</h2>

                <ProjectEntry
                  pTitle="Social Media Platform : Tuums (Ongoing)"
                  pDescription="Built the backend of a social media platform using Golang with built-in authentication and authorization, then switched to NestJS for better compatibility with the frontend and to take advantage of tRPC and BetterAuth."
                />

                <ProjectEntry
                  pTitle="AI Saas : ScholAI (Ongoing)"
                  pDescription="Developing a Saas application that uses AI to help students learning programming. Ojective : Replace the conventional AI coding assistant by a more personalized and interactive one, that acts like a teacher."
                />
              </section>
            </div>

            {/* Sidebar */}
            <div className="sidebar">
              {/* Skills */}
              <section>
                <h2>Skills</h2>

                <SkillCategory
                  pTitle="Frontend"
                  pSkills={['TypeScript', 'Next.js', 'React', 'HTML/CSS', 'Tailwind CSS']}
                />

                <SkillCategory
                  pTitle="Backend"
                  pSkills={['Node.js', 'NestJS', 'Python', 'Golang', 'C++']}
                />

                <SkillCategory
                  pTitle="Desktop"
                  pSkills={['Java', 'C#', 'Golang', 'C++', 'DirectX', 'Unity']}
                />

                <SkillCategory
                  pTitle="Databases"
                  pSkills={['ORMs', 'PostgreSQL', 'MongoDB']}
                />

                <SkillCategory
                  pTitle="Tools & Platforms"
                  pSkills={['Git', 'Docker', 'Azure', 'AWS', 'CI/CD', 'AI Prompting']}
                />

                <SkillCategory
                  pTitle="OS"
                  pSkills={['Bash/PowerShell', 'Debian and Arch based systems', 'Windows']}
                />

                <SkillCategory
                  pTitle="Hardware"
                  pSkills={['PC Building/Repairing', 'Laptop repairing']}
                />
              </section>

              {/* Education */}
              <section>
                <h2>Education</h2>

                <EducationItem
                  pTitle="Master of Computer Science (Upcoming)"
                  pInstitution="Toulouse Ynov Campus"
                  pYear="Graduation: 2028"
                  pSecondaryInfo="Software Engineering"
                />

                <EducationItem
                  pTitle="Bachelor of Computer Science (Ongoing)"
                  pInstitution="Toulouse Ynov Campus"
                  pYear="Graduation: 2026"
                  pSecondaryInfo="Software Engineering"
                />

                <EducationItem
                  pTitle="Coding Bootcamp"
                  pInstitution="Toulouse Ynov Campus"
                  pYear="2025"
                  pSecondaryInfo="Position : 2nd"
                />
              </section>

              {/* Certifications */}
              <section>
                <h2>Certifications</h2>

                <div className="education-item">
                  <p>
                    <strong>TOEIC (Upcoming, mock tests around 910)</strong>
                  </p>
                  <p className="year">2025</p>
                </div>

                <div className="education-item">
                  <p>
                    <strong>Cambridge English: Advanced</strong>
                  </p>
                  <p className="year">2021</p>
                </div>
              </section>

              {/* Languages */}
              <section>
                <h2>Languages</h2>
                <ul style={{ listStyle: 'none', marginLeft: 0 }}>
                  <li>French - Native</li>
                  <li>English - Fluent</li>
                  <li>Spanish - Intermediate</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
