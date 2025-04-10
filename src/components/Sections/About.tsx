import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo, useMemo} from 'react';

import {aboutData, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  const {backgroundImageSrc, profileImageSrc, description, aboutItems} = aboutData;
   const resolveSrc = useMemo(() => {
      if (!backgroundImageSrc) return undefined;
      return typeof backgroundImageSrc === 'string' ? backgroundImageSrc : backgroundImageSrc.src;
    }, [backgroundImageSrc]);
  return (
    <Section noPadding sectionId={SectionId.About}>
      <div className='bg-cover bg-center h-screen px-4 py-16 md:py-24 lg:px-8' style={backgroundImageSrc ? {backgroundImage: `url(${resolveSrc}`} : undefined}>
      <div className="relative flex h-screen w-full items-center justify-center px-2 lg:px-0">
      <div className="window z-10 max-w-screen-md px-4 lg:px-0">
      <div className="title-bar bg-gray-800/60">
            <div className="title-bar-text p-2 text-2xl">About me</div>
          </div>
          <div className="col-span-1 m-2 flex justify-center md:justify-start">
          {!!profileImageSrc && 
            <div className="relative m-2 h-24 w-24 overflow-hidden rounded-xl md:h-32 md:w-32">
              <Image alt="about-me-image" className="h-full w-full object-cover" src={profileImageSrc} />
            </div>
          }
          <ul className="grid grid-cols-1 p-4 gap-4 sm:grid-cols-2">
          {aboutItems.map(({label, text, Icon}, idx) => (
            <li className="col-span-1 flex  items-start gap-x-2" key={idx}>
              {Icon && <Icon className="h-5 w-5 text-black" />}
              <span className="text-sm font-bold text-black">{label}:</span>
              <span className=" text-sm text-black-300">{text}</span>
            </li>
          ))}
        </ul>
        </div>
        <div className={classNames('col-span-1 flex flex-col gap-y-6', {'md:col-span-3': !!profileImageSrc})}>
          <div className="flex flex-col p-2 gap-y-2">
            {description}
          </div>
          
        </div>
        </div>
      </div>
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;
