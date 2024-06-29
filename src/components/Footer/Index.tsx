import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Footer = ({ setSelectedPage }: Props) => {
  return (
    <footer className="bg-Stone py-16 w-screen">
      {" "}
      {/* play with the colour of the footer bg */}
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}>
        <motion.div
          className=""
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="justify-content mx-auto w-5/6 gap-16 md:flex text-white">
            <div className="mt-16 basis-1/2 md:mt-0">
              {/* <img alt="logo" src={Logo} /> */}
              <p className="my-5">
                All content and images on this page have been curated by Waleed
                Hawwari.
                <br /> All resources utilized are free from patents and
                copyright restrictions.".
                <br />
              </p>
              <p>© Created with ❤️ by Waleed!.</p>
              <p>WH All Rights Reserved.</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
              <h4 className="font-bold">My Socials</h4>
              <p className="my-5 hover:text-blue-500">
                <FaGithub size={20} />
                <a href="https://www.linkedin.com/in/waleed-hawwari/">
                  LinkedIn
                </a>
              </p>
              <p className="my-5 hover:text-green-500">
                <FaLinkedin size={20} />
                <a href="https://github.com/Whawwari">GitHub</a>
              </p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
              <h4 className="font-bold">Contact Me</h4>
              <p className="mt-5">Email:</p>
              <p>WaleedHawwari.1224@gmail.com</p>
              <p className="mt-5">Phone:</p>
              <p>(437)-263-1488</p>
              <p></p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
