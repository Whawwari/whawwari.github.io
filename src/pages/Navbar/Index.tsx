import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { SelectedPage } from "@/shared/types";
import Link from "./Link";
import Paragraph from "@/components/Paragraph";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isTopOfPage: boolean;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  return (
    <nav>
      <div className="flex justify-between items-center top-0 w-full p-4">
        <div className="text-white">
          <Paragraph size="large" bold={false} color="text-white">
            {" "}
            Waleed Hawwari{" "}
          </Paragraph>
        </div>
        <div className="text-white">
          <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
            {isMenuToggled ? (
              <XMarkIcon className="h-12 w-12 text-white" />
            ) : (
              <Bars3Icon className="h-12 w-12 text-white" />
            )}
          </button>
        </div>
      </div>

      {isMenuToggled && (
        <div className="fixed right-0 top-0 z-40 h-92 w-[400px] bg-offwhite drop-shadow-xl">
          <div className="flex justify-end p-4">
            <button onClick={() => setIsMenuToggled(false)}>
              <XMarkIcon className="h-12 w-12 text-black-400" />
            </button>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex flex-col justify-center gap-4 text-2xl">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Gallary"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Resume"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>

          <div className="flex mt-6 justify-between py-2 px-4">
            <div>
              <p>Hello</p>
            </div>

            <div className="flex gap-3">
              <p>LinkedIn</p>
              <p>GitHub</p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

{
  /*
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} flex w-full gap-16`}>
         
            <div className="text-lightblue hover:text-darkblue hover:animate-spin">
              Waleed
            </div>


            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    page="home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
               
                  <Link
                    page="Gallary"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />

                  <ResumeLink>
                    {" "}
                    <a>Resume</a>{" "}
                  </ResumeLink>
                </div>

                <div className={`${flexBetween} gap-8`}>
                
                  <a
                    href="https://github.com/Whawwari"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    <FaGithub size={20} />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/waleed-hawwari/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    <FaLinkedin size={20} />
                  </a>

                  <a
                    href="WResume"
                    download="resume.pdf"
                    className="text-white"
                  >
                    <FaFilePdf size={20} />
                  </a>
                </div>
              </div>
            ) : (

              <button
                className="rounded-full bg-lightblue p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
*/
}
