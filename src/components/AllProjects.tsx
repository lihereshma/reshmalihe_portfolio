import { BsArrowUpRight } from "react-icons/bs";
import { FaLink } from "react-icons/fa6";
// import { useInView } from "../hooks/useInView";
import boundLogo from "../assets/bound-india-logo.png";
import boundSquare from "../assets/bound-square.png";
// import boundRectangle from "../assets/bound-rectangle.png";
import assetzLogo from "../assets/assetz-property-logo.png";
import assetzSquare from "../assets/assetz-square.png";
// import assetzRectangle from "../assets/assetz-rectangle.png";
import whooshLogo from "../assets/whoosh-logo.png";
import whooshSquare from "../assets/whoosh-square.png";
// import whooshRectangle from "../assets/whoosh-rectangle.png";
import shibuiSquare from "../assets/66shibui-square.png";
import shibuiLogo from "../assets/shibui-logo.webp";
// import shibuiRectangle from "../assets/66shibui-square.png";
import sorasakiSquare from "../assets/sorasaki-square.png";
import sorasakiLogo from "../assets/sorasaki-logo.webp";
// import sorasakiRectangle from "../assets/sorasaki-square.png";
import gitsSquare from "../assets/gits-square.png";
import gitsLogo from "../assets/gits-logo.jpg";
// import gitsRectangle from "../assets/gits-rectangle.png";
import luxehouseSquare from "../assets/luxehouse-square.png";
import luxehouseLogo from "../assets/luxehouse-logo.webp";
// import luxehouseRectangle from "../assets/luxehouse-rectangle.png";
import reformSquare from "../assets/reform-square.png";
import reformLogo from "../assets/reform-logo.webp";
// import reformRectangle from "../assets/reform-rectangle.png";
import specialistmatsSquare from "../assets/specialistmats-square.png";
import specialistmatsLogo from "../assets/specialistmats-logo.webp";
// import specialistmatsRectangle from "../assets/specialistmats-rectangle.png";
import ulezSquare from "../assets/ulez-square.png";
import ulezLogo from "../assets/ulez-logo.jpg";
// import ulezRectangle from "../assets/ulez-rectangle.png";
import cuncrSquare from "../assets/cuncr-square.png";
import cuncrLogo from "../assets/cuncr-logo.png";
// import cuncrRectangle from "../assets/cuncr-rectangle.png";
type ProjectLayout = "default" | "reversed";

type Project = {
    name: string;
    tags: string[];
    description: string;
    logo: string;
    square: string;
    // rectangle: string;
    link: string;
    layout: ProjectLayout;
};

function AllProjects() {
    // const { ref, inView } = useInView<HTMLDivElement>();

    const projects: Project[] = [
        {
            name: "Bound India",
            tags: [
                "HTML5",
                "CSS3",
                "JS/jQuery",
                "PHP",
                "MySQL",
                "WordPress",
                "Elementor",
                "Custom Theme",
                "Responsive",
                "CPT",
                "ACF",
                "Optimization",
                "Figma",
                "Wordfence Security",
            ],
            description:
                "Developed a WordPress website using Elementor and a custom theme, implementing ACF fields and custom post types. Optimized site performance, integrated dynamic forms, and secured the platform with Wordfence.",
            logo: boundLogo,
            square: boundSquare,
            link: "https://boundindia.com",
            layout: "default",
        },
        {
            name: "Assetz Property",
            tags: [
                "HTML5",
                "CSS3",
                "JS/jQuery",
                "PHP",
                "Laravel",
                "MySQL",
                "WordPress",
                "Bootstrap",
                "React",
                "Figma",
                "Adobe Illustrator",
                "KeyCDN",
                "BunnyCDN",
                "SEO",
                "Sucuri Security",
            ],
            description:
                "The core website is built using Laravel, with several internal project microsites developed using WordPress, Laravel, and React. The frontend stack includes Bootstrap, jQuery, and custom HTML/CSS/JavaScript, supported by CDNs like KeyCDN/BunnyCDN, secured with Sucuri, and integrated with Matterport for immersive experiences.",
            logo: assetzLogo,
            square: assetzSquare,
            link: "https://www.assetzproperty.com",
            layout: "reversed",
        },
        {
            name: "Whoosh Car Finance",
            tags: [
                "HTML5",
                "CSS3",
                "React",
                "Vite",
                "Tailwind CSS",
                "Filament",
                "APIs",
                "Git",
                "Lovable AI",
            ],
            description:
                "Built using React + TypeScript (Vite) with a Filament backend, managed through Git, and styled using custom HTML/CSS. The foundation was generated via Lovable AI and enhanced with custom features.",
            logo: whooshLogo,
            square: whooshSquare,
            link: "https://whooshcarfinance.co.uk",
            layout: "default",
        },
        {
            name: "66 & Shibui",
            tags: [
                "HTML5",
                "CSS3",
                "JS/jQuery",
                "PHP",
                "Laravel",
                "MySQL",
                "WordPress",
                "Bootstrap",
                "React",
                "Figma",
                "Adobe Illustrator",
                "KeyCDN",
                "BunnyCDN",
                "SEO",
                "Sucuri Security",
            ],
            description:
                "The core website is built using Laravel, with several internal project microsites developed using WordPress, Laravel, and React. The frontend stack includes Bootstrap, jQuery, and custom HTML/CSS/JavaScript, supported by CDNs like KeyCDN/BunnyCDN, secured with Sucuri, and integrated with Matterport for immersive experiences.",
            logo: shibuiLogo,
            square: shibuiSquare,
            link: "https://www.assetzproperty.com/66andshibui/",
            layout: "reversed",
        },
        {
            name: "Sora & Saki",
            tags: [
                "HTML5",
                "CSS3",
                "React",
                "Vite",
                "Tailwind CSS",
                "Filament",
                "APIs",
                "Git",
                "Lovable AI",
            ],
            description:
                "Built using React + TypeScript (Vite) with a Filament backend, managed through Git, and styled using custom HTML/CSS. The foundation was generated via Lovable AI and enhanced with custom features.",
            logo: sorasakiLogo,
            square: sorasakiSquare,
            link: "https://www.assetzproperty.com/soraandsaki/",
            layout: "default",
        },
        {
            name: "Gits Food",
            tags: [
                "HTML5",
                "CSS3",
                "JS/jQuery",
                "PHP",
                "Laravel",
                "MySQL",
                "WordPress",
                "Bootstrap",
                "React",
                "Figma",
                "Adobe Illustrator",
                "KeyCDN",
                "BunnyCDN",
                "SEO",
                "Sucuri Security",
            ],
            description:
                "The core website is built using Laravel, with several internal project microsites developed using WordPress, Laravel, and React. The frontend stack includes Bootstrap, jQuery, and custom HTML/CSS/JavaScript, supported by CDNs like KeyCDN/BunnyCDN, secured with Sucuri, and integrated with Matterport for immersive experiences.",
            logo: gitsLogo,
            square: gitsSquare,
            link: "https://www.gitsfood.com/",
            layout: "reversed",
        },
        {
            name: "The Luxe House DR",
            tags: [
                "HTML5",
                "CSS3",
                "React",
                "Vite",
                "Tailwind CSS",
                "Filament",
                "APIs",
                "Git",
                "Lovable AI",
            ],
            description:
                "Built using React + TypeScript (Vite) with a Filament backend, managed through Git, and styled using custom HTML/CSS. The foundation was generated via Lovable AI and enhanced with custom features.",
            logo: luxehouseLogo,
            square: luxehouseSquare,
            link: "https://theluxehousedr.com/",
            layout: "default",
        },
        {
            name: "ULEZprosperity",
            tags: [
                "HTML5",
                "CSS3",
                "JS/jQuery",
                "PHP",
                "Laravel",
                "MySQL",
                "WordPress",
                "Bootstrap",
                "React",
                "Figma",
                "Adobe Illustrator",
                "KeyCDN",
                "BunnyCDN",
                "SEO",
                "Sucuri Security",
            ],
            description:
                "The core website is built using Laravel, with several internal project microsites developed using WordPress, Laravel, and React. The frontend stack includes Bootstrap, jQuery, and custom HTML/CSS/JavaScript, supported by CDNs like KeyCDN/BunnyCDN, secured with Sucuri, and integrated with Matterport for immersive experiences.",
            logo: ulezLogo,
            square: ulezSquare,
            link: "https://www.ulezprosperity.com/",
            layout: "reversed",
        },
        {
            name: "CUNCR",
            tags: [
                "HTML5",
                "CSS3",
                "React",
                "Vite",
                "Tailwind CSS",
                "Filament",
                "APIs",
                "Git",
                "Lovable AI",
            ],
            description:
                "Built using React + TypeScript (Vite) with a Filament backend, managed through Git, and styled using custom HTML/CSS. The foundation was generated via Lovable AI and enhanced with custom features.",
            logo: cuncrLogo,
            square: cuncrSquare,
            link: "https://cuncr.org/",
            layout: "default",
        },
        {
            name: "Reform Social & Grill",
            tags: [
                "HTML5",
                "CSS3",
                "JS/jQuery",
                "PHP",
                "Laravel",
                "MySQL",
                "WordPress",
                "Bootstrap",
                "React",
                "Figma",
                "Adobe Illustrator",
                "KeyCDN",
                "BunnyCDN",
                "SEO",
                "Sucuri Security",
            ],
            description:
                "The core website is built using Laravel, with several internal project microsites developed using WordPress, Laravel, and React. The frontend stack includes Bootstrap, jQuery, and custom HTML/CSS/JavaScript, supported by CDNs like KeyCDN/BunnyCDN, secured with Sucuri, and integrated with Matterport for immersive experiences.",
            logo: reformLogo,
            square: reformSquare,
            link: "https://reformsocialgrill.co.uk/",
            layout: "reversed",
        },
        {
            name: "Specialistmats",
            tags: [
                "HTML5",
                "CSS3",
                "React",
                "Vite",
                "Tailwind CSS",
                "Filament",
                "APIs",
                "Git",
                "Lovable AI",
            ],
            description:
                "Built using React + TypeScript (Vite) with a Filament backend, managed through Git, and styled using custom HTML/CSS. The foundation was generated via Lovable AI and enhanced with custom features.",
            logo: specialistmatsLogo,
            square: specialistmatsSquare,
            link: "https://www.specialistmats.co.uk/",
            layout: "default",
        },
    ];

    return (
        <div className="min-h-screen bg-black text-white pt-40">
            <section
                // ref={ref}
                className="relative">
                <div className="lg:w-[800px] lg:h-[800px] w-[600px] h-[600px] absolute top-10 -right-[400px] border border-darkGray rounded-full -z-10"></div>

                <div className="mb-20 text-center">
                    <h3 className="text-5xl lg:text-7rem font-semibold font-mono">All Projects</h3>
                </div>

                <div className="mb-20 space-y-16">
                    {projects.map((project, index) => {
                        const isReversed = project.layout === "reversed";

                        return (
                            <div
                                key={index}
                                className={`grid gap-10 lg:gap-20 relative
          transition-all duration-700 ${isReversed
                                        ? "py-16 lg:grid-cols-[6fr,6fr] items-center grid-flow-row-dense"
                                        : "lg:grid-cols-[6fr,6fr] items-center"
                                    }`}
                            >
                                {!isReversed && (
                                    <div className="space-y-8">
                                        <h5 className="text-3xl font-semibold">{project.name}</h5>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag, i) => (
                                                <span
                                                    key={i}
                                                    className="text-sm font-mono px-3 py-1 rounded-full border border-darkGray bg-darkGray tracking-wide text-lightGray"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <p className="mt-4 text-lightGray">
                                            {project.description}
                                        </p>
                                    </div>
                                )}

                                <div
                                    className={`grid grid-cols-3 grid-rows-2 gap-4 h-auto ${isReversed ? "order-2 lg:order-1" : ""
                                        }`}
                                >
                                    <div className="overflow-hidden rounded-3xl bg-darkGray aspect-square col-start-1 row-start-2">
                                        <div className="flex items-center justify-center h-full">
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                title={project.name}
                                                className="group inline-flex items-center gap-1 rounded-full text-black text-sm font-medium shadow-lg"
                                            >
                                                <FaLink className="transition-all duration-300 border rounded-full italic text-white bg-black px-1 py-3 w-11 h-11 -mr-4 group-hover:-translate-x-2 group-hover:bg-white group-hover:text-black" />
                                                <BsArrowUpRight className="transition-all duration-300 border rounded-full italic bg-white p-3 w-11 h-11 group-hover:translate-x-2 group-hover:bg-black group-hover:text-white group-hover:rotate-45" />
                                            </a>
                                        </div>
                                    </div>

                                    <div className="overflow-hidden rounded-3xl bg-[#fff] col-span-2 row-span-2 col-start-2 row-start-1">
                                        <img
                                            src={project.square}
                                            alt={project.name}
                                            className="rounded-3xl object-cover w-full h-full"
                                        />
                                    </div>

                                    <div className="overflow-hidden rounded-3xl bg-[#fff] col-start-1 row-start-1 flex items-center justify-center">
                                        <img
                                            src={project.logo}
                                            alt={project.name}
                                            className="p-6 rounded-3xl object-cover h-auto w-full"
                                        />
                                    </div>

                                    
                                </div>

                                {isReversed && (
                                    <div className="order-1 lg:order-2 space-y-8">
                                        <h5 className="text-3xl font-semibold">{project.name}</h5>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag, i) => (
                                                <span
                                                    key={i}
                                                    className="text-sm font-mono px-3 py-1 rounded-full border border-darkGray bg-darkGray tracking-wide text-lightGray"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <p className="mt-4 text-lightGray">
                                            {project.description}
                                        </p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}

export default AllProjects;
