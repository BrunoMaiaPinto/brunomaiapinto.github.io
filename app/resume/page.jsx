export const metadata = { title: "Resume" };

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

      {/* Skills */}
      <div className="mt-3">
        <h2 className="text-md text-orange-500 font-semibold uppercase mb-1">
          Skills
        </h2>
        <ul className="flex gap-1 ml-4">
          <li className="py-[5px] px-[4px] text-xs text-[#3e6d8e] bg-[#dfeaf1] inline-block rounded">
            HTML / JSX
          </li>
          <li className="py-[5px] px-[4px] text-xs text-[#3e6d8e] bg-[#dfeaf1] inline-block rounded">
            CSS / SASS / Tailwind CSS
          </li>
          <li className="py-[5px] px-[4px] text-xs text-[#3e6d8e] bg-[#dfeaf1] inline-block rounded">
            JavaScript
          </li>
          <li className="py-[5px] px-[4px] text-xs text-[#3e6d8e] bg-[#dfeaf1] inline-block rounded">
            React / Next.js
          </li>
        </ul>
      </div>

      {/* Education */}
      <div className="mt-3">
        <h2 className="text-md text-orange-500 font-semibold uppercase mb-1">
          Education
        </h2>
        <ul className="flex justify-between ml-4">
          <li>
            <span className="font-semibold">
              Curso Tecnológico de Informática
            </span>{" "}
            <span>| Escola Secundária João Gonçalves Zarco</span>
          </li>
          <li className="font-bold">2004 - 2008</li>
        </ul>
      </div>

      {/* Work Experience */}
      <div className="mt-3">
        <h2 className="text-md text-orange-500 font-semibold uppercase mb-1">
          Work Experience
        </h2>
        <ul className="flex justify-between gap-1 ml-4">
          <li>
            <div>
              <span className="font-semibold">Meter Reader</span>{" "}
              <span className="text-sm"> | Segurlight, Lda</span>
            </div>
          </li>
          <li className="font-bold">2020 - 2024</li>
        </ul>
        <p className="ml-5 mt-2 text-sm">
          Prepare the reading service daily and organize trips; Perform readings
          of meters (residential homes, businesses, etc.) and record values in
          designated forms or on a computer; Provide information to customers
          about reading services; Report any detected anomalies to the relevant
          services; Prepare and submit reading records.
        </p>
        <ul className="flex justify-between gap-1 ml-4 mt-3">
          <li>
            <div>
              <span className="font-semibold">Meter Reader</span>{" "}
              <span className="text-sm">| Norleituras Unipessoal Lda.</span>
            </div>
          </li>
          <li className="font-bold">2008 - 2020</li>
        </ul>
        <p className="ml-5 mt-2 text-sm">
          Prepare the reading service daily and organize trips; Perform readings
          of meters (residential homes, businesses, etc.) and record values in
          designated forms or on a computer; Provide information to customers
          about reading services; Report any detected anomalies to the relevant
          services; Prepare and submit reading records.
        </p>
      </div>

      {/* Lanaguase */}
      <div className="mt-3">
        <h2 className="text-md text-orange-500 font-semibold uppercase mb-1">
          Languages
        </h2>
        <ul className="flex gap-1 ml-4">
          <li>
            <span className="font-semibold">Portuguese</span>{" "}
            <span className="text-xs">Native Speaker</span>
          </li>
          |
          <li>
            <span className="font-semibold">English</span>{" "}
            <span className="text-xs">Fluent</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
