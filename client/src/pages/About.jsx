import React from 'react'
import photo from '../assets/photo.jpeg';

import { motion } from 'framer-motion';

const About = () => {
  return (
    <div id='about' className='border-dashed border-slate-700 border-b-2 bg-slate-200 z-0'>
        <div className='text-slate-900 min-h-[100vh]  max-w-[1240px] mx-auto pt-[5rem] pb-[5rem]'>
          <motion.div 
          initial={{y:-100, opacity:0}}
          whileInView={{y:0, opacity:1}}
          transition={{duration:1}}
          viewport={{ once: true }}
          className="favFont relative flex justify-center items-center  uppercase text-center font-bold after:content-[''] after:absolute after:bottom-[-2rem] after:h-1 after:w-[6rem] after:bg-slate-600 text-5xl">About Me</motion.div>
          <div className='flex lg:flex-row vsm:flex-col gap-10 m-10 min-h-[65vh]'>
            <motion.div 
            initial={{x:-100, opacity:0}}
            whileInView={{x:0, opacity:1}}
            transition={{duration:1 , delay:0.1}}
            viewport={{ once: true }}
            className='mx-auto flex drop-shadow-2xl z-50'>
              <motion.img 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              src={photo} alt="photo" className='min-w-[300px] max-w-[30vw] object-cover rounded-xl'/>
            </motion.div>
            <motion.div
            initial={{x:100, opacity:0}}
            whileInView={{x:0, opacity:1}}
            transition={{duration:1 , delay:0.1}}
            viewport={{ once: true }}
            className='flex flex-col justify-center items-center md:p-10 vsm:p-0'>
              <div className='favFont relative uppercase text-3xl after:content-[""] after:absolute after:h-[34%] after:w-[104%] after:bg-purple-400 after:bottom-0 after:left-[-2%] after:z-[-10] after:duration-300 text-justify'>Hi There!</div>
              <div className='text-justify relative flex flex-col gap-10 m-10 before:content-[""] before:absolute before:h-[2px] before:opacity-50 before:w-[120px] before:bg-green-500 before:top-5 before:left-[-9%] before:z-[-10] before:rotate-[-40deg] after:content-[""] after:absolute after:h-[2px] after:opacity-50 after:w-[150px] after:bg-green-500 after:top-6 after:left-[-10%] after:z-[-10] after:rotate-[-40deg]'>
                <p className='font-mono'>
                My name is Nikhil Raj and I am completing my Bachelor of Engineering, majoring in <span className='text-black font-bold relative after:content-[""] after:w-0 after:absolute after:bottom-0 hover:after:duration-500 after:right-0 hover:after:w-[100%] after:bg-black after:h-[2px] cursor-pointer'>Computing Science Engineering</span> at the <span className='text-black font-bold relative after:content-[""] after:w-0 after:absolute after:bottom-0 hover:after:duration-500 after:left-0 hover:after:w-[100%] after:bg-black after:h-[2px] cursor-pointer'>Birla Institute of Technology</span>. I have a passion for all things technology and design, from software engineering to UI/UX. I aspire toward a career that will allow me to channel my creativity through crafting beautiful software and engaging experiences.
                </p>
                <p className='font-mono'>
                In addition to my love of technology, I am also interested in education, history, economics and politics.
                </p>
                <p className='font-mono'>
                Below are details of some of projects I have developed over my college life.
                </p>
              </div>

            </motion.div>
          </div>
        </div>
    </div>
  )
}

export default About
