import { SelectedPage } from '@/shared/types'
import useMediaQuery from '@/hooks/useMediaQuery'
import Spline from "@splinetool/react-spline";
// import AnchorLink from 'react-anchor-link-smooth-scroll';
import MainTitle from "@/assets/img/MainTitle.png"
// import MainTT from "@/assets/img/MainTT.png"
import ActionButton from '@/shared/ActionButton';
// import PlaceHolder from '@/assets/img/PNGimg.png'

import Art_1 from "@/assets/img/Art_1.png"
import Art_2 from "@/assets/img/Art_2.png"
import Art_3 from "@/assets/img/Art_3.png"


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({setSelectedPage} : Props) => {
        const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

 
return ( 
    <section id="home" className="gap-16 md:h-screen md:pb-0">

     {/* <Spline scene="https://prod.spline.design/GQfziXu2UbXaschG/scene.splinecode" /> */}

    {/*image and main header*/}
    <div className='md:flex mx-auto w-5/6 h-full items-center justify-center md:h-5/6'>
        {/* Main header*/}
        <div className='z-10 mt-32 md:basis-3/5'>
             {/*header*/}
            <div className='md:-mt-20'>
                <div className="relative">
                    <div className='before:absolute before:-top-80 before:-left-60 before:z-[-1] before:-top-80px md:before:content-MainTT'>
                        <img  className="" alt="MainTitle" src={MainTitle}/>
                    </div>
                </div>
            <p className='mt-8 text-lg'> "Success is not final, failure is not fatal: It is the courage to continue that counts." <br/> <br/> - Winston Churchill </p>
            </div>
       
        {/*action button*/}
        <div className='mt-8 flex items-center gap-8 md:justify-start'>
        <ActionButton setSelectedPage={setSelectedPage}>
                Begin
            </ActionButton>
            {/* <AnchorLink className="text-sm font-bold text-white underline hover: text-Dpurple"
            onClick={() => setSelectedPage(SelectedPage.Home)} 
            href={`#${SelectedPage.Home}`}>
            <p>hello world</p>
            </AnchorLink> */}
        </div>   
        
        </div>  
        
    
{/*image*/}
<div className="z-10 md:z-10; md:ml-40 md:mt-16 md:justify-items-end md:h-3/5 md:w-3/5">
    {/* <img alt="Placeholder" src={PlaceHolder}/> */}
    <Spline scene="https://prod.spline.design/l1M2Zxypra5uUpTB/scene.splinecode"/>
</div>
{/*className="h- z-10 md:z-10; md:ml-40 md:mt-16 md:justify-items-end md:h-3/5 md:w-3/5"*/}
</div>

{/* transition */}
{isAboveMediumScreens && (
  
    <div className="h-[450px] w-full bg-primary-100 bg-LPink mt-28">
    <div className="mx-auto w-5/6">
      <div className="flex items-center justify-between gap-8 m-">
                <img className = "h-96 py-6" alt='Art_1' src={Art_1}/>
                <img className = "h-96 py-6" alt='Art_2' src={Art_2}/>
                <img className = "h-96 py-6" alt='Art_3' src={Art_3}/> 
            </div> 
        </div>
    </div>
 )
}
  </section>

)
}

export default Home;


 