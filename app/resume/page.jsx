// const URL = "https://registry.jsonresume.org/BrunoMaiaPinto.json";

export const metadata = { title: "Resume" };

const skills = [
  "HTML / JSX",
  "CSS / SASS / Tailwind CSS",
  "JavaScript",
  "React / Next.js",
];

const education = [
  {
    degree: "Curso Tecnológico de Informática",
    institution: "Escola Secundária João Gonçalves Zarco",
    years: "2004 - 2008",
  },
];

const workExperience = [
  {
    title: "Meter Reader",
    company: "Segurlight, Lda",
    years: "2020 - 2024",
    description: `Prepare the reading service daily and organize trips; Perform readings of meters (residential homes, businesses, etc.) and record values in designated forms or on a computer; Provide information to customers about reading services; Report any detected anomalies to the relevant services; Prepare and submit reading records.`,
  },

  {
    title: "Meter Reader",
    company: "Norleituras Unipessoal Lda.",
    years: "2008 - 2020",
    description: `Prepare the reading service daily and organize trips; Perform readings of meters (residential homes, businesses, etc.) and record values in designated forms or on a computer; Provide information to customers about reading services; Report any detected anomalies to the relevant services; Prepare and submit reading records.`,
  },
];

const languages = [
  { language: "Portuguese", proficiency: "Native Speaker" },
  { language: "English", proficiency: "Fluent" },
];

const Section = function ({ title, children }) {
  return (
    <div className="mt-3">
      <h2 className="text-md text-orange-500 font-semibold uppercase mb-1">
        {title}
      </h2>
      {children}
    </div>
  );
};

const Skills = function () {
  return (
    <ul className="flex gap-1 ml-4">
      {skills.map((skill) => (
        <li
          key={skill}
          className="py-[5px] px-[4px] text-xs text-[#3e6d8e] bg-[#dfeaf1] inline-block rounded"
        >
          {skill}
        </li>
      ))}
    </ul>
  );
};

const Education = function () {
  return (
    <ul className="flex justify-between ml-4">
      {education.map(({ degree, institution, years }) => (
        <>
          <li key={degree}>
            <span className="font-semibold">{degree} </span>
            <span>| {institution}</span>
          </li>
          <li>
            <span className="font-bold">{years}</span>
          </li>
        </>
      ))}
    </ul>
  );
};

const WorkExperience = function () {
  return (
    <div>
      {workExperience.map(({ title, company, years, description }) => (
        <div key={title}>
          <ul className="flex justify-between gap-1 ml-4">
            <li>
              <div>
                <span className="font-semibold">{title}</span>
                <span className="text-sm"> | {company}</span>
              </div>
            </li>
            <li className="font-bold">{years}</li>
          </ul>
          <p className="ml-5 mt-2 text-sm mb-3">{description}</p>
        </div>
      ))}
    </div>
  );
};

const Languages = function () {
  return (
    <ul className="flex gap-8 ml-4">
      {languages.map(({ language, proficiency }) => (
        <li key={language} className="flex flex-col">
          <span className="font-semibold">{language}</span>{" "}
          <span className="text-xs italic">{proficiency}</span>
        </li>
      ))}
    </ul>
  );
};

export default function page() {
  return (
    <div className="max-w-[820px] m-auto text leading-6">
      <div>
        <h1 className="text-4xl font-thin">Bruno Pinto</h1>
        <h2 className="text-xl">
          Looking for an opportunity as Junior Front-End Web Developer
        </h2>
        <span>Porto, PT</span>
      </div>

      <Section title="Skills">
        <Skills />
      </Section>

      <Section title="Education">
        <Education />
      </Section>

      <Section title="Work Experience">
        <WorkExperience />
      </Section>

      <Section title="Languages">
        <Languages>|</Languages>
      </Section>
    </div>
  );
}
