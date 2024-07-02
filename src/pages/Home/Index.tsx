import { SelectedPage } from "@/shared/types";
import Paragraph from "@/components/Paragraph";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const home = ({}: Props) => {
  // const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="home" className="h-auto md:pb-0">
      <div className="flex flex-col h-screen">
        <div className="flex justify-between w-1/2 text-white">
          <div className="mx-4">
            <Paragraph size="large" bold={true} color="text-white">
              Computer Engineer - Coding Genius
            </Paragraph>
          </div>
        </div>

        <div className="flex flex-col text-7xl text-white ml-24 mt-52">
          Waleed
        </div>
        <div className="flex flex-col text-7xl text-white ml-60 mt-2">
          Hawwari
        </div>

        {/*I hate this but i cant position it any other way */}
      </div>

      <div className="flex flex-col w-1/4 min-h-[200px]">
        <div className="flex justify-start align-baseline w-[400px] h-[200px] bg-slate-950">
          <Paragraph size="large" bold={false} color="text-offwhite">
            {" "}
            Quote API placed here{" "}
          </Paragraph>
        </div>
      </div>
    </section>
  );
};

export default home;
