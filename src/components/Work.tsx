import { useInView } from "../hooks/useInView";

type Job = {
  period: string;
  company: string;
  role: string;
};

const jobs: Job[] = [
  {
    period: "Aug 2021 - Present",
    company: "Infozzle Software Solutions Pvt. Ltd.",
    role: "Senior Front-End Developer",
  },
  {
    period: "Oct 2020 - Jul 2021",
    company: "Perfect Web Solutions",
    role: "Junior Web Developer",
  },
  {
    period: "Jan 2020 - Apr 2020",
    company: "Axioned",
    role: "Trainee Web Developer",
  },
];

const parseDate = (str: string) => {
  if (str.toLowerCase() === "present") return new Date();
  return new Date(str + " 01");
};

const calculateTotalExperience = (jobs: Job[]) => {
  let totalMonths = 0;

  jobs.forEach((job) => {
    const [startStr, endStr] = job.period.split(" - ");
    const start = parseDate(startStr);
    const end = parseDate(endStr);

    const years = end.getFullYear() - start.getFullYear();
    const months = end.getMonth() - start.getMonth();

    totalMonths += years * 12 + months;
  });

  const totalYears = Math.floor(totalMonths / 12);
  const remainingMonths = totalMonths % 12;

  return { totalYears, remainingMonths };
};

function Work() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const { totalYears, remainingMonths } = calculateTotalExperience(jobs);

  return (
    <section
      id="work"
      ref={ref}
      className={`
        pt-16 lg:pt-24
        transition-all duration-700 ease-out
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h3 className="text-right text-5xl lg:text-7rem font-semibold font-mono">Work</h3>
        </div>

        <div className="overflow-hidden border-y border-darkGray">
          {jobs.map((job, index) => (
            <div
              key={job.company}
              className={`grid grid-cols-1 md:grid-cols-[0.9fr,2fr] gap-4 md:gap-8 px-5 md:px-8 py-5 md:py-10 items-center ${index !== jobs.length - 1
                ? "border-b border-darkGray"
                : ""
                }`}
            >
              <div>
                <p className="font-medium text-lightGray">{job.period}</p>
              </div>

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <p className="font-semibold">{job.company}</p>
                <p className="font-mono text-lightGray md:text-right">{job.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex justify-end">
          <p className="text-lightGray">
            Work experience <br />
            <span className="text-white italic">
              {totalYears} years {remainingMonths} months
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Work;
