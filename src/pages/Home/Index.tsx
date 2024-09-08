// import { SelectedPage } from "@/shared/types";
// import Paragraph from "@/components/Paragraph";

// type Props = {
//   setSelectedPage: (value: SelectedPage) => void;
// };

// const home = ({}: Props) => {
//   // const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

//   return (
//     <section id="home" className="h-auto md:pb-0">
//       <div className="flex flex-col h-screen">
//         <div className="flex justify-between w-1/2 text-white">
//           <div className="mx-4">
//             <Paragraph size="large" bold={true} color="text-white">
//               Computer Engineer - Coding Genius
//             </Paragraph>
//           </div>
//         </div>

//         <div className="flex flex-col font-Fatface text-9xl text-white ml-24 mt-52">
//           Waleed
//         </div>
//         <div className="flex flex-col font-Fatface text-9xl text-white ml-60 mt-2">
//           Hawwari
//         </div>

//         {/*I hate this but i cant position it any other way */}
//       </div>

//       <div className="flex flex-col w-1/4 min-h-[200px]">
//         <div className="flex items-center align-baseline w-[400px] h-[200px] bg-offwhite">
//         <a className="weatherwidget-io" href="https://forecast7.com/en/43d52n79d88/milton/" data-label_1="Today" data-label_2="Milton ON" data-theme="original" >Today Milton ON</a>
// <script>
// !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');
// </script>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default home;
import { useEffect } from 'react';
import { SelectedPage } from "@/shared/types";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({}: Props) => {
  useEffect(() => {

    const script = document.createElement('script');
    script.src = 'https://weatherwidget.io/js/widget.min.js';
    script.id = 'weatherwidget-io-js';
    script.async = true;
    document.body.appendChild(script);

    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="home" className="h-auto md:pb-0">
      <div className="flex flex-col h-full">

        <div className="flex flex-col font-Fatface text-9xl text-white md:ml-24 md:mt-52 ">
          Waleed
        </div>
        <div className="flex flex-col font-Fatface text-9xl text-white md:ml-60 md:mt-2 ">
          Hawwari
        </div>

        {/* Adjust positioning */}
       
          <div className="flex h-1/2 w-1/4 mt-80 bg-black justify-between items-end">
          <a
            className="weatherwidget-io w-full text-white justify-start items-baseline"
            href="https://forecast7.com/en/43d65n79d38/toronto/"
        data-label_1="Today"
        data-label_2="TORONTO ON"
        data-font="Arial"
        data-icons="Climacons"
        data-mode="Current"
        data-theme="dark"
      >
               Today TORONTO ON
            </a>
          </div>
        </div>
    </section>
  );
};

export default Home;
