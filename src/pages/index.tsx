import "98.css"

import dynamic from 'next/dynamic';
import {FC, memo, useEffect, useRef} from 'react';

import Page from '../components/Layout/Page';
import About from '../components/Sections/About';
import Contact from '../components/Sections/Contact';
import Footer from '../components/Sections/Footer';
import Hero from '../components/Sections/Hero';
import Portfolio from "../components/Sections/Portfolio";
import Resume from '../components/Sections/Resume';
// import Testimonials from '../components/Sections/Testimonials';
import {homePageMeta} from '../data/data';

// eslint-disable-next-line react-memo/require-memo
const Header = dynamic(() => import('../components/Sections/Header'), {ssr: false});

const Home: FC = memo(() => {
  const {title, description} = homePageMeta;

  const sectionsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const handleScroll = (event: WheelEvent | KeyboardEvent) => {
      const currentSectionIndex = sectionsRef.current.findIndex((section) =>
        section.getBoundingClientRect().top >= 0
      );

      if (event instanceof WheelEvent) {
        if (event.deltaY > 0 && currentSectionIndex < sectionsRef.current.length - 1) {
          // Scroll down
          sectionsRef.current[currentSectionIndex + 1].scrollIntoView({behavior: 'smooth'});
        } else if (event.deltaY < 0 && currentSectionIndex > 0) {
          // Scroll up
          sectionsRef.current[currentSectionIndex - 1].scrollIntoView({behavior: 'smooth'});
        }
      } else if (event instanceof KeyboardEvent) {
        if (event.key === 'ArrowDown' && currentSectionIndex < sectionsRef.current.length - 1) {
          // Scroll down
          sectionsRef.current[currentSectionIndex + 1].scrollIntoView({behavior: 'smooth'});
        } else if (event.key === 'ArrowUp' && currentSectionIndex > 0) {
          // Scroll up
          sectionsRef.current[currentSectionIndex - 1].scrollIntoView({behavior: 'smooth'});
        }
      }
    };

    // Add event listeners
    window.addEventListener('wheel', handleScroll, {passive: false});
    window.addEventListener('keydown', handleScroll);

    return () => {
      // Cleanup event listeners
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('keydown', handleScroll);
    };
  }, []);


  return (
    <Page description={description} title={title}>

      <Header />
        <section className="min-h-screen" id="welcome" ref={(el) => el && sectionsRef.current.push(el)}>
          <Hero />
        </section>
        <section className="min-h-screen" id="about" ref={(el) => el && sectionsRef.current.push(el)}>
    
      <About />
            </section>
      <section className="min-h-screen" id="resume" ref={(el) => el && sectionsRef.current.push(el)}>
      <Resume />
      </section>
      <section className="min-h-screen" id="portfolio" ref={(el) => el && sectionsRef.current.push(el)}>
      <Portfolio />
      </section>
      {/* <section ref={(el) => el && sectionsRef.current.push(el)} id="testimonials" className="min-h-screen">
        <Testimonials />
      {/* <Testimonials /> */}
      {/* </section> */}
      <section className="min-h-screen" id="contact" ref={(el) => el && sectionsRef.current.push(el)}>
      <Contact />
      </section>
      <Footer />
    </Page>
  );
});

export default Home;
