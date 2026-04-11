import { BsArrowRight, BsArrowUpRight } from "react-icons/bs";
import { FaLink } from "react-icons/fa6";
import { useInView } from "../hooks/useInView";
import boundSquare from "../assets/bound-square.png";
import boundLogo from "../assets/bound-india-logo.png";
import boundRectangle from "../assets/bound-rectangle.png";
import assetzSquare from "../assets/assetz-square.png";
import assetzLogo from "../assets/assetz-property-logo.png";
import assetzRectangle from "../assets/assetz-rectangle.png";
import whooshSquare from "../assets/whoosh-square.png";
import whooshLogo from "../assets/whoosh-logo.png";
import whooshRectangle from "../assets/whoosh-rectangle.png";
import { Link } from "react-router-dom";

function Projects() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section
      id="projects"
      ref={ref}
      className={`
        py-16 lg:py-24 relative
        transition-all duration-700 ease-out
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
    >
      <div className="lg:w-[800px] lg:h-[800px] w-[600px] h-[600px] absolute top-10 -right-[400px] border 
      border-darkGray rounded-full -z-10"></div>

      <div className="flex items-center justify-between gap-6 mb-8 lg:mb-20">
        <h3 className="text-5xl lg:text-7rem font-semibold font-mono">Projects</h3>


        <Link
          to="/allprojects"
          title="View Projects"
          className="hidden md:inline-flex group items-center gap-1 rounded-full text-black text-sm font-medium shadow-lg"
        >
          <span
            className="w-60 text-center border rounded-full italic bg-white px-8 py-3 transition-all duration-300 
            group-hover:translate-x-6 group-hover:bg-black group-hover:text-white"
          >
            View All Projects
          </span>

          <BsArrowRight
            className="border rounded-full italic bg-white p-3 w-11 h-11 transition-all duration-300 
            group-hover:-translate-x-6 group-hover:bg-black group-hover:text-white group-hover:-rotate-45"
          />
        </Link>
      </div>

      {/* Bound India */}
      <div className="grid gap-10 lg:gap-20 lg:grid-cols-[4fr,8fr] items-center mb-10">
        <div className="space-y-8">
          <h5 className="text-3xl font-semibold">Bound India</h5>
          <div className="flex flex-wrap gap-2">
            <span className="text-sm font-mono px-3 py-1 rounded-full border border-darkGray bg-darkGray tracking-wide text-lightGray">HTML5</span>
            <span className="text-sm font-mono px-3 py-1 rounded-full border border-darkGray bg-darkGray tracking-wide text-lightGray">CSS3</span>
            <span className="text-sm font-mono px-3 py-1 rounded-full border border-darkGray bg-darkGray tracking-wide text-lightGray">JS/jQuery</span>
            <span className="text-sm font-mono px-3 py-1 rounded-full border border-darkGray bg-darkGray tracking-wide text-lightGray">PHP</span>
            <span className="text-sm font-mono px-3 py-1 rounded-full border border-darkGray bg-darkGray tracking-wide text-lightGray">MySQL</span>
            <span className="text-sm font-mono px-3 py-1 rounded-full border border-darkGray bg-darkGray tracking-wide text-lightGray">WordPress</span>
            <span className="text-sm font-mono px-3 py-1 rounded-full border border-darkGray bg-darkGray tracking-wide text-lightGray">Elementor</span>
            <span className="text-sm font-mono px-3 py-1 rounded-full border border-darkGray bg-darkGray tracking-wide text-lightGray">Custom Theme</span>
            <span className="text-sm font-mono px-3 py-1 rounded-full border border-darkGray bg-darkGray tracking-wide text-lightGray">Responsive</span>
            <span className="text-sm font-mono px-3 py-1 rounded-full border border-darkGray bg-darkGray tracking-wide text-lightGray">CPT</span>
            <span className="text-sm font-mono px-3 py-1 rounded-full border border-darkGray bg-darkGray tracking-wide text-lightGray">ACF</span>
            <span className="text-sm font-mono px-3 py-1 rounded-full border border-darkGray bg-darkGray tracking-wide text-lightGray">Optimization</span>
            <span className="text-sm font-mono px-3 py-1 rounded-full border border-darkGray bg-darkGray tracking-wide text-lightGray">Figma</span>
            <span className="text-sm font-mono px-3 py-1 rounded-full border border-darkGray bg-darkGray tracking-wide text-lightGray">Wordfence Security</span>
          </div>
          <p className="mt-4 text-lightGray">
            Developed a WordPress website using Elementor and a custom theme, implementing ACF fields and custom post types.
            Optimized site performance, integrated dynamic forms, and secured the platform with Wordfence.
          </p>
        </div>
        <div className="grid grid-cols-3 grid-rows-2 lg:grid-cols-4 lg:grid-rows-3 gap-4 h-auto lg:h-[500px]">
          <div className="overflow-hidden rounded-3xl bg-darkGray aspect-square col-start-1 row-start-2 lg:col-start-1 lg:row-start-2">
            <div className="flex items-center justify-center h-full">
              <a href="https://boundindia.com" target="_blank" rel="noopener noreferrer" title="Bound India"
                className="group inline-flex items-center gap-1 rounded-full text-black text-sm font-medium shadow-lg">
                <FaLink className='transition-all duration-300 border rounded-full italic text-white bg-black px-1 py-3 w-11 h-11 -mr-4 
                group-hover:-translate-x-2 group-hover:bg-white group-hover:text-black' />
                <BsArrowUpRight className='transition-all duration-300 border rounded-full italic bg-white p-3 w-11 h-11 
                group-hover:translate-x-2 group-hover:bg-black group-hover:text-white group-hover:rotate-45' />
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl bg-[#fff] col-span-2 row-span-2 col-start-2 row-start-1 lg:col-span-2 lg:row-span-2 lg:col-start-3 lg:row-start-1">
            <img src={boundSquare} alt="Bound India" className="rounded-3xl object-cover" />
          </div>
          <div className="overflow-hidden rounded-3xl bg-[#fff] col-start-1 row-start-1 lg:col-start-2 lg:row-start-1">
            <img src={boundLogo} alt="Bound India" className="p-6 rounded-3xl object-cover" />
          </div>
          <div className="hidden lg:block overflow-hidden rounded-3xl bg-darkGray row-span-2 row-start-2">
            <img src={boundRectangle} alt="Bound India" className="rounded-3xl object-cover" />
          </div>
        </div>
      </div>

      {/* Assetz Property */}
      <div className="py-20 grid gap-10 lg:gap-20 lg:grid-cols-[8fr,4fr] items-center grid-flow-row-dense mb-10">
        <div className="order-1 lg:order-2 space-y-8">
          <h5 className="text-3xl font-semibold">Assetz Property</h5>
          <div className="flex flex-wrap gap-2">
            <span className="text-sm font-mono px-3 py-1 rounded-full border border-darkGray bg-darkGray tracking-wide text-lightGray">HTML5</span>
            <span className="text-sm font-mono px-3 py-1 rounded-full border border-darkGray bg-darkGray tracking-wide text-lightGray">CSS3</span>
            <span className="text-sm font-mono px-3 py-1 rounded-full border border-darkGray bg-darkGray tracking-wide text-lightGray">JS/jQuery</span>
            <span className="text-sm font-mono px-3 py-1 rounded-full border border-darkGray bg-darkGray tracking-wide text-lightGray">PHP</span>
            <span className="text-sm font-mono px-3 py-1 rounded-full border border-darkGray bg-darkGray tracking-wide text-lightGray">Laravel</span>
            <span className="text-sm font-mono px-3 py-1 rounded-full border border-darkGray bg-darkGray tracking-wide text-lightGray">MySQL</span>
            <span className="text-sm font-mono px-3 py-1 rounded-full border border-darkGray bg-darkGray tracking-wide text-lightGray">WordPress</span>
            <span className="text-sm font-mono px-3 py-1 rounded-full border border-darkGray bg-darkGray tracking-wide text-lightGray">Bootstrap</span>
            <span className="text-sm font-mono px-3 py-1 rounded-full border border-darkGray bg-darkGray tracking-wide text-lightGray">React</span>
            <span className="text-sm font-mono px-3 py-1 rounded-full border border-darkGray bg-darkGray tracking-wide text-lightGray">Figma</span>
            <span className="text-sm font-mono px-3 py-1 rounded-full border border-darkGray bg-darkGray tracking-wide text-lightGray">Adobe Illustrator</span>
            <span className="text-sm font-mono px-3 py-1 rounded-full border border-darkGray bg-darkGray tracking-wide text-lightGray">KeyCDN</span>
            <span className="text-sm font-mono px-3 py-1 rounded-full border border-darkGray bg-darkGray tracking-wide text-lightGray">BunnyCDN</span>
            <span className="text-sm font-mono px-3 py-1 rounded-full border border-darkGray bg-darkGray tracking-wide text-lightGray">SEO</span>
            <span className="text-sm font-mono px-3 py-1 rounded-full border border-darkGray bg-darkGray tracking-wide text-lightGray">Sucuri Security</span>
          </div>
          <p className="mt-4 text-lightGray">
            The core website is built using Laravel, with several internal project microsites developed using WordPress, Laravel, and React. The frontend stack includes Bootstrap, jQuery,
            and custom HTML/CSS/JavaScript, supported by CDNs like KeyCDN/BunnyCDN, secured with Sucuri, and integrated with Matterport for immersive experiences.
          </p>
        </div>
        <div className="order-2 lg:order-1 grid grid-rows-2 lg:grid-cols-4 lg:grid-rows-3 gap-4 h-auto lg:h-[500px]">
          <div className="overflow-hidden rounded-3xl aspect-square bg-darkGray col-span-2 row-span-2 col-start-2 row-start-1 lg:col-span-2 lg:row-span-2 lg:col-start-2">
            <img src={assetzSquare} alt="Assetz Property" className="rounded-3xl object-cover" />
          </div>
          <div className="overflow-hidden rounded-3xl bg-[#fff] col-start-1 row-start-1 lg:col-start-2 lg:row-start-3">
            <img src={assetzLogo} alt="Assetz Property" className="p-1 rounded-3xl object-cover" />
          </div>
          <div className="overflow-hidden rounded-3xl bg-darkGray col-start-1 row-start-2 lg:col-start-4 lg:row-start-2">
            <div className="flex items-center justify-center h-full">
              <a href="https://www.assetzproperty.com" target="_blank" rel="noopener noreferrer" title="Assetz Property"
                className="group inline-flex items-center gap-1 rounded-full text-black text-sm font-medium shadow-lg">
                <FaLink className='transition-all duration-300 border rounded-full italic text-white bg-black px-1 py-3 w-11 h-11 -mr-4 
                group-hover:-translate-x-2 group-hover:bg-white group-hover:text-black' />
                <BsArrowUpRight className='transition-all duration-300 border rounded-full italic bg-white p-3 w-11 h-11 
                group-hover:translate-x-2 group-hover:bg-black group-hover:text-white group-hover:rotate-45' />
              </a>
            </div>
          </div>
          <div className="hidden lg:block overflow-hidden rounded-3xl bg-darkGray row-span-2 col-start-1 row-start-2">
            <img src={assetzRectangle} alt="Assetz Property" className="rounded-3xl object-cover" />
          </div>
        </div>
      </div>

      {/* Whoosh Car Finance */}
      <div className="grid gap-10 lg:gap-20 lg:grid-cols-[4fr,8fr] items-center mb-10">
        <div className="space-y-8">
          <h5 className="text-3xl font-semibold">Whoosh Car Finance</h5>
          <div className="flex flex-wrap gap-2">
            <span className="text-sm font-mono px-3 py-1 rounded-full border border-darkGray bg-darkGray tracking-wide text-lightGray">HTML5</span>
            <span className="text-sm font-mono px-3 py-1 rounded-full border border-darkGray bg-darkGray tracking-wide text-lightGray">CSS3</span>
            <span className="text-sm font-mono px-3 py-1 rounded-full border border-darkGray bg-darkGray tracking-wide text-lightGray">React</span>
            <span className="text-sm font-mono px-3 py-1 rounded-full border border-darkGray bg-darkGray tracking-wide text-lightGray">Vite</span>
            <span className="text-sm font-mono px-3 py-1 rounded-full border border-darkGray bg-darkGray tracking-wide text-lightGray">Tailwind CSS</span>
            <span className="text-sm font-mono px-3 py-1 rounded-full border border-darkGray bg-darkGray tracking-wide text-lightGray">Filament</span>
            <span className="text-sm font-mono px-3 py-1 rounded-full border border-darkGray bg-darkGray tracking-wide text-lightGray">APIs</span>
            <span className="text-sm font-mono px-3 py-1 rounded-full border border-darkGray bg-darkGray tracking-wide text-lightGray">Git</span>
            <span className="text-sm font-mono px-3 py-1 rounded-full border border-darkGray bg-darkGray tracking-wide text-lightGray">Lovable AI</span>
          </div>
          <p className="mt-4 text-lightGray">
            Built using React + TypeScript (Vite) with a Filament backend, managed through Git, and styled using custom HTML/CSS. The foundation
            was generated via Lovable AI and enhanced with custom features.
          </p>
        </div>
        <div className="grid grid-rows-2 lg:grid-cols-4 lg:grid-rows-3 gap-4 h-auto lg:h-[500px]">
          <div className="overflow-hidden rounded-3xl bg-darkGray aspect-square col-start-1 row-start-2 lg:col-start-1 lg:row-start-2">
            <div className="flex items-center justify-center h-full">
              <a href="https://whooshcarfinance.co.uk" target="_blank" rel="noopener noreferrer" title="Whoosh Car Finance"
                className="group inline-flex items-center gap-1 rounded-full text-black text-sm font-medium shadow-lg">
                <FaLink className='transition-all duration-300 border rounded-full italic text-white bg-black px-1 py-3 w-11 h-11 -mr-4 
                group-hover:-translate-x-2 group-hover:bg-white group-hover:text-black' />
                <BsArrowUpRight className='transition-all duration-300 border rounded-full italic bg-white p-3 w-11 h-11 
                group-hover:translate-x-2 group-hover:bg-black group-hover:text-white group-hover:rotate-45' />
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl bg-darkGray col-span-2 row-span-2 col-start-2 row-start-1 lg:col-span-2 lg:row-span-2">
            <img src={whooshSquare} alt="Whoosh Car Finance" className="rounded-3xl object-cover" />
          </div>
          <div className="overflow-hidden rounded-3xl bg-[#fff] col-start-1 row-start-1 lg:col-start-2 lg:row-start-3">
            <img src={whooshLogo} alt="Whoosh Car Finance" className="overflow-hidden p-1 rounded-3xl object-cover" />
          </div>
          <div className="hidden lg:block overflow-hidden rounded-3xl bg-darkGray row-span-2 col-start-4 row-start-1">
            <img src={whooshRectangle} alt="Whoosh Car Finance" className="overflow-hidden rounded-3xl object-cover" />
          </div>
        </div>
      </div>

      <div className="md:hidden flex justify-center pt-12">
        <Link
          to="/allprojects"
          title="View Projects"
          className="group inline-flex items-center gap-1 rounded-full text-black text-sm font-medium shadow-lg"
        >
          <span
            className="w-60 text-center border rounded-full italic bg-white px-8 py-3 transition-all duration-300 
            group-hover:translate-x-6 group-hover:bg-black group-hover:text-white"
          >
            View All Projects
          </span>

          <BsArrowRight
            className="border rounded-full italic bg-white p-3 w-11 h-11 transition-all duration-300 
            group-hover:-translate-x-6 group-hover:bg-black group-hover:text-white group-hover:-rotate-45"
          />
        </Link>
      </div>
    </section>
  );
}

export default Projects;
