import { useState, useEffect } from "react";
import { SelectedPage } from "./shared/types";
import Navbar from "@/pages/Navbar/Index";
import Home from "./pages/Home/Index";
import Transition from "./pages/Transition/Transition";
import Experience from "./pages/Experience/Index";
import Projects from "./pages/Projects/Index";
import Footer from "./pages/Footer/Index";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="">
      <div>
        <div className="bg-Redbg bg-center bg-cover bg-local bg-no-repeat">
          <Navbar
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            isTopOfPage={isTopOfPage}
          />

          <Home setSelectedPage={setSelectedPage} />
        </div>

        <Transition
          size={"Xlarge"}
          Text={"Give me a problem"}
          Textcont={"I'll give you solutions"}
        />

        <div>
          <Experience setSelectedPage={setSelectedPage} />
        </div>

        <div>
          <Projects setSelectedPage={setSelectedPage} />
        </div>

        <div className="">
        <Footer
  setSelectedPage={setSelectedPage}/>
</div> 

        {/*
  <div className="relative">
    <Gallary 
    setSelectedPage={setSelectedPage}/>
  </div>


<div className=" ">
 <Contact
  setSelectedPage={setSelectedPage}/>
</div>

<div className="">
 <Footer
  setSelectedPage={setSelectedPage}/>
</div> */}
      </div>
    </div>
  );
}

export default App;
