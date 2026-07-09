import { useState } from "react"
import { AiOutlineZoomIn, AiOutlineHeart, AiOutlineDownload, AiOutlineCheckCircle } from "react-icons/ai"
import PDFViewer from "../PDFViewer"
import AubeNouvelle from '../../../../public/PDFs/OH HAPPY DAY V.pdf'

 const similaires = [
  { id: 1, title: "Clair de Lune", auteur: "Claude Debussy", niveau: "Intermédiaire" },
  { id: 2, title: "Prélude en do majeur", auteur: "Jean-Sébastien Bach", niveau: "Intermédiaire" },
  { id: 3, title: "Gymnopédie No. 1", auteur: "Erik Satie", niveau: "Débutant" },
]

const Partition_View = () => {
  const [isSaved, setIsSaved] = useState(false)

  return (
    <div className="flex flex-col gap-12 w-full max-w-7xl mx-auto px-4 py-8 min-h-screen">
      
       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
         <div className="lg:col-span-2 flex flex-col bg-white rounded-3xl shadow-sm border border-slate-100 p-6 gap-4">
          {/* Petite barre d'outils supérieure de l'aperçu */}
          <div className="flex justify-between items-center text-sm font-medium text-slate-500 border-b border-slate-100 pb-4">
            <span className="flex items-center gap-2 text-violet-600 font-bold">
              <span className="h-2 w-2 rounded-full bg-violet-600 animate-pulse" />
              Aperçu de la partition
            </span>
            <div className="flex gap-3">
              <button className="flex items-center gap-1.5 hover:text-slate-800 transition px-3 py-1.5 hover:bg-slate-50 rounded-lg">
                <AiOutlineZoomIn className="text-lg" /> Zoom
              </button>
              <button 
                onClick={() => setIsSaved(!isSaved)}
                className={`flex items-center gap-1.5 transition px-3 py-1.5 rounded-lg ${isSaved ? 'text-rose-500 bg-rose-50' : 'hover:text-slate-800 hover:bg-slate-50'}`}
              >
                <AiOutlineHeart className="text-lg" /> {isSaved ? 'Enregistré' : 'Enregistrer'}
              </button>
            </div>
          </div>

          {/* Intégration de ta liseuse PDF ou Image d'aperçu temporaire */}
          <div className="w-full min-h-[600px] rounded-2xl overflow-hidden bg-slate-50 border border-slate-200/60">
             <PDFViewer url={AubeNouvelle} />
            
            {/* Placeholder visuel actuel */}
            <div className="h-full w-full flex items-center justify-center text-slate-400 font-medium">
            Nom de la partition
            </div>
          </div>
        </div>

              

        {/* 2. BLOC DE DROITE : Actions & Détails (Prend 1 colonne sur 3) */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 flex flex-col gap-6">
          <div>
            <span className="text-violet-600 text-xs font-bold tracking-wider uppercase">Partition sélectionnée</span>
            <h1 className="text-2xl font-black text-slate-900 mt-1">Nocturne Op. 9 No. 2</h1>
            <p className="text-slate-400 font-medium text-sm mt-0.5">Frédéric Chopin · Arrangé pour piano solo</p>
          </div>

          {/* Tableau des caractéristiques de la partition */}
          <div className="flex flex-col text-sm border-t border-slate-100 pt-2">
            {[
              { label: "Compositeur", val: "Frédéric Chopin" },
              { label: "Instrument", val: "Piano" },
              { label: "Niveau", val: "Avancé", highlight: true },
              { label: "Format", val: "PDF haute qualité" },
            ].map((item, idx) => (
              <div key={idx} className="flex justify-between py-3 border-b border-slate-50 font-medium">
                <span className="text-slate-400">{item.label}</span>
                <span className={item.highlight ? "text-violet-600 font-bold" : "text-slate-800 font-semibold"}>{item.val}</span>
              </div>
            ))}
          </div>

          {/* Les boutons d'action d'achat / consultation */}
          <div className="flex flex-col gap-3 mt-2">
            <button className="w-full flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-md shadow-violet-200 transition active:scale-[0.98]">
              <AiOutlineDownload className="text-xl" />
              Télécharger la partition
            </button>
           
          </div>

          {/* Liste à puces de réassurance */}
          <div className="flex flex-col gap-2.5 text-xs text-slate-500 mt-2 bg-slate-50 p-4 rounded-xl">
            <div className="flex gap-2"><AiOutlineCheckCircle className="text-emerald-500 shrink-0 text-base" /> <span>Aperçu propre et lisible avant téléchargement.</span></div>
            <div className="flex gap-2"><AiOutlineCheckCircle className="text-emerald-500 shrink-0 text-base" /> <span>Téléchargement immédiat pour impression ou travail personnel.</span></div>
          </div>
        </div>
      </div>

      {/* SECTION DU BAS : Partitions similaires */}
      <div className="flex flex-col gap-6 mt-4">
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-xl font-black text-slate-900">Partitions similaires</h2>
            <p className="text-slate-400 text-sm mt-0.5">Explorez d'autres œuvres raffinées pour piano dans le même univers classique.</p>
          </div>
          <button className="text-sm font-bold text-violet-600 hover:text-violet-700 transition">Voir toutes les partitions →</button>
        </div>

        {/* Grille des cartes similaires miniatures */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {similaires.map((item) => (
            <div key={item.id} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-4 group cursor-pointer hover:shadow-md transition">
              {/* Image d'aperçu de la carte miniature */}
              <div className="w-full h-28 bg-slate-50 border border-slate-100 rounded-xl flex flex-col justify-center items-center p-4">
                <div className="w-full h-1 bg-slate-200 rounded-full mb-2 opacity-60" />
                <div className="w-4/5 h-1 bg-slate-200 rounded-full mb-2 opacity-60" />
                <div className="w-2/3 h-1 bg-slate-200 rounded-full opacity-60" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-extrabold text-slate-800 text-base leading-tight group-hover:text-violet-600 transition">{item.title}</h3>
                  <p className="text-slate-400 text-xs font-medium mt-1">{item.auteur} · Piano solo</p>
                </div>
              </div>
              <div className="flex justify-between items-center mt-2 pt-2 border-t border-slate-50">
                <span className="text-[11px] font-bold text-violet-600 bg-violet-50 px-2.5 py-1 rounded-full">{item.niveau}</span>
                <span className="text-xs font-bold text-slate-400 group-hover:text-slate-600 transition">Voir</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Partition_View