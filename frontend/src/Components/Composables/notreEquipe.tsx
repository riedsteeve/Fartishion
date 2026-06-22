import SteevenPic from '../../../public/images/Steeven_pic.png'
import SteevePic from '../../../public/images/Steeve_pic.png'

const teamInfos = [
    {
        id: 1,
        picture: SteevenPic,
        names: "Steeven HOUNKPE-SAGBO",
        role: "Co-fondateur",
        description:
            "Pianiste, choriste et développeur, il est cofondateur de Fartishion. Passionné de musique, il a imaginé la plateforme pour la rendre accessible au plus grand nombre.",
    },
    {
        id: 2,
        picture: SteevePic,
        names: "Steeve HOUNKPE-SAGBO",
        role: "Co-fondateur",
        description:
            "Guitariste amateur, batteur et choriste, il est également cofondateur de Fartishion. Développeur passionné, il construit et fait évoluer la partie technique de la plateforme.",
    },
]

const NotreEquipe = () => {
    return (
        <section className="py-10 px-4">
            <div className="max-w-6xl mx-auto">

                <div className="text-center mb-12">
                    <h1 className="text-3xl font-pt-serif">
                        Notre équipe
                    </h1>

                    <p className="text-gray-600 mt-3">
                        Des musiciens et passionnés de technologie unis par l’amour de la musique.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {teamInfos.map((team) => (
                        <div
                            key={team.id}
                            className="group bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center gap-4 transition-all duration-300 hover:bg-purple-600 hover:-translate-y-2"
                        >
                            <img
                                className="h-40 w-40 rounded-full object-cover border-4 border-purple-200 group-hover:border-white transition"
                                src={team.picture}
                                alt={team.names}
                            />

                            <div>
                                <h3 className="font-semibold text-lg mb-2 group-hover:text-white transition">
                                    {team.names}
                                </h3>

                                <span className="text-purple-600 text-sm bg-purple-100 px-4 py-2 rounded-full font-semibold group-hover:bg-white group-hover:text-purple-700 transition">
                                    {team.role}
                                </span>
                            </div>

                            <p className="text-gray-500 text-sm group-hover:text-white/90 transition">
                                {team.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default NotreEquipe