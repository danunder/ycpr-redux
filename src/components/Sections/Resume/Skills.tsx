import {FC, memo, PropsWithChildren, useMemo} from 'react';
import Image from 'next/image';

import {Skill as SkillType, SkillGroup as SkillGroupType} from '../../../data/dataDef';

export const SkillGroup: FC<PropsWithChildren<{skillGroup: SkillGroupType}>> = memo(({skillGroup}) => {
  const {name, skills} = skillGroup;
  return (
    <>
      <div className="text-base font-bold p-2">{name}</div>
      <div className="flex flex-col">
        {skills.map((skill, index) => (
          <Skill key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
      </>
  );
});

SkillGroup.displayName = 'SkillGroup';

export const Skill: FC<{skill: SkillType}> = memo(({skill}) => {
  const {name, icon } = skill;
  const resolveSrc = useMemo(() => {
    if (!icon) return undefined;
    return typeof icon === 'string' ? icon : icon.src;
  }, [icon]);

  return (
    <ul className="flex flex-col">
 
 <li className="flex flex-row items-start p-x-2 gap-x-2">
          
          {resolveSrc && (
            <Image className="mt-[-2px]" src={resolveSrc} alt={name} height={24} width={24}/>)}
            <h4 className='text-base'>{name}</h4>
      </li>
    </ul>
  );
});

Skill.displayName = 'Skill';

<ul className='space-y-4'>
          
          <li>
            <h3>Yamini Coen Public Relations</h3>
            <ul>
              <li>
                Founder
              </li>
              <li>
                2023 - Present
              </li>
            </ul>
          </li>
          <li>
            Hut 8 Mining
            <ul>
              <li>
                Communications Manager
              </li>
              <li>
                2022-2023
              </li>
            </ul>
          </li>
        </ul>