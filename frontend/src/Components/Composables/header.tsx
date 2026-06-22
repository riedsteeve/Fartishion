import { AiOutlineRight, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiMusicalNotes } from "react-icons/gi";
import { Link } from "react-router-dom";

const links = [
  { id: 1, name: "Accueil", href: "/" },
  { id: 2, name: "Partitions", href: "/partitions" },
  { id: 3, name: "À propos", href: "/a-propos" },
];


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-[60] mx-auto mt-6 w-[95%] max-w-6xl overflow-visible">
      <header className="flex items-center justify-between rounded-full bg-white px-4 py-3 shadow-md sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold italic text-purple-600">
          <GiMusicalNotes className="text-xl" />
          <span>Fartishion</span>
        </Link>

        <ul className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <li key={link.id}>
              <Link to={link.href} className="transition hover:text-purple-600">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <button className="hidden items-center gap-2 rounded-full border border-purple-600 px-4 py-2 text-purple-600 transition hover:bg-purple-600 hover:text-white lg:flex">
          Connexion <AiOutlineRight />
        </button>

        <button
          className="rounded-full p-2 text-2xl text-purple-600 lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Ouvrir le menu"
        >
          {isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </button>
      </header>

      {isOpen && (
        <div className="absolute left-0 right-0 mt-2 top-[calc(100%+0.75rem)] z-[70] origin-top rounded-2xl border border-purple-100 bg-white p-4 shadow-xl animate-[slideDown_0.25s_ease-out] lg:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.href}
                  className="block transition hover:text-purple-600"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}

            <li>
              <button
                className="flex items-center gap-2 rounded-full border border-purple-600 px-4 py-2 text-purple-600 transition hover:bg-purple-600 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Connexion <AiOutlineRight />
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;