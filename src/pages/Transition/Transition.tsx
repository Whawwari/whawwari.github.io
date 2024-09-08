import { SparklesCore } from "@/components/UI/sparkles";

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
    <section className="relative w-auto h-[700px] bg-white">
      <div className="absolute inset-0 z-0">
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={120}
          className="w-full h-full"
          particleColor="#000000"
        />
      </div>

      <div className="relative flex items-center justify-center h-full">
        <div
          className={`relative bg-gradient-to-br from-red-950 to-black py-4 bg-clip-text text-center ${textSizeClass} font-medium font-Fatface tracking-tight text-transparent z-50`}
        >
          Give me a problem, <br /> I'll give you{" "}
          <span className="text-red-800">SOLUTIONS</span>
        </div>
      </div>
    </section>
  );
};

export default Transition;
