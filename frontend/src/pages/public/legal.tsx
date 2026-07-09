import { Link } from 'react-router-dom'

const Legal = () => {
  return (
    <div className="min-h-screen px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-2xl border border-purple-100 bg-white p-8 shadow-[0_24px_80px_rgba(124,58,237,0.12)] sm:p-10">
        <div className="mb-10 text-center">
          <p className="inline-flex rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
            Projet personnel
          </p>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-purple-900 sm:text-5xl">
            Mentions légales
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600 sm:text-base">
            Ce site est un projet personnel de création et partage de partitions, développé et maintenu par les auteurs ci-dessous.
          </p>
        </div>

        <section className="space-y-8">
          <article className="rounded-3xl border border-purple-100 bg-purple-50 p-7 shadow-sm">
            <h2 className="text-2xl font-semibold text-purple-900">Créateurs</h2>
            <p className="mt-4 text-gray-700 leading-7">Ce projet est réalisé par :</p>
            <ul className="mt-4 space-y-3 text-gray-700">
              <li className="rounded-2xl bg-white px-4 py-3 shadow-sm">Steeve HOUNKPE-SAGBO</li>
              <li className="rounded-2xl bg-white px-4 py-3 shadow-sm">Steeve HOUNKPE-SAGBO</li>
            </ul>
          </article>

          <article className="rounded-3xl border border-purple-100 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-semibold text-purple-900">Informations de contact</h2>
            <div className="mt-4 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-5">
                <p className="text-sm font-semibold text-purple-800">Email de contact</p>
                <p className="mt-3 text-gray-700">fartishion@gmail.com</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5">
                <p className="text-sm font-semibold text-purple-800">Hébergeur</p>
                <p className="mt-3 text-gray-700">Vercel</p>
              </div>
            </div>
          </article>

          <article className="rounded-3xl border border-purple-100 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-semibold text-purple-900">Engagement</h2>
            <p className="mt-4 text-gray-700 leading-7">
              Fartishion est un projet personnel et ne représente pas une entreprise. Le contenu publié vise à partager des partitions et des ressources musicales dans un esprit de collaboration.
            </p>
            <p className="mt-4 text-gray-700 leading-7">
              Les données de contact sont utilisées uniquement pour répondre aux questions liées au projet. Les informations communiquées ne sont ni revendues ni partagées en dehors des stricts besoins de gestion du site.
            </p>
          </article>
        </section>

        <div className="mt-10 flex justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-purple-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-purple-800"
          >
            Retour à l’accueil
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Legal
