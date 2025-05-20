import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/courses", label: "Courses" },
  { href: "/contact", label: "Contact" },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="SkillEdge Logo"
            width={70}
            height={70}
            className="w-15 h-15"
          />
        </Link>
        {/* Hamburger menu button for mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu">
          <span
            className={`block h-1 w-6 bg-blue-600 mb-1 transition-all ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}></span>
          <span
            className={`block h-1 w-6 bg-blue-600 mb-1 transition-all ${
              menuOpen ? "opacity-0" : ""
            }`}></span>
          <span
            className={`block h-1 w-6 bg-blue-600 transition-all ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}></span>
        </button>
        {/* Desktop nav */}
        <nav className="space-x-4 hidden md:flex relative">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative px-2 py-1">
              <span
                className={`${
                  pathname === link.href
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700"
                } font-bold`}>
                {link.label}
              </span>
              {pathname === link.href && (
                <span className="absolute left-0 right-0 -bottom-1 h-1 bg-blue-600 rounded"></span>
              )}
            </Link>
          ))}
        </nav>
        {/* Mobile nav */}
        {menuOpen && (
          <nav className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 md:hidden z-50">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="relative px-2 py-1 w-full text-center">
                <span
                  className={`${
                    pathname === link.href
                      ? "text-blue-600 font-semibold"
                      : "text-gray-700"
                  } font-bold`}>
                  {link.label}
                </span>
                {pathname === link.href && (
                  <span className="block mx-auto mt-1 h-1 w-8 bg-blue-600 rounded"></span>
                )}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
