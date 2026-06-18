import pianoPlayer from '../../../public/images/pianoPlayer.jpg'
import { BiMusic } from 'react-icons/bi'

const OurMission = () => {
    return (
        <div className="grid mt-30 px-4 max-w-7xl mx-auto lg:grid-cols-2 gap-11 items-center">

            {/* Section Texte */}
            <div className="space-y-6">
                <div className="flex items-center gap-2 animate-pulse">
                     <div className="w-4 h-4 rounded-full border-2 border-purple-600 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                    </div>
                    <h4 className="text-purple-700 font-semibold text-sm uppercase tracking-wider">
                        Notre mission
                    </h4>
                </div>

                <h2 className="text-4xl font-pt-serif font-bold text-gray-950">
                    Démocratiser la musique <br /> classique et contemporaine
                </h2>

                <p className="text-gray-600 leading-relaxed">
                    Fondée en 2022 par une équipe de musiciens et de passionnés de technologie,
                    Fartishion a pour ambition de créer la plus grande bibliothèque numérique
                    de partitions musicales de langue française.
                </p>

                <p className="text-gray-600 leading-relaxed">
                    Nous croyons que la musique transcende les frontières et que chaque
                    musicien — <span className="font-bold text-purple-600">débutant</span> ou{" "}
                    <span className="font-bold text-purple-600">virtuose</span> — mérite
                    d'avoir accès à des partitions fiables, précises et d'une qualité
                    irréprochable.
                </p>

                <p className="text-gray-600 leading-relaxed">
                    Chaque partition sur notre plateforme est soigneusement vérifiée par des
                    musiciens professionnels pour garantir une expérience optimale lors de
                    vos répétitions et performances.
                </p>
            </div>

            {/* Section Image & Badge */}
            <div className="relative">
                <img
                    className="w-full h-90 object-cover rounded-4xl shadow-md"
                    src={pianoPlayer}
                    alt="Pianiste"
                />

                {/* Badge flottant avec alignement Flexbox horizontal */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md px-5 py-4 rounded-2xl shadow-xl flex items-center gap-4">
                    
                    {/* Conteneur de l'icône de musique */}
                    <div className="bg-purple-100 p-3 rounded-xl text-purple-700 flex items-center justify-center">
                        <BiMusic className="w-6 h-6" />
                    </div>

                    {/* Bloc de texte à droite de l'icône */}
                    <div className="flex flex-col justify-center">
                        <p className="text-xs text-gray-400 font-medium mb-0.5">
                            Partitions disponibles
                        </p>
                        <p className="text-2xl font-extrabold text-gray-900 leading-none">
                            10 000+
                        </p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default OurMission