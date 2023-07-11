import React, { useEffect } from 'react'
import {useState} from 'react'

const Gototop = () => {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop || document.documentElement.scrollTop;
      if (scrolled > 300){
        setVisible(true)
      } 
      else if (scrolled <= 300){
        setVisible(false)
      }
    };

    const scrollToTop = () =>{
      window.scrollTo({
        top: 0,  
        behavior: 'smooth'
      });
    };

    useEffect(()=>{
      window.addEventListener('scroll', toggleVisible);
      return () => window.removeEventListener('scroll',toggleVisible);
    },[])

  return (
    <div>
      {
        visible && (<div className={`${setVisible?'fixed':'hidden'} flex justify-center items-center h-[3rem] w-[3rem] text-black bottom-[1.5rem] right-[1.5rem] bg-slate-400 p-[1rem] z-1000 rounded-full font-bold z-10 drop-shadow-xl cursor-pointer hover:bg-slate-200 duration-200 shadow-5xl hover:border-slate-400 hover:border`} onClick={scrollToTop}>
            &#8593;
        </div>)
      }
    </div>
  )
}

export default Gototop
