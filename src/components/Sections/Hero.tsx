// import Image from 'next/image';
import {FC, memo, useMemo} from 'react';

import {heroData, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const Hero: FC = memo(() => {
  const {name, subtitle, description, actions, downImageSrc} = heroData;

  const resolveSrc = useMemo(() => {
        if (!downImageSrc) return undefined;
        return typeof downImageSrc === 'string' ? downImageSrc : downImageSrc.src;
      }, [downImageSrc]);


  return (
    <Section className="bg-background px-4 bg-gradient-to-br from-green via-10% via-gradient1 via-30% via-gradient2 via-50% via-gradient3 via-70% via-gradient4 to-90% to-gradient5" noPadding sectionId={SectionId.Hero}>
      <div className="relative flex h-screen items-center justify-center p-8 lg:px-0">
        
        <div className="window z-10 h-min sm:max-w-screen-md  sm:px-0">
          <div className="title-bar">
            <div className="title-bar-text p-1 lg:p-2 text-base sm:text-2xl">Welcome</div>
          </div>
          <div className="flex flex-col items-center gap-y-2 sm:gap-y-6 p-4 lg:p-6 text-center">
            <h1 className="text-3xl font-bold text-black sm:text-8xl">{name}</h1>
            <h2 className="text-base font-bold text-black sm:text-4xl">{subtitle}</h2>

            {description}
            <div className="flex w-full justify-center gap-x-4">
              {actions.map(({href, text, Icon}) => (
                <button>
                <a
                  className= 'flex gap-x-2 bg-none px-4 py-2 text-lg font-medium text-black hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2'
                  href={href}
                  key={text}>
                  {text}
                  {Icon && <Icon className="h-5 w-5 text-black sm:h-6 sm:w-6" />}
                </a>
                </button>
              ))}
            </div>
          </div>
        </div>
        {/* <div className="absolute inset-x-0 bottom-14 flex justify-center">
          <a
            className=" p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
            href={`/#${SectionId.About}`}>
            <Image alt="double-down" height={40} src={resolveSrc ?? ""} width={40}/>
          </a>
        </div> */}
      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
