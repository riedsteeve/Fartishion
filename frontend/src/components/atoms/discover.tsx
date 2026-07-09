import imagePartition from '../../../public/images/riverFlows.svg'
import jireh from '../../../public/images/Jireh.svg'
import PsaumeDelaCreaton from '../../../public/images/psaume-creation.svg'
import fureElise from '../../../public/images/BeethovenFureElise.jpg'
import Interstellar from '../../../public/images/interstaller.svg'
import ClairDeLune from '../../../public/images/Au claire de lune.webp'
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const partitions = [
    { id: 1, name: "Jireh - Chandler Moore", image: jireh, lien: "https://test-image1" },
    { id: 2, name: "Psaume de la Création - Patrick Richard", image: PsaumeDelaCreaton, lien: "https://test-image2" },
    { id: 3, name: "Für Elise - Ludwig van Beethoven", image: fureElise, lien: "https://test-image3" },
    { id: 4, name: "Interstellar Main Theme - Hans Zimmer", image: Interstellar, lien: "https://test-image1" },
    { id: 5, name: "Clair de lune - Claude Debussy", image: ClairDeLune, lien: "https://test-image2" },
    { id: 6, name: "River Flows in You - Yiruma", image: imagePartition, lien: "https://test-image3" },
        

]


const Discover = () => {
  return (
    <section className="mt-20 text-center w-full">
      <h3 className="text-2xl font-semibold font-pt-serif">
        Découvrez nos partitions
      </h3>

      <p className="mt-1.5 text-gray-700">
        Fartision est dédié aux passionnés de la musique. <br />
        Explorez nos partitions, téléchargez-les et laissez la musique vous inspirer.
      </p>

      <div className="mt-7 px-4 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partitions.map((partition) => (
            <div
              key={partition.id}
              className="bg-white p-4 rounded-2xl shadow"
              >
                  {/* Card head */}
              <h3 className='mb-2 font-semibold font-pt-serif' >{partition.name}</h3>

                   {/* Card image - body */}
              <img
                className="w-full h-40 object-cover rounded-2xl"
                src={partition.image}
                alt={partition.name}
              />

                   {/* Card link - button */}
              <Link
                to={partition.lien}
                className="mt-5 flex justify-center items-center rounded-full bg-purple-600 border border-purple-600 px-4 py-2 gap-2 text-white"
              >
                      Voir la partition
                      <AiOutlineRight className='text-sm' />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Discover;
