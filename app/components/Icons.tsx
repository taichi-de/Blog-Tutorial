import Link from "next/link";
import { FaInstagramSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";

export default function IconIcons() {
  return (
    <div className="flex items-center justify-center w-full my-2 text-center">
      <Link
        href="https://www.instagram.com/"
        target="_blank"
        className="mr-3 bg-transparent text-third/70 hover:text-third"
      >
        <FaInstagramSquare className="w-7 h-7" />
      </Link>
      <Link
        href="https://github.com/"
        target="_blank"
        className="mr-3 bg-transparent text-third/70 hover:text-third"
      >
        <FaGithubSquare className="w-7 h-7" />
      </Link>
      <Link
        href="https://www.linkedin.com/"
        target="_blank"
        className="bg-transparent text-third/70 hover:text-third"
      >
        <FaLinkedin className="w-7 h-7" />
      </Link>
    </div>
  );
}
