import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";

import { BiUser } from "react-icons/bi";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

// model de donnée que react-hook-form aura à suivre
type FormData = {
  nom: string;
  prenom: string;
  email: string;
  mdp: string;
};


const Signup = () => {
  const [avatar, setAvatar] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

    //élément de gestion du formulaire; Register pour faire un bind avec le model, handleSubmit, pour la gestion des données envoyé par le formulaire et formstate pour les erreurs
  const {
    register,
    handleSubmit,
    formState: { errors },
    } = useForm<FormData>();
    
    // Gestion de l'image pour l'avatar

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAvatar(imageUrl);
    }
  };

    // fonction pour l'envoie des données
  const sendData = (data: FormData) => {
    console.log("FORM DATA :", data);
    console.log("AVATAR :", avatar);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl mt-10 p-8 space-y-6">

        <div className="text-center space-y-1">
          <h2 className="text-2xl font-bold text-gray-900">
            Créer un compte
          </h2>
          <p className="text-sm text-gray-500">
            Rejoignez Fartishion pour télécharger vos partitions
          </p>
        </div>

        {/* FORM */}
        <form className="space-y-4" onSubmit={handleSubmit(sendData)}>

          {/* --- AVATAR --- */}
          <div className="flex flex-col items-center justify-center space-y-2 pb-2">
            <div
              onClick={() => fileInputRef.current?.click()}
              className="relative group w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center cursor-pointer overflow-hidden border-2 border-purple-200 hover:border-purple-400 transition"
            >
              {avatar ? (
                <img
                  src={avatar}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <BiUser className="text-4xl text-purple-600" />
              )}

            
            </div>

            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageChange}
              accept="image/*"
              className="hidden"
              name="avatar"
            />

            <span className="text-xs text-gray-400">
              Ajouter une photo de profil
            </span>
          </div>

          {/* NOM */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Nom
            </label>
            <input
              {...register("nom", { required: "Nom requis" })}
              type="text"
              placeholder="Dupont"
              className="w-full mt-1 px-3 py-2 border border-gray-200 rounded-lg
              focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            {errors.nom && (
              <p className="text-red-500 text-xs">{errors.nom.message}</p>
            )}
          </div>

          {/* PRENOM */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Prenom
            </label>
            <input
              {...register("prenom", { required: "Prénom requis" })}
              type="text"
              placeholder="Jean"
              className="w-full mt-1 px-3 py-2 border border-gray-200 rounded-lg
              focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            {errors.prenom && (
              <p className="text-red-500 text-xs">{errors.prenom.message}</p>
            )}
          </div>

          {/* EMAIL */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Adresse email
            </label>
            <input
              {...register("email", { required: "Email requis" })}
              type="email"
              placeholder="jean@dupont.com"
              className="w-full mt-1 px-3 py-2 border border-gray-200 rounded-lg
              focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email.message}</p>
            )}
          </div>

          {/* PASSWORD */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Mot de passe
            </label>
            <input
              {...register("mdp", { required: "Mot de passe requis" })}
              type="password"
              placeholder="••••••••"
              className="w-full mt-1 px-3 py-2 border border-gray-200 rounded-lg
              focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            {errors.mdp && (
              <p className="text-red-500 text-xs">
                {errors.mdp.message}
              </p>
            )}
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            className="w-full py-2.5 rounded-lg text-white font-semibold
            bg-linear-to-r from-purple-600 to-purple-500
            hover:from-purple-700 hover:to-purple-600 transition cursor-pointer"
          >
            S'inscrire gratuitement
          </button>
        </form>

        {/* SOCIAL */}
        <div className="flex items-center gap-3">
          <div className="h-px bg-gray-200 flex-1"></div>
          <span className="text-xs text-gray-400">
            ou s'inscrire avec
          </span>
          <div className="h-px bg-gray-200 flex-1"></div>
        </div>

        <div className="flex flex-row gap-3">
          <button className="w-full flex items-center justify-center gap-2 border border-gray-200 py-2 rounded-lg hover:bg-gray-50 transition">
            <FaGoogle className="text-red-500" />
            Google
          </button>

          <button className="w-full flex items-center justify-center gap-2 border border-gray-200 py-2 rounded-lg hover:bg-gray-50 transition">
            <FaFacebookF className="text-blue-600" />
            Facebook
          </button>
        </div>

        <p className="text-center text-sm text-gray-600">
          Déjà un compte ?{" "}
          <Link
            to="/login"
            className="text-purple-600 font-semibold hover:underline"
          >
            Se connecter
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Signup;