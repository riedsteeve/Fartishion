import { BiHeart, BiUniversalAccess, BiBadgeCheck } from "react-icons/bi";

const values = [
    {
        id: 1,
        icon: BiHeart,
        name: "Passion",
        description:
            "La musique est au cœur de tout ce que nous faisons. Chaque fonctionnalité est pensée par des musiciens pour des musiciens.",
    },
    {
        id: 2,
        icon: BiUniversalAccess,
        name: "Accessibilité",
        description:
            "La grande musique appartient à tous. Nous nous engageons à rendre nos partitions accessibles quel que soit votre niveau ou votre budget.",
    },
    {
        id: 3,
        icon: BiBadgeCheck,
        name: "Qualité",
        description:
            "Chaque partition est vérifiée par des professionnels. Nous ne publions que du contenu fiable, précis et d'une qualité irréprochable.",
    },
];

const NosValeurs = () => {
    return (
        <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-center font-pt-serif text-3xl mb-4">
                    Nos valeurs
                </h2>

                <p className="text-center text-gray-600 mb-12">
                    Les principes qui guident chacune de nos décisions et
                    <br />
                    façonnent notre plateforme.
                </p>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
                    {values.map((value) => {
                        const Icon = value.icon;

                        return (
                            <div
                                key={value.id}
                                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-3 "
                            >
                                <div className="w-fit p-3 bg-purple-200 rounded-xl">
                                    <Icon className="text-2xl text-purple-600" />
                                </div>

                                <h3 className="font-semibold text-lg">
                                    {value.name}
                                </h3>

                                <p className="text-gray-600 leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default NosValeurs;