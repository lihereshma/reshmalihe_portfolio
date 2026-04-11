import { FaGithub, FaLinkedin, FaCodepen } from "react-icons/fa6";
import { useInView } from "../hooks/useInView";
import LINKS from "../constants/links";

function Contact() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section
      id="contact"
      ref={ref}
      className={`
        py-10
        transition-all duration-700 ease-out relative z-10
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
    >
      <div className="grid gap-20 lg:grid-cols-[6.5fr,5.5fr] items-end grid-flow-row-dense">
        <div className="order-2 lg:order-1">
          <div className="mb-4">
            <h6 className="text-5xl lg:text-7rem font-semibold font-mono">
              <span>Reshma</span>
            </h6>
          </div>

          <div className="flex items-center justify-start gap-32">
            <p className="text-lightGray lg:pl-12">Fron-End <br />Developer</p>
            <h6 className="text-5xl lg:text-7rem font-semibold font-mono">
              <span>Lihe</span>
            </h6>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <h3 className="text-4xl mb-10">... /Contacts ...</h3>

          <div className="bg-black rounded-3xl border border-darkGray p-5 space-y-8">
            <div className="space-y-2">
              <p className="text-white">
                Email:
                <a
                  href={`mailto:${LINKS.email}`} title="Email Me"
                  className="ml-2 text-lightGray hover:text-white transition duration-500"
                >{LINKS.email}</a>
              </p>
              <p className="text-white">
                Phone:
                <a
                  href={`tel:+91${LINKS.phone}`} title="Call Me"
                  className="ml-2 text-lightGray hover:text-white transition duration-500"
                >+91 {LINKS.phone}</a>
              </p>
              <p className="text-white">
                Location:<span className="ml-2 text-lightGray hover:text-white transition duration-500">{LINKS.location}</span>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-start gap-4 mt-4 italic">
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
        </div>
      </div>

      <div className="lg:w-[500px] lg:h-[500px] w-[600px] h-[600px] absolute -bottom-10 -right-[400px] lg:-left-40 border 
      border-darkGray rounded-full -z-10"></div>
    </section>
  );
}

export default Contact;
