import { AiOutlineSearch } from "react-icons/ai"

const WelcomeView = () => {
  return (
     <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl px-40 py-20 text-white ">
      
      {/* Section Texte */}
      <div className="space-y-2">
        <h1 className="text-3xl text-purple-900 font-bold">
          Bienvenue, Jean !
        </h1>
        <p className="text-gray-500 font-medium">
          Prêt à découvrir de nouvelles mélodies aujourd'hui ?
        </p>
      </div>
      
      {/* Section Bouton */}
       <div className="flex items-center justify-start md:justify-end mt-4 md:mt-0">
        <button className="flex items-center gap-2 bg-purple-600 text-white font-bold px-5 py-3 rounded-full shadow-sm hover:bg-purple-700 transition active:scale-95">
          <AiOutlineSearch className="text-lg" />
          Explore le catalogue
        </button>
      </div>

    </div>
  )
}

export default WelcomeView