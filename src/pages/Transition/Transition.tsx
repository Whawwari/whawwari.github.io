import { motion } from "framer-motion";
import { LampContainer } from "../../components/UI/Lamp";

type TransitionProps = {
  Text: string;
  Textcont: string;
  size: "small" | "medium" | "large" | "Xlarge";
};

const Transition = ({ size }: TransitionProps) => {
  let textSizeClass;

  switch (size) {
    case "small":
      textSizeClass = "text-sm";
      break;
    case "medium":
      textSizeClass = "text-base";
      break;
    case "large":
      textSizeClass = "text-5xl";
      break;
    case "Xlarge":
      textSizeClass = "text-7xl";
      break;
    default:
      textSizeClass = "text-base";
  }

  return (
    <section className="relative w-auto h-full bg-offwhite">
      {/* <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-screen"
          particleColor="#000000"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <div className={`flex justify-center items-center ${textSizeClass} text-black`}>
            {Text}
          </div>
          <div className={`flex justify-center items-center font-bold mt-8 text-black ${textSizeClass}`}>
            {Textcont}
          </div>
        </div> */}
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-offwhite py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Give me a problem, <br /> I'll give you{" "}
          <span className="text-red-800">SOLUTIONS</span>
        </motion.h1>
      </LampContainer>
    </section>
  );
};

export default Transition;
