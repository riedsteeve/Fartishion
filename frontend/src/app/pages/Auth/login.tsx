import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import type { LoginData } from "../../Types/loginType";


const Login = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginData>();


    const sendData = (data: LoginData) => {
        console.log("Login data : ", data)
    }

return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl mt-10 p-8 space-y-6">

            
                <div className=" bg-purple-200 h-20 w-20 m-auto rounded-full flex justify-center items-center border-2 border-purple-800 ">
                     <BiUser className="text-4xl text-purple-600 " />
                </div>  

        <div className="text-center space-y-1">
          <h2 className="text-2xl font-bold text-gray-900">
            Connectez vous
          </h2>
          <p className="text-sm text-gray-500">
            Rejoignez Fartishion pour télécharger vos partitions
          </p>
            </div>
            

        {/* FORM */}
        <form className="space-y-4" onSubmit={handleSubmit(sendData)}>

 
                               
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
            ou s'inscrire
          </span>
          <div className="h-px bg-gray-200 flex-1"></div>
        </div>
        <p className="text-center text-sm text-gray-600">
          Pas encore de compte?{" "}
          <Link
            to="/signup"
            className="text-purple-600 font-semibold hover:underline"
          >
            S'inscrire
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login