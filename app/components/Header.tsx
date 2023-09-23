import Link from "next/link";
import { SiXdadevelopers } from "react-icons/si";

export const Header = () => {
  return (
    <div className="max-w-screen">
      <nav
        className="text-center w-full p-4 shadow-sm shadow-gray/50 md:h-16 sm:h-10"
        role="navigation"
      >
        <Link
          href="/"
          className="flex align-center justify-center font-serif text-xl text-third font-bold px-auto"
        >
          <SiXdadevelopers className="mt-2 mr-2" />
          <p>Dev-Notes</p>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
