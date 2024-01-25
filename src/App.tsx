import Navbar from "@/components/Navbar/Index";
import { useState, useEffect } from "react";
import { SelectedPage } from "./shared/types";
import Home from "@/components/Home";
import Gallary from "./components/Gallary";
import Footer from "@/components/Footer/Index";



function App() {
const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
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

  <div className="app bg-Paige h-full">
  <Navbar 
  selectedPage={selectedPage} 
  setSelectedPage={setSelectedPage}
  isTopOfPage={isTopOfPage}
  />

<div className=" bg-Paige">
  <Home setSelectedPage={setSelectedPage}/>
</div>
 
  <div className=" bg-Paige relative">
    <Gallary setSelectedPage={setSelectedPage}/>
  </div>
  

 <div className=" bg-Paige absolute">
 <Footer
  setSelectedPage={setSelectedPage}/>
</div>

</div>

  );
    }
 
export default App