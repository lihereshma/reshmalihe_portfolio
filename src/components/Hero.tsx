import { BsArrowRight } from 'react-icons/bs';
import { FaGithub, FaLinkedin, FaCodepen } from 'react-icons/fa6';
import LINKS from '../constants/links';

function Hero() {
  return (
    <section
      id="hero"
      className="pt-32 pb-16 lg:pb-24 relative z-10"
    >
      <div className="lg:w-[450px] lg:h-[450px] w-[300px] h-[300px] absolute top-[6rem] lg:top-50 -left-40 lg:-left-60 border 
      border-darkGray rounded-full -z-10"></div>

      <div className="block md:hidden">
        <div className="space-y-6">
          <h2 className="text-5xl font-semibold font-mono">
            <span className="block">Front-End</span>
            <span className="block text-right mt-3">Developer</span>
          </h2>
          <p className="text-lightGray max-w-full">
            Focused on building <span className="text-white italic">scalable, maintainable, </span>
            and <span className="text-white italic">user-centric </span>web applications.
          </p>
        </div>

        <div className="flex flex-col items-start gap-6 mt-8">
          <a href="#projects" title='View Projects' className="group inline-flex items-center gap-1 rounded-full text-black text-sm font-medium shadow-lg">
            <span className='w-60 text-center border rounded-full italic bg-white px-8 py-3 transition-all duration-300 
            group-hover:translate-x-6 group-hover:bg-black group-hover:text-white'>View Projects</span>
            <BsArrowRight className='border rounded-full italic bg-white p-3 w-11 h-11 transition-all duration-300 
            group-hover:-translate-x-6 group-hover:bg-black group-hover:text-white group-hover:-rotate-45' />
          </a>
        </div>
      </div>

      <div className="hidden md:block pt-10">
        <div className="flex items-center justify-between gap-6 mb-4">
          <h2 className="sm:text-4rem lg:text-7rem font-semibold font-mono">
            <span className="block">Front-End</span>
          </h2>

          <a href="#projects" title='View Projects' className="group inline-flex items-center gap-1 rounded-full text-black text-sm font-medium shadow-lg">
            <span
              className='w-60 border text-center border-white rounded-full italic bg-white px-8 py-3 transition-all duration-300  
            group-hover:translate-x-6 group-hover:bg-black group-hover:text-white'>
              View Projects</span>
            <BsArrowRight
              className='border border-white rounded-full italic bg-white p-3 w-11 h-11 transition-all duration-300 
            group-hover:-translate-x-6 group-hover:bg-black group-hover:text-white group-hover:-rotate-45' />
          </a>
        </div>

        <div className="flex items-center justify-between gap-6">
          <p className="text-lightGray max-w-76">
            Focused on building <span className="text-white italic">scalable, maintainable, </span>
            and <span className="text-white italic">user-centric </span>web applications.
          </p>
          <h2 className="sm:text-4rem lg:text-7rem font-semibold font-mono">
            <span className="block">Developer</span>
          </h2>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mt-12 italic">
        <a
          href={LINKS.github} title='View GitHub'
          className="px-5 md:px-8 py-3 rounded-full border bg-black border-darkGray text-xs md:text-sm 
          flex items-center gap-2 hover:bg-white hover:text-black transition duration-500"
        >
          <FaGithub className="w-4 h-4" /><span>GitHub</span>
        </a>
        <a
          href={LINKS.linkedin} title='View LinkedIn'
          className="px-5 md:px-8 py-3 rounded-full border bg-black border-darkGray text-xs md:text-sm 
          flex items-center gap-2 hover:bg-white hover:text-black transition duration-500"
        >
          <FaLinkedin className="w-4 h-4" /><span>LinkedIn</span>
        </a>
        <a
          href={LINKS.codepen} title='View CodePen'
          className="px-5 md:px-8 py-3 rounded-full border bg-black border-darkGray text-xs md:text-sm 
          flex items-center gap-2 hover:bg-white hover:text-black transition duration-500"
        >
          <FaCodepen className="w-4 h-4" /><span>CodePen</span>
        </a>
      </div>
    </section>
  );
}

export default Hero;
