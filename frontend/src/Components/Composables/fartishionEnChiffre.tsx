const stats = [
    { id: 1, chiffre: '10k+', description: "Partitions disponibles" },
    { id: 2, chiffre: '45k+', description: "Musiciens inscrits" },
    { id: 3, chiffre: '120k+', description: "Compositeurs référencés" },
    { id: 4, chiffre: '98%', description: "Satisafction utilisateurs" },
]


const FartishionEnChiffre = () => {
    return (
        <div className="mt-20 rounded-4xl p-7">

            <h2 className="text-3xl text-center font-pt-serif" >Fartshion en chifres</h2>

            <p className="text-center mt-7 text-gray-600" >Une communauté musicale en pleine croissance, portée <br /> par la passion du partage.</p>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10 mt-8 px-20">
                {stats.map((stat) => (
                    <div
                        className="bg-purple-100 text-center border border-purple-800 p-8 rounded-3xl w-64 m-auto"
                        key={stat.id}
                    >
                        <h4 className="text-3xl text-purple-800 font-bold" >{stat.chiffre}</h4>
                        <p className="text-purple-950" >{ stat.description }</p>
                    </div>
                ))}
            </div>
            
        </div>
    )
}

export default FartishionEnChiffre