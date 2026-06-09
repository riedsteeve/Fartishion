import { AiOutlineRight } from "react-icons/ai";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiMusicalNotes } from "react-icons/gi";

const links = [
    { id: 1, name: 'Acceuil', href: '/' },
    { id: 2, name: 'Partitions', href: '/' },
    { id: 3, name: 'A propos', href: '/' },
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white shadow rounded-full w-auto mt-7 z-50 mx-auto mt-6">
          <span className="flex items-center gap-2 px-2 text-xl italic font-bold text-purple-600 cursor-pointer">
              <GiMusicalNotes className="text-xl" />
              Fartishion
          </span>

<ul className="hidden md:flex gap-6">
  {links.map((link) => (
    <li key={link.id}>
      <a href={link.href} className="hover:text-purple-600 transition">
        {link.name}
      </a>
    </li>
  ))}
</ul>
          <button className="hidden md:flex items-center gap-2 text-purple-600 border border-purple-600 px-4 py-2 rounded-full hover:bg-purple-600 hover:text-white transition">
              Connexion <AiOutlineRight />
          </button>

          <GiHamburgerMenu className="text-2xl md:hidden cursor-pointer"
              onClick={() => setIsOpen(!isOpen)} />
          {isOpen && (
  <div className="absolute top-20 right-6 bg-white shadow rounded-lg p-4 md:hidden transition">
    <ul className="flex flex-col gap-4">
      {links.map((link) => (
        <li key={link.id}>
          <a href={link.href} className="hover:text-purple-600 transition">
            {link.name}
          </a>
        </li>
      ))}

      <li>
        <button className="flex items-center gap-2 text-purple-600 border border-purple-600 px-4 py-2 rounded-full hover:bg-purple-600 hover:text-white transition">
          Connexion <AiOutlineRight />
        </button>
      </li>
    </ul>
  </div>
)}

      </header>
  );
};

export default Navbar;