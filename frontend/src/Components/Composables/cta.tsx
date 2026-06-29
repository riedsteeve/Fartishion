import { FaArrowRightLong } from "react-icons/fa6";
import bgImage from "../../../public/images/cta-image.png";
import { Link } from "react-router-dom";

const CTA = () => {
    return (
        <div className="px-4 py-16 flex justify-center">
            <div
                className="relative overflow-hidden grid gap-8 rounded-3xl text-white max-w-4xl w-full px-8 py-16"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >   {/* overlay */}
                 <div className="absolute inset-0 bg-black/70 z-10"></div>
                
                 <div className="relative z-20 grid gap-8">
                    <h1 className="text-4xl font-pt-serif text-center">
                        Rejoignez la communauté Fartishion
                    </h1>

                    <p className="text-center text-white/90">
                        Des milliers de musiciens font déjà confiance à Fartishion. <br />
                        Inscrivez-vous gratuitement et explorez notre catalogue dès aujourd’hui.
                    </p>

                    <div className="flex justify-center">
                        <Link to={"/signup"} className="flex items-center gap-2 rounded-full bg-white px-5 py-3 text-purple-600 font-semibold transition hover:bg-transparent hover:border border-white hover:text-white cursor-pointer">
                            Découvrez les partitions
                            <FaArrowRightLong className="text-xs" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CTA;