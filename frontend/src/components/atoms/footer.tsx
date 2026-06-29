import { LuMusic } from "react-icons/lu";
import { RiWhatsappFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { BsTelephoneInboundFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const links = [
  { id: 1, name: "Accueil", href: "/" },
  { id: 2, name: "Partitions", href: "/partitions" },
  { id: 3, name: "À propos", href: "/a-propos" },
]

const legals = [
    { id: 1, name: 'Mentions Légales', href: '/' },
    { id: 2, name: 'Politique de confidentialité', href: '/' },
    { id: 3, name: 'Cookies', href: '/' },
]

const supports = [
    { id: 1, name: 'Contact', href: '/' },
    { id: 2, name: 'FAQ', href: '/' },
]

const socials = [
    { id: 1, name: 'Whatsapp',  href: 'tel:+33 06 20 05 77 67 / +33 01 23 45 78', icon: RiWhatsappFill, color: "hover:text-green-500"},
    { id: 2, name: 'Instagram', href: 'https:fartishion.insta.com', icon: AiFillInstagram, color: "hover:text-pink-500"},
    { id: 3, name: 'Téléphone', href: '+33 06 20 05 77 67' , icon: BsTelephoneInboundFill,color: "hover:text-blue-500"},
]


const Footer = () => {
  return (
    <footer className="mt-6 w-full bg-purple-900 px-6 py-10 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <LuMusic className="rounded-sm bg-purple-400 p-1 text-3xl" />
              <h2 className="font-pt-serif text-xl">Fartishion</h2>
            </div>
            <p className="max-w-sm text-sm opacity-80">
              La plateforme de référence pour tous les musiciens passionnés.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-bold">Navigation</h2>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.id}>
                  <Link className="transition hover:text-purple-300" to={link.href}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-3 font-bold">Légal</h2>
            <ul className="space-y-2">
              {legals.map((legal) => (
                <li key={legal.id}>
                  <Link className="transition hover:text-purple-300" to={legal.href}>
                    {legal.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-3 font-bold">Support</h2>
            <ul className="space-y-2">
              {supports.map((support) => (
                <li key={support.id}>
                  <Link className="transition hover:text-purple-300" to={support.href}>
                    {support.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/20 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs opacity-70">
            © 2026 Fartishion - Tous droits réservés
          </p>

          <div className="flex gap-4 text-2xl">
            {socials.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.id}
                  href={social.href}
                  className={`transition ${social.color}`}
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
