import { AiFillEye, AiFillFire } from 'react-icons/ai'

import Riverflows from '../../../../public/images/riverFlows.svg'
import jireh from '../../../../public/images/Jireh.svg'
import psaumecreation from '../../../../public/images/psaume-creation.svg'
import piano from '../../../../public/images/piano-partition.jpg'

import { Link } from 'react-router-dom'

const partitions = [
  { id: 1, title: "Nocturne Op. 9 No. 2", image: piano, type: "Piano", auteur: "Frédéric Chopin", niveau: 3 },
  { id: 2, title: "Canon in D", image: jireh, type: "Violon", auteur: "Johann Pachelbel", niveau: 2 },
  { id: 3, title: "Jeux Interdits", image: psaumecreation, type: "Guitare", auteur: "Anonyme", niveau: 1 },
  { id: 4, title: "Fly Me To The Moon", image: Riverflows, type: "Jazz", auteur: "Bart Howard", niveau: 4 },
]

const TendenceView = () => {
  return (
    <div className=" w-full">
      {/* Titre avec l'icône de feu */}
      <div className="flex items-center gap-2 mb-6 text-indigo-950">
        <AiFillFire className="text-xl text-violet-600" />
        <h2 className="text-2xl font-black tracking-tight">Tendances de la semaine</h2>
      </div>

      {/* Grille des cartes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {partitions.map((partition) => (
          <div key={partition.id} className="group flex flex-col bg-white rounded-2xl overflow-hidden cursor-pointer">
            
            {/* Zone Image + Badge */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100">
              <img 
                src={partition.image} 
                alt={partition.title} 
                className="w-full h-full object-cover transition duration-300 group-hover:scale-105" 
              />
            {/* Badge d'instrument / type */}
<span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-violet-600 text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
  {partition.type} {/* (Note: j'ai remis partition.type au lieu de auteur pour le badge 😉) */}
</span>
            </div>

            {/* Infos sous la carte */}
            <div className="pt-4 pb-2 px-5 flex flex-col flex-1">
              <h3 className="font-extrabold text-slate-900 text-base leading-tight line-clamp-1">
                {partition.title}
              </h3> 
              <p className="text-slate-400 text-sm mt-1 font-medium">
                {partition.auteur}
              </p>

              {/* Barre du bas : Niveau (dots) + Bouton Download */}
              <div className="flex items-center justify-between mt-5">
                {/* Indicateur de niveau à 4 points */}
                <div className="flex gap-1">
                  {[1, 2, 3, 4].map((dot) => (
                    <span 
                      key={dot} 
                      className={`h-2 w-2 rounded-full transition-colors ${
                        dot <= partition.niveau ? 'bg-violet-600' : 'bg-slate-200'
                      }`}
                    />
                  ))}
                </div>

                    
                {/* Bouton vers la partition */}
                <Link to={"/partitions_view"} className=" flex items-center justify-center p-2 font-semibold gap-2 text-slate-400 hover:text-violet-600 hover:bg-violet-50 rounded-full border border-slate-100 shadow-sm transition">
                  <AiFillEye className="text-lg" />
                  Voir la partition
                </Link>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default TendenceView