import Header from '../Composables/header'
import { BiMusic } from 'react-icons/bi'
import OurMission from '../Composables/ourMission'
 

const About = () => {
    return (
        <>
            <Header />

            <div className=" text-center w-full px-3 sm:px-8 h-auto pt-3 pb-2 sm:pt-4 sm:pb-3 mt-20 rounded">
                <div className="bg-purple-200 rounded-full flex items-center gap-2 px-4 py-2 animate-bounce text-purple-600 w-fit mx-auto">
                    <BiMusic className='text-xl' />
                       <h4 className='text-center text-purple-800'>Notre Histoire</h4>
                </div>
                
                 <div className="text-5xl mt-7 font-pt-serif text-purple-900">
                    <h2>La musique accessible <br /> à tous, partout</h2>
                </div>
                <div className="text-gray-600 w-xl mt-7 mx-auto ">
                    <p> Fartishion est né de la passion de musiciens convaincus que les grandes
                        œuvres musicales méritent d'être partagées. Notre mission : rendre les
                        partitions de qualité accessibles à chaque musicien, quel que soit son niveau.
                    </p>
                </div>
            </div>
            
            <OurMission />


        </>
    )
}
export default About