import { SelectedPage } from '@/shared/types'
// import useMediaQuery from '@/hooks/useMediaQuery'
import Spline from "@splinetool/react-spline";
import MainTitle from "@/assets/img/MainTitle.png"
import ActionButton from '@/shared/ActionButton';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({setSelectedPage} : Props) => {
        // const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

 
return ( 
    <section id="home" className="  gap-16 md:h-screen md:pb-0">

        
    {/*image and main header*/}
    <div className='md:flex mx-auto w-5/6 h-full items-center justify-center md:h-5/6'>
        {/* Main header*/}
        <div className='z-10 mt-32 md:basis-3/5'>
             {/*header*/}
            <div className='md:-mt-20'>
                <div className="relative">
                    <div className='before:absolute before:-top-60 before:-left-40 before:z-[-1] before:-top-80px md:before:content-MainTT'>
                        <img  className="h-auto" alt="MainTitle" src={MainTitle}/>
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
<div className="z-10 md:z-10; md:ml-40 md:mt-16 md:justify-items-end md:h-4/5 md:w-4/5 border-none">
<Spline scene="https://prod.spline.design/BgJQxS3ZVb8jH7hX/scene.splinecode" />
</div>
</div>

{/* transition */}
{/* {isAboveMediumScreens && (
  
    <div className="h-[450px] w-full bg-Gray mt-28">
    <div className="mx-auto w-5/6">
      <div className="flex items-center justify-between">
                <img className = "h-[450px] py-6 " alt='Art_1' src={Art_1}/>
                <img className = "h-[450px] py-4" alt='Art_2' src={Art_2}/>
                <img className = "h-[450px] py-6" alt='Art_3' src={Art_3}/> 
            </div> 
        </div>
    </div>
 )
} */}
  </section>

)
}

export default Home;


 