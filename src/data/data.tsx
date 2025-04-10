import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  // CalendarIcon,
  // FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import cloudsImage from '../images/clouds.png';
import doubleDown from '../images/doubleDown.webp';
import airmiles from '../images/portfolio/airmiles.png';
import goodinvesting from '../images/portfolio/goodinvesting.png';
import gsk from '../images/portfolio/gsk.png';
import hut8 from '../images/portfolio/hut8.png';
// import hillsImage from '../images/hills.png';
import pfizer from '../images/portfolio/pfizer.png';
import Siggis from '../images/portfolio/Siggis.png';
import TDM from '../images/portfolio/TDM.png';
import THA from '../images/portfolio/THA.png';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'Welcome',
  About: 'About',
  Contact: 'Contact',
  Portfolio: 'Clients',
  Resume: 'Resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'Testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  name: `Yamini Coen Public Relations`,
  description: (
    <>
      <p className="prose-lg text-black-200 lg:prose-lg">
      Nice to meet you! I’m Yamini, a communications, public relations and digital marketing expert based out of Toronto, Canada.
      </p>
      <p className="prose-lg text-black-200 lg:prose-lg">
        Are you looking for some help with your brand’s marketing and communications strategies? Needing some social media advice, or just plainly someone to do it for you? You’re at the right place!
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
  downImageSrc: doubleDown,
};

/**
 * About section
 */
export const aboutData: About = {
  backgroundImageSrc: cloudsImage,
  profileImageSrc: profilepic,
  description: (
    <>
      <p className="prose-lg text-black-200 lg:prose-lg">
      I’m Yamini, a communications, public relations and digital marketing expert based out of Toronto, Canada. I have been working in the marketing sphere, with a focus on communications, public relations and digital marketing, for over 7 years. I’ve worked with brands across sectors, including financial services, fintech, consumer, health, wellness and more. 
      </p>
      <p className="prose-lg text-black-200 lg:prose-lg">
      I'm passionate about anti-racism, 2SLGBTQIA+ issues, social justice, diversity, equity and inclusion and incorporate that framework in all of my counsel and tactical recommendations.      </p>
    </>
  ),
  aboutItems: [
    {label: 'Location', text: 'Toronto, ON', Icon: MapIcon},
    {label: 'Interests', text: 'Dogs, Gaming, Reality TV', Icon: SparklesIcon},
    {label: 'Study', text: 'Kings College, Halifax', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'YCPR Inc', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Some skill group',
    skills: [
      {
        name: 'External Communications Strategies',
        level: 10,
      },
      {
        name: 'Media Relations',
        level: 9,
      },
      {
        name: 'Influencer Marketing',
        level: 8
      },
      {
        name: 'Diversity, Equity and Inclusion Framework',
        level: 7,
      },
      {
        name: 'Crisis Communications and Strategy',
        level: 4,
      },
      {
        name: 'Social Media Analysis, Planning and Execution',
        level: 3,
      },
    ],
  },
  {
    name: 'Some other skill group',
    skills: [
      {
        name: 'Community Management',
        level: 9,
      },
      {
        name: 'Social Media Monitoring',
        level: 7,
      },
      {
        name: 'Content Creation including Video, Photography and Audio (Podcasting)',
        level: 6,
      },
    ],
  },
  {
    name: 'yet another skill group',
    skills: [
      {
        name: 'Internal Communications Strategies',
        level: 8,
      },
      {
        name: 'Event Management',
        level: 5,
      },
      {
        name: 'Media Monitoring and Reporting',
        level: 4,
      },
    ],
  }
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Pfizer',
    image: pfizer,
  },
  {
    title: 'Glaxo Smith Kline',
    image: gsk,
  },
  {
    title: 'Air Miles',
    image: airmiles,
  },
  {
    title: 'Siggi\'s',
    image: Siggis,
  },
  {
    title: 'Hut 8 Mining',
    image: hut8,
  },
  {
    title: 'Taylor Hazell Architects',
    image: THA,
  },
  {
    title: 'Toronto Dog Mums',
    image: TDM,
  },
  {
    title: 'Good Investing',
    image: goodinvesting,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2017',
    location: 'Humber College',
    title: 'Public Relations Diploma',
  },
  {
    date: '2013',
    location: 'University of Toronto',
    title: 'Master of Arts',
    content: (
      <p>
        Comparative Literature
      </p>
    ),
  },
  {
    date: '2013',
    location: 'University of King\'s college',
    title: 'Bachelor of Arts with Honourss',
    content: (
      <p>
        English Literature & Philosophy
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: '2023 - Present',
    location: 'YCPR',
    title: 'Founder',
    content: undefined,
  },
  {
    date: '2022 - 2023',
    location: 'Hut 8 Mining',
    title: 'Commununications Manager',
    content: undefined,
  },
  {
    date: '2021 - 2022',
    location: 'Air Miles',
    title: 'Talent Marketing Consultant',
    content: undefined,
  },
  {
    date: '2017 - 2021',
    location: 'Porter Novelli',
    title: 'Public Relations Consultant',
    content: (
      <p>
        Health & Wellness, Tech & Corporate Clients
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'reachout@timbaker.me',
      href: 'mailto:yaminicoen@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Victoria BC, Canada',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@tbakerx',
      href: 'https://www.instagram.com/tbakerx/',
    },
    {
      type: ContactType.Github,
      text: 'tbakerx',
      href: 'https://github.com/tbakerx',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  // {label: 'Github', Icon: GithubIcon, href: 'https://github.com/tbakerx'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
