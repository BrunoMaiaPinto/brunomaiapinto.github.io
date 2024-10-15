import Link from "next/link";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="sm:grid grid-cols-3 text-center px-10 py-4 items-center border-t border-gray-300 flex flex-col gap-2 z-10 ">
      <ul class="flex gap-4 ">
        <li>
          <Link
            href="https://github.com/BrunoMaiaPinto"
            target="_blank"
            title="GitHub"
          >
            <SiGithub className="h-7 w-7 hover:text-slate-400 transition-colors" />
          </Link>
        </li>

        <li>
          <Link
            href="https://www.linkedin.com/in/brunommpinto/"
            target="_blank"
            title="LinkedIn"
          >
            <SiLinkedin className="h-7 w-7 hover:text-slate-400 transition-colors" />
          </Link>
        </li>

        <li>
          <Link href="mailto:brunommpinto@sapo.pt" title="Contact">
            <SiGmail className="h-7 w-7 hover:text-slate-400 transition-colors" />
          </Link>
        </li>
      </ul>
      <div>
        Copyright &copy; {new Date().getFullYear()} by{" "}
        <Link
          href="https://brunomaiapinto.github.io/"
          className=" hover:text-slate-400 transition-colors"
          target="_blank"
        >
          Bruno Pinto
        </Link>
        . All rights reserved.
      </div>
    </footer>
  );
}
