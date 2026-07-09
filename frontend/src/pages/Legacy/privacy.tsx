import { Link } from 'react-router-dom'

const Privacy = () => {
  return (
    <div className="min-h-screen px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-2xl border border-purple-100 bg-white p-8 shadow-[0_24px_80px_rgba(124,58,237,0.12)] sm:p-10">
        <div className="mb-10 text-center">
          <p className="inline-flex rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
            Politique de confidentialité
          </p>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-purple-900 sm:text-5xl">
            Confidentialité et protection des données
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600 sm:text-base">
            L’accès aux partitions est gratuit et ouvert à tous. La création de compte est uniquement requise pour uploader vos propres partitions musicales.
          </p>
        </div>

        <section className="space-y-10 text-gray-700">
          <article className="rounded-3xl border border-purple-100 bg-purple-50 p-7 shadow-sm">
            <h2 className="text-2xl font-semibold text-purple-900">Collecte de données</h2>
            <p className="mt-4 leading-7">
              Nous collectons uniquement les emails des utilisateurs. Cette information permet de créer un compte quand vous souhaitez uploader une partition.
            </p>
            <p className="mt-4 leading-7">
              L’email de contact pour toute demande est <a href="mailto:fartishion@gmail.com" className="font-semibold text-purple-700 hover:underline">fartishion@gmail.com</a>.
            </p>
          </article>

          <article className="rounded-3xl border border-purple-100 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-semibold text-purple-900">Objectif</h2>
            <p className="mt-4 leading-7">
              La création de compte sert uniquement à activer la fonctionnalité d’upload de partitions musicales. Aucune autre utilisation n’est faite de votre adresse email.
            </p>
          </article>

          <article className="rounded-3xl border border-purple-100 bg-purple-50 p-7 shadow-sm">
            <h2 className="text-2xl font-semibold text-purple-900">Utilisation des données</h2>
            <ul className="mt-4 space-y-3 leading-7 text-gray-700">
              <li>Pas d’utilisation commerciale.</li>
              <li>Pas de publicité.</li>
              <li>Pas de revente de données.</li>
              <li>Pas de tracking publicitaire ni d’analyse marketing.</li>
            </ul>
          </article>

          <article className="rounded-3xl border border-purple-100 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-semibold text-purple-900">Données collectées</h2>
            <p className="mt-4 leading-7">
              Nous ne stockons que votre email, et uniquement pour permettre la création de compte et l’accès à l’upload de partitions.
            </p>
          </article>

          <article className="rounded-3xl border border-purple-100 bg-purple-50 p-7 shadow-sm">
            <h2 className="text-2xl font-semibold text-purple-900">Accès à la plateforme</h2>
            <p className="mt-4 leading-7">
              La consultation et l’accès aux partitions sont entièrement gratuits et accessibles à tous, sans nécessité de créer un compte.
            </p>
          </article>

          <article className="rounded-3xl border border-purple-100 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-semibold text-purple-900">Droits des utilisateurs</h2>
            <ul className="mt-4 space-y-3 leading-7 text-gray-700">
              <li>Accès à vos données.</li>
              <li>Modification de vos informations.</li>
              <li>Suppression de votre compte sur simple demande.</li>
            </ul>
          </article>

          <article className="rounded-3xl border border-purple-100 bg-purple-50 p-7 shadow-sm">
            <h2 className="text-2xl font-semibold text-purple-900">Hébergement</h2>
            <p className="mt-4 leading-7 text-gray-700">Cette application est hébergée sur Vercel.</p>
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

export default Privacy
