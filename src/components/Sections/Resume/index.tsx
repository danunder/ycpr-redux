import {FC, memo, useState} from 'react';

import {education, experience, SectionId, skills} from '../../../data/data';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
import {SkillGroup} from './Skills';
import TimelineItem from './TimelineItem';

const Resume: FC = memo(() => {
  const [activeTab, setActiveTab] = useState<'Education' | 'Work' | 'Skills'>('Education');

  return (
    <Section className="bg-background px-4 bg-gradient-to-br from-green via-10% via-gradient1 via-30% via-gradient2 via-50% via-gradient3 via-70% via-gradient4 to-90% to-gradient5" sectionId={SectionId.Resume}>
      <div className="relative flex h-screen justify-center p-4 lg:px-0">
        <div className="window z-10 h-4/5 sm:h-2/3 overflow-scroll sm:w-4/5 sm:max-w-screen-md sm:px-0">
          <div className="title-bar">
            <div className="title-bar-text p-1 lg:p-2 text-base sm:text-2xl">Resume</div>
          </div>
          <div className="window-body h-[85%]">
            {/* Tab Navigation */}
            <menu className="tabs" role="tablist" aria-label="Resume Sections">
              {['Education', 'Work', 'Skills'].map((tab) => (
                <li
                  key={tab}
                  role="tab"
                  aria-selected={activeTab === tab}
                  aria-controls={`${tab.toLowerCase()}-panel`}
                  id={`${tab.toLowerCase()}-tab`}
                  className={`p-2 text-base first-line:tab ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab as 'Education' | 'Work' | 'Skills')}
                >
                  {tab}
                </li>
              ))}
            </menu>
            {/* Tab Content */}
            <div data-scrollable className="window h-full" role="tabpanel" aria-labelledby={`${activeTab.toLowerCase()}-tab`}>
              {activeTab === 'Education' && (
                <div
                  id="education-panel"
                  role="tabpanel"
                  aria-labelledby="education-tab"
                  className="window-body h-full"

                >
                  <ResumeSection title="Education">
                    {education.map((item, index) => (
                      <TimelineItem item={item} key={`${item.title}-${index}`} />
                    ))}
                  </ResumeSection>
                </div>
              )}
            {activeTab === 'Work' && (
              <div
                id="work-panel"
                role="tabpanel"
                aria-labelledby="work-tab"
                className="window-body"
              >
                <ResumeSection title="Work">
                  {experience.map((item, index) => (
                    <TimelineItem item={item} key={`${item.title}-${index}`} />
                  ))}
                </ResumeSection>
              </div>
            )}
            {activeTab === 'Skills' && (
              <div
                id="skills-panel"
                role="tabpanel"
                aria-labelledby="skills-tab"
                className="window-body"
              >
                <ResumeSection title="Skills">
                  <p className="pb-8">Here you can show a snapshot of your skills to show off to employers</p>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {skills.map((skillgroup, index) => (
                      <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
                    ))}
                  </div>
                </ResumeSection>
              </div>
            )}
          </div>
        </div>
      </div>
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
