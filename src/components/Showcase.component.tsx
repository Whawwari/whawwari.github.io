// Showcase.tsx
import { StickyScroll } from "@/components/UI/sticky-scroll-reveal";
import useMediaQuery from "@/hooks/useMediaQuery";
import { ShowcaseListProps } from "./Interfaces/Interfaces";
import { PinContainer } from "./UI/3d-pin";

export const Showcase: React.FC<ShowcaseListProps> = ({
  content,
  Company,
  background,
}) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section className="bg-offwhite h-screen">
      <div
        className={`w-full h-full ${background} bg-center bg-cover bg-local bg-no-repeat`}
      >
        <div className="flex flex-col text-white text-9xl font-bold p-6 ml-4">
          {Company}
        </div>

        <div></div>

        <div className="flex flex-row justify-between space-y-12 p-4">
          <div></div>
          <StickyScroll content={content} />
        </div>
      </div>
    </section>
  );
};

export default Showcase;
