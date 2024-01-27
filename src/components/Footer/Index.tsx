import { SelectedPage } from "@/shared/types";
import { motion,  } from "framer-motion";

type Props={
    setSelectedPage: (value:SelectedPage) => void
  };

  
const Footer = ({setSelectedPage}:Props) => {
    return (
    <footer className="bg-Blood py-16 mt-64 w-screen" > {/* play with the colour of the footer bg */}
 
<motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}>

      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          {/* <img alt="logo" src={Logo} /> */}
          <p className="my-5">
          All content and images on this page have been curated by Waleed Hawwari.
          <br/> All resources utilized are free from patents and copyright restrictions.".<br/>
          </p>
          <p>© WH All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links To My Social</h4>
          <p className="my-5 hover:text-blue-500"><a href="https://www.linkedin.com/in/waleed-hawwari/">Linkdin</a> connect with me</p>
          <p className="my-5 hover:text-green-500"><a href="https://github.com/Whawwari">GitHub</a></p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Me</h4>
          <p className="mt-5">Email me at:</p>
          <p>WaleedHawwari.1224@gmail.com</p>
          <p className="mt-5">Or gimme a call:</p>
          <p>(437)-263-1488</p>
          <p></p>
        </div>
      </div>
      
</motion.div>
    </footer>

  );
};

export default Footer;