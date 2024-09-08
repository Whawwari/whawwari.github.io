// // Showcase.tsx
// import { StickyScroll } from "@/components/UI/sticky-scroll-reveal";
// import { ShowcaseListProps } from "./Interfaces/Interfaces";
// import Paragraph from "./Paragraph";

// export const Showcase: React.FC<ShowcaseListProps> = ({
//   content,
//   Company,
//   background,
//   position,
// }) => {

//   return (
//     <section className="bg-offwhite">
//        <div
//         className="w-full bg-center bg-cover bg-no-repeat h-screen"
//         style={{ backgroundImage: `url(${background})` }} // Set the background image
//       >
//         <div className="flex flex-col text-white text-9xl font-bold p-6 ml-4">
//           {Company}
//         </div>

//         <div className="flex flex-row justify-between  p-4">
//           <div className="ml-4 px-4">
//             <Paragraph size="xl">{position}</Paragraph>
//           </div>
//           <StickyScroll content={content} />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Showcase;
import { StickyScroll } from "@/components/UI/sticky-scroll-reveal";
import { ShowcaseListProps } from "./Interfaces/Interfaces";
import Paragraph from "./Paragraph";

export const Showcase: React.FC<ShowcaseListProps> = ({
  content,
  Company,
  background,
  position,
}) => {
  return (
    <section className="bg-white">
      <div className="flex w-full h-screen">
        {/* Left Side: Large Image with Company and Position */}
        <div
          className="w-1/2 bg-center bg-cover bg-no-repeat h-full"
          style={{ backgroundImage: `url(${background})` }} // Set the background image
        >
          <div className="flex flex-col text-white text-6xl font-bold p-6 ml-4">
            {Company}
          </div>
          <div className="ml-4 px-4 text-white">
            <Paragraph size="xl">{position}</Paragraph>
          </div>
        </div>

        {/* Right Side: Sticky Scroll */}
        <div className="w-1/2 p-8 overflow-y-auto">
          <StickyScroll content={content} />
        </div>
      </div>
    </section>
  );
};

export default Showcase;
