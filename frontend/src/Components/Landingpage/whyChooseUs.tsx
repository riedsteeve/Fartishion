import { GrCatalog } from "react-icons/gr";
import { FiDownload } from "react-icons/fi";
import { FaFilter } from "react-icons/fa";
import { SiLevelsdotfyi } from "react-icons/si";
import { MdOutlineSecurity } from "react-icons/md";
import { FaCloudArrowUp } from "react-icons/fa6";

const adventages = [
    { id: 1, title: 'Catalogue immense', adventage: 'Accédez à des milliers de partitions couvrant tous les genres musicaux : classique, jazz, pop, baroque et bien plus encore.', icon:GrCatalog},
    { id: 2, title: 'Téléchargement instantané', adventage: 'Obtenez vos partitions en PDF haute qualité en un seul clic. Imprimez-les ou consultez-les directement sur votre tablette.', icon:FiDownload },
    { id: 3, title: 'Recherche avancée', adventage: 'Filtrez par instrument, niveau, compositeur ou genre. Trouvez exactement ce dont vous avez besoin en quelques secondes.', icon:FaFilter },
    { id: 4, title: 'Tous les niveaux', adventage: 'Des partitions adaptées aux débutants comme aux musiciens avancés, soigneusement classées par catégories.', icon:SiLevelsdotfyi },
    { id: 5, title: 'Contenu de confiance', adventage: 'Toutes nos partitions sont vérifiées et validées par des musiciens professionnels pour garantir exactitude et qualité.', icon:MdOutlineSecurity },
    { id: 6, title: 'Stockage centralisé', adventage: "Toutes vos partitions sont sauvegardées sur un compte unique, accessibles sur écran ou imprimables à tout moment sans s'encombrer de classeurs.", icon:FaCloudArrowUp },
]

const WhyChooseUs = () => {
    return (
        <div className=" text-center px-4 w-full max-w-7xl mx-auto mt-15 mb-15">
            <h3 className="text-2xl font-semibold font-pt-serif">
                 Pourquoi choisir Fartishion
            </h3>

            <p className="mt-2 text-gray-700">Accédez instantanément et totalement gratuitement à un catalogue infini de partitions, <br /> à consulter ou imprimer librement sans débourser un centime.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {adventages.map((adventage) => {
                    const Icon = adventage.icon;
                
                    return (
                        <div
                            key={adventage.id}
                            className="bg-white rounded-2xl shadow h-auto p-7 text-left hover:translate-y-2 transition-all hover:border border-purple-700"
                        >
                            <div className="">
                                <div className="flex gap-2 items-center">
                                     <Icon className="text-purple-500 text-2xl animate-bounce"/>
                                <h4 className=" font-bold text-purple-500">{adventage.title}</h4>
                               </div>
                                <p className="mt-3" >{adventage.adventage}</p>
                            </div>
                       
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default WhyChooseUs