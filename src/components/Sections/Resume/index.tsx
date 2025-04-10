import {FC, memo, useState} from 'react';

import {education, experience, SectionId, skills} from '../../../data/data';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
import {SkillGroup} from './Skills';
import TimelineItem from './TimelineItem';

const Resume: FC = memo(() => {
  const [activeTab, setActiveTab] = useState<'Education' | 'Work' | 'Skills'>('Education');

  return (
    <Section className="bg-green h-screen" sectionId={SectionId.Resume}>
      <div className="window">
        <div className="title-bar">
          <div className="title-bar-text">Resume</div>
        </div>
        <div className="window-body">
          {/* Tab Navigation */}
          <div className="tabs" role="tablist" aria-label="Resume Sections">
            {['Education', 'Work', 'Skills'].map((tab) => (
              <button
                key={tab}
                role="tab"
                aria-selected={activeTab === tab}
                aria-controls={`${tab.toLowerCase()}-panel`}
                id={`${tab.toLowerCase()}-tab`}
                className={`tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab as 'Education' | 'Work' | 'Skills')}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="tab-body">
            {activeTab === 'Education' && (
              <div
                id="education-panel"
                role="tabpanel"
                aria-labelledby="education-tab"
                className="tabpanel"
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
                className="tabpanel"
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
                className="tabpanel"
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
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
