import { LuMusic } from "react-icons/lu";
import { RiWhatsappFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { BsTelephoneInboundFill } from "react-icons/bs";

const links = [
    { id: 1, name: 'Acceuil', href: '/' },
    { id: 2, name: 'Partitions', href: '/' },
    { id: 3, name: 'A propos', href: '/' },
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
    <div className="bg-purple-900 mt-5 p-10 text-white w-full overflow-hidden">

      {/* TOP SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Logo */}
        <div>
          <div className="flex gap-2 items-center mb-3">
            <LuMusic className="bg-purple-400 text-3xl p-1 rounded-sm" />
            <h2 className="text-xl font-pt-serif">Fartishion</h2>
          </div>

          <p className="text-sm opacity-80 max-w-sm">
            La plateforme de référence pour tous les musiciens passionnés.
          </p>

        </div>

        {/* Navigation */}
        <div>
          <h2 className="font-bold mb-3">Navigation</h2>
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.id}>
                <a className="hover:text-purple-300 transition" href={link.href}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Légal */}
        <div>
          <h2 className="font-bold mb-3">Légal</h2>
          <ul className="space-y-2">
            {legals.map((legal) => (
              <li key={legal.id}>
                <a className="hover:text-purple-300 transition" href={legal.href}>
                  {legal.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h2 className="font-bold mb-3">Support</h2>
          <ul className="space-y-2">
            {supports.map((support) => (
              <li key={support.id}>
                <a className="hover:text-purple-300 transition" href={support.href}>
                  {support.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="mt-10 pt-5 border-t border-white/20 flex justify-between items-center">

          {/* droits sous le logo */}
          <p className="text-xs opacity-70 mt-6">
            © 2026 Fartishion - Tous droits réservés
          </p>

        {/* droite = socials */}
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
  );
};

export default Footer;