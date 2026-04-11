import { BsArrowUpRight } from "react-icons/bs";
import { useInView } from "../hooks/useInView";
import { FaLinkedinIn } from "react-icons/fa6";
import LINKS from "../constants/links";
import profilePic from '../assets/reshma-profile-2.jpg';

function About() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section
      id="about"
      ref={ref}
      className={`
        pt-16 lg:pt-24
        transition-all duration-700 ease-out
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
    >
      <div className="grid lg:grid-cols-[1fr,1fr] justify-start gap-6 mb-10 lg:mb-20">
        <h3 className="text-4xl">... /About me ...</h3>

        <p className="text-lightGray">
          Hi, I'm Reshma — a <span className="text-white italic">front-end developer </span>with <span className="text-white italic">4+ years </span>
          of experience working on <span className="text-white italic">production-ready </span>websites and applications across diverse projects.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-[7fr,5fr] lg:gap-20 items-start grid-flow-row-dense">

        <div className="space-y-8 order-2 lg:order-1">
          <div className="flex items-center flex-wrap gap-4">
            <div className="bg-white rounded-3xl border  border-darkGray p-5 space-y-4">
              <h4 className="font-semibold text-black">Front-End Development</h4>
              <p className="text-black leading-relaxed text-sm font-mono">
                HTML5 / CSS3 / JavaScript (ES6+) / jQuery / React.js / TypeScript / PHP / Laravel / Responsive Design / Cross-Browser Compatibility
              </p>
            </div>

            <div className="bg-black flex-1 rounded-3xl border border-darkGray p-5 space-y-4">
              <h4 className="font-semibold text-white">UI Styling & Design</h4>
              <p className="leading-relaxed text-sm text-lightGray font-mono">
                Tailwind CSS / SCSS / SASS / Bootstrap / Material UI / Figma / Web Accessibility Standards
              </p>
            </div>

            <div className="bg-black flex-1 space-y-4 text-center">
              <a href={LINKS.linkedin} title="View LinkedIn" className="group inline-flex items-center gap-1 rounded-full text-black text-sm font-medium shadow-lg">
                <FaLinkedinIn className='transition-all duration-300 border rounded-full italic text-white bg-black px-1 py-3 w-11 h-11 -mr-4 
                group-hover:-translate-x-2 group-hover:bg-white group-hover:text-black' />
                <BsArrowUpRight className='transition-all duration-300 border rounded-full italic bg-white p-3 w-11 h-11 
                group-hover:translate-x-2 group-hover:bg-black group-hover:text-white group-hover:rotate-45' />
              </a>
            </div>

            <div className="bg-black rounded-3xl border border-darkGray p-5 space-y-4">
              <h4 className="font-semibold text-white">WordPress Development</h4>
              <p className="leading-relaxed text-sm text-lightGray font-mono">
                Custom Theme Development / Gutenberg Blocks / Elementor / Advanced Custom Fields (ACF) / Custom Post Types (CPT) / WooCommerce / Performance Optimization / SEO Basics / Plugin Integration
              </p>
            </div>

            <div className="bg-black flex-1 space-y-4">
              <p className="text-lightGray max-w-full">
                Some of the <span className="text-white italic">technologies
                  and tools </span>I work with to build modern web applications.
              </p>
            </div>

            <div className="bg-black flex-1 rounded-3xl border border-darkGray p-5 space-y-4">
              <h4 className="font-semibold text-white">Tools, AI & Integrations</h4>
              <p className="leading-relaxed text-sm text-lightGray font-mono">
                Git / GitHub / VS Code / CI/CD / ChatGPT / REST APIs / CRM Integration (HubSpot, Zoho) / Payment Gateway Integration / Google Analytics (GA4)
              </p>
            </div>
          </div>
        </div>

        <div className="bg-black h-[500px] overflow-hiddenbg-black lg:ml-20 rounded-3xl overflow-hidden border border-darkGray flex items-center justify-center order-1 lg:order-2">
          <img
            src={profilePic}
            alt="Reshma Lihe"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="lg:w-[600px] lg:h-[600px] w-[700px] h-[700px] absolute top-0 -right-[400px] lg:-right-40 border 
      border-darkGray rounded-full -z-10"></div>
    </section>
  );
}

export default About;
