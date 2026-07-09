import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { AiFillInstagram } from 'react-icons/ai'
import { RiWhatsappFill } from 'react-icons/ri'
import { BsTelephoneInboundFill } from 'react-icons/bs'

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

const Contact = () => {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>()

  const onSubmit = () => {
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-2xl border border-purple-100 bg-white p-8 shadow-[0_24px_80px_rgba(124,58,237,0.12)] sm:p-10">
        <div className="mb-10 text-center">
          <p className="inline-flex rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
            Contact
          </p>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-purple-900 sm:text-5xl">
            Une question ? Écris-nous.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600 sm:text-base">
            Envoie-nous un message, nous répondons rapidement. Tu peux aussi nous suivre sur les réseaux ou retrouver nos coordonnées ci-dessous.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          <div className="rounded-3xl border border-purple-100 bg-purple-50 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-purple-900">Formulaire de contact</h2>
            <p className="mt-3 text-gray-700 leading-7">
              Dis-nous en quelques mots pourquoi tu nous contactes, et on te répond dans les plus brefs délais.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Nom</label>
                <input
                  {...register('name', { required: 'Nom requis' })}
                  className="w-full rounded-3xl border border-purple-200 bg-white px-4 py-3 text-gray-800 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                  placeholder="Ton nom"
                />
                {errors.name && <p className="mt-2 text-sm text-red-500">{errors.name.message}</p>}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Email</label>
                <input
                  {...register('email', { required: 'Email requis' })}
                  className="w-full rounded-3xl border border-purple-200 bg-white px-4 py-3 text-gray-800 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                  placeholder="ton@email.com"
                  type="email"
                />
                {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Sujet</label>
                <input
                  {...register('subject', { required: 'Sujet requis' })}
                  className="w-full rounded-3xl border border-purple-200 bg-white px-4 py-3 text-gray-800 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                  placeholder="Objet de ton message"
                />
                {errors.subject && <p className="mt-2 text-sm text-red-500">{errors.subject.message}</p>}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  {...register('message', { required: 'Message requis' })}
                  className="h-32 w-full rounded-3xl border border-purple-200 bg-white px-4 py-3 text-gray-800 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                  placeholder="Raconte-nous ce dont tu as besoin..."
                />
                {errors.message && <p className="mt-2 text-sm text-red-500">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-purple-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-purple-800"
              >
                Envoyer le message
              </button>

              {submitted && (
                <p className="rounded-3xl bg-white px-4 py-3 text-sm text-green-700 shadow-sm">
                  Merci ! Ton message a bien été pris en compte.
                </p>
              )}
            </form>
          </div>

          <aside className="space-y-6 rounded-3xl border border-purple-100 bg-white p-8 shadow-sm">
            <div>
              <h2 className="text-2xl font-semibold text-purple-900">Coordonnées</h2>
              <p className="mt-4 text-gray-700 leading-7">
                Nous sommes disponibles pour répondre à tes questions sur le site, l’upload de partitions ou la création de compte.
              </p>
            </div>

            <div className="space-y-4 rounded-3xl bg-slate-50 p-5">
              <div>
                <p className="text-sm font-semibold text-purple-800">Email</p>
                <a href="mailto:fartishion@gmail.com" className="mt-2 block text-gray-700 hover:text-purple-700">fartishion@gmail.com</a>
              </div>
              <div>
                <p className="text-sm font-semibold text-purple-800">Téléphone</p>
                <a href="tel:+33620057767" className="mt-2 block text-gray-700 hover:text-purple-700">+33 6 20 05 77 67</a>
              </div>
              <div>
                <p className="text-sm font-semibold text-purple-800">Hébergement</p>
                <p className="mt-2 text-gray-700">Vercel</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-purple-900">Suivez-nous</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="https://www.instagram.com/fartishion"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-3xl border border-purple-100 bg-purple-50 px-4 py-3 text-sm font-semibold text-purple-700 transition hover:bg-purple-100"
                >
                  <AiFillInstagram className="text-xl" /> Instagram
                </a>
                <a
                  href="https://wa.me/33620057767"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-3xl border border-purple-100 bg-purple-50 px-4 py-3 text-sm font-semibold text-purple-700 transition hover:bg-purple-100"
                >
                  <RiWhatsappFill className="text-xl" /> WhatsApp
                </a>
                <a
                  href="tel:+33620057767"
                  className="inline-flex items-center gap-2 rounded-3xl border border-purple-100 bg-purple-50 px-4 py-3 text-sm font-semibold text-purple-700 transition hover:bg-purple-100"
                >
                  <BsTelephoneInboundFill className="text-xl" /> Appel direct
                </a>
              </div>
            </div>

            <div className="mt-6 text-center">
              <Link
                to="/"
                className="inline-flex items-center justify-center rounded-full bg-purple-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-purple-800"
              >
                Retour à l’accueil
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default Contact
