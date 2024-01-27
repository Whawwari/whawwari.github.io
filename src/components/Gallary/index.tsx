import {motion} from "framer-motion";
import FunWE from '@/assets/img/FunWE.png'
import SmartWE from '@/assets/img/SmartWe.png'
import { SelectedPage } from "@/shared/types";
import Expandable from "@/shared/Expanable";
import gallary from "@/assets/img/Gallary.png";


type Props={
  setSelectedPage: (value:SelectedPage) => void
};

export const Gallary = ({setSelectedPage}:Props) => {
  return (
    <section id="gallary" className="bg-Paige mx-auto h-auto min-h-full w-full md:mt-96">

      <div className=" flex justify-center max-w-full h-auto ">         
          <img className="object-cover h]" alt='Frame' src={gallary}/>
       </div>

      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Gallary)}>
      
      <div className="flex-column mx-auto max-w-7xl h-full">

        <div className="mb-20">

    {/* ABOUT ME  */}
          <Expandable headerText="About Me" headerClassName="text-5xl text-white text-center mx-auto ">
            
            {/*ABOUT ME PERSONAL */}
        <div className="container mx-auto flex px-10 pt-20 md:flex-row flex-col items-center bg-PinkNude">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Waleed!  
            <br className="inline-block" /> Let me catch you up to date;
          </h1>
          <p className="mb-8 leading-relaxed">
          Where to begin... <br/> I am a passionate indivual who puts his all into what ever he starts. I enjoy working out, swimming and reading. My favourite book is <span className="text-white ">Still Mine</span> by Amy Stuart. 
          I'm from <span className="text-red-600">Pal</span><span className="text-white">est</span><span className="text-green-500" >ine</span>, born in <span className="text-red-600 ">Can</span><span className="text-white">ada</span> . I developed my passion for Coding during Covid and ever since Ive been an addict. :).
          </p> 
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-3xl"
            alt="FunWE" src={FunWE}
          />
        </div>
      </div>
{/*ABOUT ME PART 2 */}
      <div className="container mx-auto flex px-10 pb-20 md:flex-row flex-col items-center bg-PinkNude ">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded-3xl"
              alt="SmartWe" src={SmartWE}
              />
        </div>

        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <p className="mb-8 leading-relaxed">
          I attend the University of Guelph and am currently in my third year, studying Computer Engineering. I have taken a plethora of courses, but my favorites were Data Structures and System Analysis and Design. 
          These two courses allowed me to work with a team, inspiring one another and pushing each member beyond our limits for us to achieve the impossible.
          </p> 
        </div>
     
      </div>
         </Expandable>
        </div>

    {/* CAREERS  */}
     <div className="mb-20">
      <Expandable headerText="Careers" headerClassName="text-5xl text-white text-center mx-auto">
        <div className="h-auto relative flex flex-col items-center bg-PinkNude rounded-3xl">
          {/* Row for Image 1 and Image 3 */}
          <div className="flex w-full justify-between items-start">
            {/* Image 1 Hover */}
            <div className="relative m-4">
              <img src={FunWE} alt="FunWe.png" className="h-96"/>
              <div className="hover-text absolute inset-0 bg-black bg-opacity-70 text-white p-4 overflow-y-auto opacity-0 hover:opacity-100 transition-opacity duration-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
              </div>
            </div>

            {/* Image 3 Hover */}
            <div className="relative m-4">
              <img src={FunWE} alt="FunWe.png" className="h-96"/>
              <div className="hover-text absolute inset-0 bg-black bg-opacity-70 text-white p-4 overflow-y-auto opacity-0 hover:opacity-100 transition-opacity duration-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
              </div>
            </div>
          </div>

          {/* Thick Horizontal Line */}
          <div className="w-full bg-gray-800 h-2 my-4 relative"></div>
        
            {/* Image 2 Hover */}
            <div className="relative m-4">
              <img src={FunWE} alt="FunWe.png" className="h-96"/>
              <div className="hover-text absolute inset-0 bg-black bg-opacity-70 text-white p-4 overflow-y-auto opacity-0 hover:opacity-100 transition-opacity duration-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
              </div>
            </div>

        </div>
      </Expandable>
    </div>

  {/* COMMUNITY  */}
        <div className="mb-20">
          <Expandable headerText="Community" headerClassName="text-5xl text-white text-center mx-auto">
          <div className="container mx-auto flex px-10 pt-20 md:flex-row flex-col items-center">
          <p> This is still undergoing Maintenance, check back soon to discover the mystery of my impact on the Community</p>

          </div>
          </Expandable>
        </div>


      </div>
      </motion.div>     
    </section>
  
  )
}
export default Gallary;