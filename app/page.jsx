import Image from "next/image";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiSass,
  SiTailwindcss,
} from "react-icons/si";
import bg from "@/public/bg.jpg";

export default function Home() {
  return (
    <main>
      <Image
        src={bg}
        fill
        placeholder="blur"
        quality={40}
        className="object-cover object-top opacity-20 grayscale blur-[2px]"
        alt="Laptop coding desk"
      />

      <div className="relative z-10 text-center">
        <h1 className="sm:text-8xl text-6xl mb-10 tracking-tight font-normal">
          Hello there, I&apos;m Bruno!
        </h1>
        <p className="sm:text-4xl text-3xl mb-5">
          Junior Front-End Web Developer
        </p>
        <h2 className="text-2xl">Technical Skills:</h2>
        <div className="flex justify-center gap-6 mt-4">
          <SiHtml5 className="h-10 w-10" title="HTML" />
          <SiCss3 className="h-10 w-10" title="CSS" />
          <SiSass className="h-10 w-10" title="SASS" />
          <SiJavascript className="h-10 w-10" title="JavaScript" />
          <SiReact className="h-10 w-10" title="React" />
          <SiTailwindcss className="h-10 w-10" title="Tailwind CSS" />
        </div>
      </div>
    </main>
  );
}
