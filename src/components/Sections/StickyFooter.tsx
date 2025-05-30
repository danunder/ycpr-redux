import {Dialog, Transition} from '@headlessui/react';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import {FC, Fragment, memo, useCallback, useMemo, useState} from 'react';
import Socials from '../Socials';
import {SectionId} from '../../data/data';
import {useNavObserver} from '../../hooks/useNavObserver';
import About from '../../images/About.png'
// import Clients from '../../images/Clients.png'
import contact from '../../images/contact.png'
import Resume from '../../images/Resume.png'
import START from '../../images/START.png'
import homepage from '../../images/homepage-0.png';

import testimonials from '../../images/testimonials.png'

export const headerID = 'headerNav';

const StickyFooter: FC = memo(() => {
  const [currentSection, setCurrentSection] = useState<SectionId | null>(null);
  const navSections = useMemo(
    () => [
      {name: SectionId.Hero, image: homepage},
      {name: SectionId.About, image: About},
      {name: SectionId.Resume, image: Resume},
      // {name: SectionId.Portfolio, image: Clients},
      {name: SectionId.Testimonials, image: testimonials},
      {name: SectionId.Contact, image: contact},
    ], 
    [],
  );

  const intersectionHandler = useCallback((section: SectionId | null) => {
    section && setCurrentSection(section);
  }, []);

  useNavObserver(navSections.map(section => `#${section.name}`).join(','), intersectionHandler);

  return (
    <>
      <MobileNav currentSection={currentSection} navSections={navSections} />
      <DesktopNav currentSection={currentSection} navSections={navSections} />
    </>
  );
});

// -2px_-2px_#818181,-2px_0_#818181,0_-2px_#818181,-4px_-4px_black,-4px_0_black,0_-4px_black,2px_2px_#e0dede,0_2px_#e0dede,2px_0_#e0dede,2px_-2px_#818181,-2px_2px_#e0dede,-4px_2px_black,-4px_4px_white,4px_4px_white,4px_0_white,0_4px_white,2px_-4px_black,4px_-4px_white

const DesktopNav: FC<{navSections: {name: SectionId; image: string}[]; currentSection: SectionId | null}> = memo(
  ({navSections, currentSection}) => {
    const baseClass =
      '-m-1.5 p-1.5 rounded-md font-bold first-letter:uppercase hover:transition-colors hover:duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 sm:hover:text-orange-500 text-neutral-100';
    const activeClass = classNames(baseClass, 'text-orange-500');
    const inactiveClass = classNames(baseClass, 'text-neutral-100');
    return (
      <header className="fixed bottom-0 z-50 h-[3.5rem] hidden w-full bg-[#c0c0c0] p-2 sm:block shadow-[0_-2px_#fffdfc]" id={headerID}>
        
        <nav className="flex justify-between ">
          <div className="flex justify-left gap-x-4">
          {navSections.map(section => (
            section.name === 'Welcome' ? <>
            <NavItem
              activeClass={activeClass}
              current={section.name === currentSection}
              image={START}
              inactiveClass={inactiveClass}
              key={section.name}
              section={section.name}
              hideName
            />
            <div className='w-[4px] h-[36px] mt-[2px] bg-[#797979] float-left border-r-2 border-solid border-[#fff]'/>
            </> : <NavItem
              activeClass={activeClass}
              current={section.name === currentSection}
              image={section.image}
              inactiveClass={inactiveClass}
              key={section.name}
              section={section.name}
            />
          ))}
          </div>
            <div className="flex self-center p-2 gap-x-4 shadow-win98-clock text-neutral-100">
              <Socials />
            </div>
        </nav>
      </header>
    );
  },
);
const MobileNav: FC<{navSections: {name: SectionId; image: string}[]; currentSection: SectionId | null}> = memo(
  ({navSections, currentSection}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleOpen = useCallback(() => {
      setIsOpen(!isOpen);
    }, [isOpen]);

    const baseClass =
      '-m-1.5 p-1.5 rounded-md font-bold first-letter:uppercase hover:transition-colors hover:duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 sm:hover:text-orange-500 text-neutral-100';
    const activeClass = classNames(baseClass, 'text-orange-500');
    const inactiveClass = classNames(baseClass, 'text-neutral-100');
    return (
      <header className="fixed bottom-0 z-50 h-[3.5rem] block w-full bg-[#c0c0c0] p-2 sm:hidden shadow-[0_-2px_#fffdfc]" id={headerID}>
        
        <nav className="flex justify-between ">
         
          <button
          aria-label="Menu Button"
          onClick={toggleOpen}
          onChange={toggleOpen}
          className={`font-medium shadow-win98${isOpen ? "-active" : ""} `}
          >
             <span className="sr-only">Open sidebar</span>
             <Image className='my-2' alt="menu" height={22.5} src={START} />
          </button>
          <Transition.Root as={Fragment} show={isOpen}>
          <Dialog as="div" className="fixed inset-0 z-40 h-[calc(100%-3.5rem)] flex sm:hidden" onClose={toggleOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <Dialog.Overlay className="fixed inset-0 bg-stone-900 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full">
              <div className="relative w-4/5 bg-grey flex flex-col justify-end">
                <nav className="mt-5 flex flex-col space-y-4 py-4 px-2">
                  {navSections.map(section => (
                    <MobileNavItem
                    activeClass={activeClass}
                    current={section.name === currentSection}
                    image={section.image}
                    inactiveClass={inactiveClass}
                    key={section.name}
                    section={section.name}

                    />
                  ))}
                </nav>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>
        
            <div className="flex self-center p-2 gap-x-4 shadow-win98-clock text-neutral-100">
              <Socials />
            </div>
        </nav>
      </header>
    );
  },
);
// const OldMobileNav: FC<{navSections: SectionId[]; currentSection: SectionId | null}> = memo(
//   ({navSections, currentSection}) => {
//     const [isOpen, setIsOpen] = useState<boolean>(false);

//     const toggleOpen = useCallback(() => {
//       setIsOpen(!isOpen);
//     }, [isOpen]);

//     const baseClass =
//       'p-2 rounded-md first-letter:uppercase  transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500';
//     const activeClass = classNames(baseClass, 'bg-neutral-900 text-white font-bold shadow-win98-active');
//     const inactiveClass = classNames(baseClass, 'text-neutral-200 font-medium shadow-win98');
//     return (
//       <>
//         <button
//           aria-label="Menu Button"
//           className="fixed right-2 top-2 z-40 rounded-md bg-orange-500 p-2 ring-offset-gray-800/60 hover:bg-orange-400 focus:outline-none focus:ring-0 focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 sm:hidden"
//           onClick={toggleOpen}>
//           <Bars3BottomRightIcon className="h-8 w-8 text-white" />
//           <span className="sr-only">Open sidebar</span>
//         </button>
//         <Transition.Root as={Fragment} show={isOpen}>
//           <Dialog as="div" className="fixed inset-0 z-40 flex sm:hidden" onClose={toggleOpen}>
//             <Transition.Child
//               as={Fragment}
//               enter="transition-opacity ease-linear duration-300"
//               enterFrom="opacity-0"
//               enterTo="opacity-100"
//               leave="transition-opacity ease-linear duration-300"
//               leaveFrom="opacity-100"
//               leaveTo="opacity-0">
//               <Dialog.Overlay className="fixed inset-0 bg-stone-900 bg-opacity-75" />
//             </Transition.Child>
//             <Transition.Child
//               as={Fragment}
//               enter="transition ease-in-out duration-300 transform"
//               enterFrom="-translate-x-full"
//               enterTo="translate-x-0"
//               leave="transition ease-in-out duration-300 transform"
//               leaveFrom="translate-x-0"
//               leaveTo="-translate-x-full">
//               <div className="relative w-4/5 bg-stone-800">
//                 <nav className="mt-5 flex flex-col gap-y-2 px-2">
//                   {navSections.map(section => (
//                     <NavItem
//                       activeClass={activeClass}
//                       current={section === currentSection}
//                       inactiveClass={inactiveClass}
//                       key={section}
//                       onClick={toggleOpen}
//                       section={section}

//                     />
//                   ))}
//                 </nav>
//               </div>
//             </Transition.Child>
//           </Dialog>
//         </Transition.Root>
//       </>
//     );
//   },
// );

const NavItem: FC<{
  section: string;
  current: boolean;
  activeClass: string;
  inactiveClass: string;
  onClick?: () => void;
  image: string;
  hideName?: boolean;
}> = memo(({section, current, inactiveClass, activeClass, onClick, image, hideName}) => {
  return (
    
    <Link
      className={classNames(current ? activeClass : inactiveClass)}
      href={`/#${section}`}
      key={section}
      onClick={onClick}>
      <div className={`p-2 flex gap-x-2 max-w-fit shadow-win98${current ? '-active' : ''}`}>
      <Image alt={section} height={22.5} src={image} />
        {!hideName &&<p className='text-black text-base'>
          {section}
        </p>}
      
      </div>
    </Link>
  );
});
const MobileNavItem: FC<{
  section: string;
  current: boolean;
  activeClass: string;
  inactiveClass: string;
  onClick?: () => void;
  image: string;
  hideName?: boolean;
}> = memo(({section, current, inactiveClass, activeClass, onClick, image, hideName}) => {
  return (
    
    <Link
      className={classNames(current ? activeClass : inactiveClass)}
      href={`/#${section}`}
      key={section}
      onClick={onClick}>
      <div className={`p-2 flex gap-x-2 max-w-fit`}>
      <Image alt={section} height={22.5} src={image} />
        {!hideName &&<p className='text-black text-base'>
          {section}
        </p>}
      
      </div>
    </Link>
  );
});

StickyFooter.displayName = 'Header';
export default StickyFooter;
