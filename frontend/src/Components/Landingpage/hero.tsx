import { BiMusic } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";
const Hero = () => {
    return (
        <div className="w-full px-8 h-auto py-4 mt-5 rounded">
            <span>
                <BiMusic className="text-purple-500 text-4xl" />
            </span>
            <div className="flex flex-col gap-3">
                <p className="text-center bg-gradient-to-r from-indigo-400 to-fuchsia-700 bg-clip-text text-transparent text-4xl font-pt-serif font-semibold">
                    Votre univers de partitions <br /> musicales en un clic
                </p>
                <p className="text-center text-gray-500">
                    Découvrez et téléchargez vos partitions préférées avec Fartishion
                </p>
            </div>
            <div className="flex items-center justify-center ">
            <button className="bg-purple-600 gap-2 flex items-center font-semibold rounded-full px-4 py-2 mt-5 text-white hover:bg-transparent hover:border border-purple-600 hover:text-purple-600 transition">
                Découvrez les partitions
                <FaArrowRightLong className="text-xs" />
            </button>
            </div>

        </div>
    )
}
export default Hero;