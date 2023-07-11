import React, { useEffect } from 'react'
import {  motion } from 'framer-motion';


const Intro = ({visible,setVisible}) => {

    useEffect(() => {
        setTimeout(() => {
            setVisible(false)
        }, 4500);
    }, [])
    

    console.log(visible);
    return (
            visible && (
                <motion.div 
                initial={{opacity:0.75}}
                animate={{opacity:1}}
                exit={{opacity:0}}
                transition={{duration:1}}
                className='overflow-hidden z-[10000] absolute h-[100vh] w-[100vw] bg-[#0f0f1d] flex flex-col justify-center items-center'>
                <motion.div animate={{scale:[0.9,1,1,1,0.9] , y:[100, 0, 0, 0, -100], opacity:[0,1,1,1,1,1,1,0]}} transition={{duration:2.5}} className='flex text-white favFont text-xl md:text-5xl'>
                <motion.div animate={{rotate:[-5,5]}} transition={{duration:0.1, repeatType: "mirror",repeat: Infinity}}>👋</motion.div>
                Welcome to my PORTFOLIO!
                </motion.div>
                <motion.div animate={{scale:[0.9,1,1,1,0.9] , y:[100, 0, 0, 0, -100], opacity:[0,1,1,1,1,1,1,0]}} transition={{duration:2,delay:2.5}} className='text-white favFont text-xl md:text-5xl'>See You On the Other Side! 🧑‍💻</motion.div>
                </motion.div>
            )
  )
}

export default Intro
