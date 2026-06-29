import { BiMusic } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="relative w-full px-3 sm:px-8 h-auto pt-3 pb-2 sm:pt-4 sm:pb-3 mt-5 rounded">
            <span className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 opacity-20">
                <BiMusic className="text-purple-500 text-4xl" aria-hidden="true" />
            </span>
            <div className="flex flex-col gap-3">
                <p className="text-center bg-linear-to-r from-indigo-400 to-fuchsia-700 bg-clip-text text-transparent text-5xl font-pt-serif font-semibold">
                    Votre univers de partitions <br /> musicales en un clic
                </p>
                <p className="text-center text-gray-500">
                    Découvrez et téléchargez vos partitions préférées avec Fartishion
                </p>
            </div>
            <div className="flex items-center justify-center">
            <Link to="/partitions" className="bg-purple-600 gap-2 flex items-center font-semibold rounded-full px-4 py-2 mt-3 sm:mt-4 text-white hover:bg-transparent hover:border border-purple-600 hover:text-purple-600 transition">
                Découvrez les partitions
                <FaArrowRightLong className="text-xs" />
            </Link>
            </div>

        </div>
    )
}
export default Hero;
