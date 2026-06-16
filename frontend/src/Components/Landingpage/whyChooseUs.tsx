const adventage = [
    { id: 1, title: 'Catalogue immense', adventage: 'Accédez à des milliers de partitions couvrant tous les genres musicaux : classique, jazz, pop, baroque et bien plus encore.' },
    { id: 2, title: 'Téléchargement instantané', adventage: 'Obtenez vos partitions en PDF haute qualité en un seul clic. Imprimez-les ou consultez-les directement sur votre tablette.' },
    { id: 3, title: 'Recherche avancée', adventage: 'Filtrez par instrument, niveau, compositeur ou genre. Trouvez exactement ce dont vous avez besoin en quelques secondes.' },
    { id: 4, title: 'Tous les niveaux', adventage: 'Des partitions adaptées aux débutants comme aux musiciens avancés, soigneusement classées par catégories.' },
    { id: 5, title: 'Contenu de confiance', adventage: 'Toutes nos partitions sont vérifiées et validées par des musiciens professionnels pour garantir exactitude et qualité.' },
    { id: 6, title: 'Stockage centralisé', adventage: "Toutes vos partitions sont sauvegardées sur un compte unique, accessibles sur écran ou imprimables à tout moment sans s'encombrer de classeurs." },
]

const WhyChooseUs = () => {
    return (
        <div className=" text-center px-4 w-full max-w-7xl mx-auto mt-15">
            <h3 className="text-2xl font-semibold font-pt-serif">
                 Pourquoi choisir Fartishion
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white shadow-2xl h-20">

                </div>
            </div>
        </div>
    )
}
export default WhyChooseUs