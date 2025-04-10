import Image from 'next/image';
import {FC, memo, useMemo} from 'react';

import {heroData, SectionId} from '../../data/data';
import Section from '../Layout/Section';
import Socials from '../Socials';

const Hero: FC = memo(() => {
  const {name, description, actions, downImageSrc} = heroData;

  const resolveSrc = useMemo(() => {
        if (!downImageSrc) return undefined;
        return typeof downImageSrc === 'string' ? downImageSrc : downImageSrc.src;
      }, [downImageSrc]);


  return (
    <Section className="bg-background px-4 bg-gradient-to-br from-green via-10% via-gradient1 via-30% via-gradient2 via-50% via-gradient3 via-70% via-gradient4 to-90% to-gradient5" noPadding sectionId={SectionId.Hero}>
      <div className="relative flex h-screen w-full items-center justify-center px-2 lg:px-0">
        
        <div className="window z-10 max-w-screen-md px-4 lg:px-0">
          <div className="title-bar bg-gray-800/60">
            <div className="title-bar-text p-2 text-2xl">Welcome</div>
          </div>
          <div className="flex flex-col items-center gap-y-6 rounded-xl p-6 text-center shadow-lg backdrop-blur-sm">
            <h1 className="text-4xl font-bold text-black sm:text-3xl lg:text-5xl">{name}</h1>
            {description}
            <div className="flex gap-x-4 text-neutral-100">
              <Socials />
            </div>
            <div className="flex w-full justify-center gap-x-4">
              {actions.map(({href, text, Icon}) => (
                <button>
                <a
                  className= 'flex gap-x-2 bg-none px-4 py-2 text-sm font-medium text-black hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base'
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
        <div className="absolute inset-x-0 bottom-14 flex justify-center">
          <a
            className=" p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
            href={`/#${SectionId.About}`}>
            <Image alt="double-down" height={40} src={resolveSrc ?? ""} width={40}/>
          </a>
        </div>
      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
