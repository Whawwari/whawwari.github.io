import { motion } from "framer-motion";
// import FunWE from '@/assets/img/FunWE.png'
// import SmartWE from '@/assets/img/SmartWe.png'
import { SelectedPage } from "@/shared/types";
import Expandable from "@/shared/Expanable";
// import gallary from "@/assets/img/Gallary.png";
import useMediaQuery from "@/hooks/useMediaQuery";
// import Art_1 from "@/assets/img/Art_1.png"
// import Art_2 from "@/assets/img/Art_2.png"
// import Art_3 from "@/assets/img/Art_3.png"
import RadicalX from "@/assets/img/RadicalX.png";
import ComingSoon from "@/assets/img/ComingSoon.png";
import IEEE from "@/assets/img/IEEE.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

export const Gallary = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section
      id="gallary"
      className="bg-Gray mx-auto mt-96 h-auto min-h-full w-full md:mt-0"
    >
      {/*add mt if you want space between gallary and home */}

      <motion.div
        className=""
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className=" flex justify-center max-w-full h-96 overflow-hidden">
          {/* <img className="object-cover h-full w-fit" alt='Frame' src={gallary}/> */}
        </div>

        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.Gallary)}
        >
          <div className="flex-column mx-auto max-w-7xl h-full bg-">
            {/* ABOUT ME  */}
            <div className="mb-20">
              <Expandable
                headerText="About Me"
                headerClassName="text-5xl text-white text-center mx-auto mt-8 my-4"
              >
                {/*ABOUT ME PERSONAL */}
                <div className="border-4 border-solid border-white p-4">
                  <div className="container mx-auto flex px-10 pt-20 md:flex-row flex-col items-center ">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-4 md:mb-0 items-center text-center border-4 border-solid border-white p-4">
                      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-Ferrari ml-4">
                        Hi, I'm Waleed!
                        <br className="inline-block" /> Let me introduce myself;
                      </h1>

                      <p className="mb-8 leading-relaxed ml-4 text-white">
                        Where to begin... <br /> I am a passionate indivual who
                        puts his all into what ever he starts. I enjoy working
                        out, swimming and reading. My favourite book is{" "}
                        <span className="text-white ">Still Mine</span> by Amy
                        Stuart. I developed my passion for Coding during Covid
                        and ever since Ive been an addict. :).
                      </p>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ml-4 mb-16">
                      <img
                        className="object-cover object-center rounded-3xl"
                        // alt="FunWE" src={FunWE}
                      />
                    </div>
                  </div>
                  {/*ABOUT ME PART 2 */}
                  <div className="container mx-auto flex px-10 pb-20 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                      <img
                        className="object-cover object-center rounded-3xl mb-4"
                        // alt="SmartWe" src={SmartWE}
                      />
                    </div>

                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 p-4 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center text-white border-4 border-solid border-white ml-4">
                      <p className="mb-8 leading-relaxed ">
                        I attend the University of Guelph and am currently in my
                        third year, studying Computer Engineering. I've delved
                        into a variety of courses that not only sparked
                        inspiration but also cultivated an environment where
                        each member pushes beyond their limits to achieve the
                        extraordinary. From coding fundamentals to exploring the
                        realms of artificial intelligence and embedded systems,
                        my coursework has been a dynamic blend of challenge and
                        discovery. Engaging in hands-on projects and
                        collaborative assignments has been instrumental in
                        shaping my problem-solving skills and fostering a sense
                        of teamwork.
                      </p>
                    </div>
                  </div>
                </div>
              </Expandable>
            </div>

            {/* CAREERS  */}
            <div className="mb-20">
              <Expandable
                headerText="Careers"
                headerClassName="text-5xl text-white text-center mx-auto mb-4"
              >
                <div className="h-auto relative flex flex-col items-center border-4 border-solid border-white p-4">
                  {/* Row for Image 1 and Image 3 */}
                  <div className="md:flex w-full justify-between items-start m-3">
                    {/* Image 1 Hover */}
                    <a
                      href="https://www.radicalx.co"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="relative m-4 ">
                        <img
                          src={RadicalX}
                          alt="RadicalX.png"
                          className="h-96 rounded-3xl"
                        />
                        <div className="hover-text text-lg absolute inset-0 bg-black bg-opacity-80 text-white p-4 overflow-y-auto opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-3xl">
                          I was tasked with designing and implementing the
                          conformation email that user receive after verifying
                          their emails. using React. I followed a set of
                          requirements and I worked with a team that would check
                          in weekly to inspect progress. Simultaneously I was in
                          a second team that was tasked to develop a content
                          filter that is implemented into the AI, this required
                          me to learn vertex AI.
                        </div>
                      </div>
                    </a>

                    {/* Image 2 Hover */}
                    <div className="relative m-4">
                      <img
                        src={ComingSoon}
                        alt="ComingSoon.png"
                        className="h-96"
                      />
                      <div className="hover-text text-lg absolute inset-0 bg-black bg-opacity-90 text-white p-4 overflow-y-auto opacity-0 hover:opacity-100 transition-opacity duration-300">
                        I'm actively looking for an internship for Summer 2024!
                        If you are on this page, l'd love to stay in touch with
                        you. All my contact information can be found at the
                        bottom of this page
                      </div>
                    </div>
                  </div>
                </div>
              </Expandable>
            </div>

            {/* COMMUNITY  */}
            <div className="mb-20">
              <Expandable
                headerText="Community"
                headerClassName="text-5xl text-white text-center mx-auto mb-4"
              >
                <div className="h-auto relative flex flex-col items-center border-4 border-solid border-white p-4">
                  <div className="h-auto relative flex flex-col items-center">
                    {/* Image 1 Hover */}
                    <a
                      href="https://www.ieee.org"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="relative m-4 ">
                        <img src={IEEE} alt="IEEE.png" className="h-96" />
                        <div className="hover-text text-m absolute inset-0 bg-black bg-opacity-70 text-white p-4 overflow-y-auto opacity-0 hover:opacity-100 transition-opacity duration-300">
                          I was tasked with designing and implementing the
                          conformation email that user receive after verifying
                          their emails. using React. I followed a set of
                          requirements and I worked with a team that would check
                          in weekly to inspect progress. Simultaneously I was in
                          a second team that was tasked to develop a content
                          filter that is implemented into the AI, this required
                          me to learn vertex AI.
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </Expandable>
            </div>
          </div>
        </motion.div>

        <motion.div
          className=""
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {/* transition    put piece of paper beside each image, and make a pop up massage pop up when clicked discribing when and where this pic was.*/}
          {isAboveMediumScreens && (
            <div className="h-[450px] w-full">
              <div className="mx-auto w-5/6">
                <div className="flex items-center justify-between">
                  {/* <img className = "h-[450px] py-6 " alt='Art_1' src={Art_1}/>
              <img className = "h-[450px] py-4" alt='Art_2' src={Art_2}/>
              <img className = "h-[450px] py-6" alt='Art_3' src={Art_3}/>  */}
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};
export default Gallary;
