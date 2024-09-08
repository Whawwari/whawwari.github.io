// import {
//   IconArrowWaveRightUp,
//   IconBoxAlignRightFilled,
//   IconBoxAlignTopLeft,
//   IconClipboardCopy,
//   IconFileBroken,
//   IconSignature,
//   IconTableColumn,
// } from "@tabler/icons-react";

import { HeroParallax } from "@/components/UI/hero-parallax";


// import LinkedIn from "@/assets/img/LinkedIn.png"
// import Website from "@/assets/img/website.png";
// import Github from "@/assets/img/Github.png";
import RadicalX from "@/assets/img/RadicalX.png";
// import Email from "@/assets/img/Email.png";
// import Database from "@/assets/img/Database.png";
import Litespace from "@/assets/img/LitespaceHome.jpg";
import LitespaceReport from "@/assets/img/LitespaceReport.jpg";
import Turring from "@/assets/img/Turring.png";
import DataHW from "@/assets/img/dataHW.jpg";
import SortVis from "@/assets/img/sortvis.png";
import Bact from "@/assets/img/Bact.jpg";
import FinalProduct from "@/assets/img/FinalProduct.jpg";
import GPS from "@/assets/img/GPS.jpg"
import Executor from "@/assets/img/Executor.png"

// import { BentoGrid, BentoGridItem } from "@/components/UI/bento-grid";

// //   const Skeleton = () => (
// //     <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
// //   );

// const Image = ({ bgImage, link }: { bgImage: string; link: string }) => (
//   <a
//     href={link}
//     className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-center bg-cover z-50"
//     style={{ backgroundImage: `url(${bgImage})` }}
//   ></a>
// );

// const items = [
//   {
//     title: "My LinkedIn",
//     description: "Explore the birth of groundbreaking ideas and inventions.",
//     header: <Image bgImage={LinkedIn} link="https://www.linkedin.com/in/waleed-hawwari/"/>,
//     icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "My Website",
//     description: "Dive into the transformative power of technology.",
//     header: <Image bgImage={Website} link="https://whawwari.github.io"/>,
//     icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "My GitHub",
//     description: "Discover the beauty of thoughtful and functional design.",
//     header: <Image bgImage={Github} link="https://github.com/Whawwari"/>,
//     icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "Radical AI",
//     description: "AI & Software Developer.",
//     header: <Image bgImage={RadicalX} link="https://lab.radicalai.app"/>,
//     icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "Auto Email System",
//     description: "Designed and coded more than 20 pages.",
//     header: <Image bgImage={Email} link=""/>,
//     icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "Backend integration",
//     description: "My first hands on experience.",
//     header: <Image bgImage={Database} link=""/>,
//     icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "Litespace",
//     description: "The new all in one platform.",
//     header: <Image bgImage={Litespace} link="https://www.litespace.io"/>,
//     icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "Turring",
//     description: "My first team built app design for the University.",
//     header: <Image bgImage={Turring} link="https://www.figma.com/design/wRDDSVigMuL2lfMia0yLow/Paper-Prototype?node-id=0-1&t=5nrmBpTS8jF0o07c-0"/>,
//     icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "Data Structures",
//     description: "The Collection of all my algorthmic work.",
//     header: <Image bgImage={DataHW} link="https://github.com/Whawwari/Data-Structures"/>,
//     icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "Sorting Visualizor",
//     description: "Best way to understand a topic is to see it, even better to code it.",
//     header: <Image bgImage={SortVis} link="https://github.com/Whawwari/Sorting-Visualizer-"/>,
//     icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
//   },
// ];

// export const Showcase = ({}: any) => {
//   return (
//     <section id="projects" className="bg-red h-full">
//       <div className="flex flex-col h-full w-full bg-grey">
//         {/* Responsive Font Size and Center Alignment */}
//         <div className="flex font-Fatface text-white text-4xl md:text-8xl items-center justify-center m-4">
//           <p>Projects</p>
//         </div>

//         {/* Responsive Grid Layout */}
//         <BentoGrid className="max-w-4xl mx-auto p-2 sm:p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
//           {items.map((item, i) => (
//             <BentoGridItem
//               key={i}
//               title={item.title}
//               description={item.description}
//               header={item.header}
//               icon={item.icon}
//               // Span two columns on medium/large screens for specific items
//               className={
//                 i === 3 || i === 6 ? "md:col-span-2" : ""
//               }
//             />
//           ))}
//         </BentoGrid>
//       </div>
//     </section>
//   );
// };

// export default Showcase;



export const products = [
  {
    title: "Sorting Visualizer", //not visible
    link: "https://lab.radicalai.app",
    thumbnail:
    RadicalX,
  },
  {
    title: "Sorting Visualizer",
    link: "https://github.com/Whawwari/Sorting-Visualizer-",
    thumbnail: SortVis,
  },
  {
    title: "Bacteria-Simulator",
    link: "https://github.com/Whawwari/Bacteria-Simulation-Jitto",
    thumbnail:
      Bact,
  },
 
  {
    title: "LitespaceReporting", //not visible
    link: "https://www.litespace.io",
    thumbnail:
    LitespaceReport,
  },
  {
    title: "Editrix AI", //not visible 
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect",//not visible 
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },
 
  {
    title: "Kinder Robot",
    link: "NA",
    thumbnail:
      FinalProduct,
  },
  {
    title: "GPS Approximator",
    link: "https://github.com/Whawwari/GPS-approximator",
    thumbnail:
      GPS,
  },
  {
    title: "Litespace pages",
    link: "https://www.litespace.io",
    thumbnail:
    Litespace,
  },
  {
    title: "SmartBridge",//not visible 
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio", //not visible 
    link: "https://renderwork.studio",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },
 
  {
    title: "Data Structures",
    link: "https://github.com/Whawwari/Data-Structures",
    thumbnail:
    DataHW,
  },
  {
    title: "Turring App",
    link: "https://www.figma.com/design/wRDDSVigMuL2lfMia0yLow/Paper-Prototype?node-id=0-1&t=5nrmBpTS8jF0o07c-0",
    thumbnail:
    Turring,
  },
  {
    title: "Scenario-Executor",
    link: "https://github.com/Whawwari/Scenario-Executor",
    thumbnail:
    Executor,
  },
  {
    title: "E Free Invoice", //not visible 
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];

export const Showcase = ({}: any) => {
    return (
       <section id="projects">

      <div className="flex flex-col bg-grey">



      
<div className="flex bg-grey">
<HeroParallax products={products} />
</div>

<div className=" bg-grey flex justify-center mt-16 text-white font-Fatface text-3xl ">
  Thank You For Dropping By,
</div>
<div className=" bg-grey flex justify-center mb-16 text-white font-Fatface text-3xl ">
Stay In Touch! 
</div>

</div>
</section>
    );
  };
  
  export default Showcase;
  