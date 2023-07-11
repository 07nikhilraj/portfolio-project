import React from 'react'
import {FaFacebook, FaTwitter, FaGithub, FaLinkedin} from 'react-icons/fa'

import { motion } from 'framer-motion'
import Typed from 'react-typed'

const Footer = () => {
  return (
    <div id='footer' className='bg-slate-200 pt-10 pb-10'>
        <div className='max-w-[1240px] mx-auto  flex flex-col justify-center items-center text-slate-400'>
        <motion.div 
        initial={{opacity:0, y:-100}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:1}}
        className='text-black p-10 pb-0 md:text-3xl vsm:text-xl font-mono'>LET US STAY CONNECTED</motion.div>
        <div className='flex gap-10 md:gap-[7.5rem] p-10 relative'>
            <motion.div
            initial={{opacity:0, y:100}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:1,delay:.1,type:"spring", mass:1, stiffness:100}}
            className="after:content-['LinkedIn'] after:absolute after:bottom-4 after:opacity-0 after:text-blue-800 text-[1rem] flex justify-center items-center flex-col hover:after:opacity-100 hover:after:duration-500">
                <a href="https://www.linkedin.com/in/07nikhilraj/" target='_blank' rel="noreferrer">
                <FaLinkedin className="hover:text-blue-800 hover:cursor-pointer duration-300 text-[2rem]" />
                </a>
            </motion.div>
            <motion.div 
            initial={{opacity:0, y:100}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:1,delay:.2,type:"spring", mass:1, stiffness:100}}
            className="after:hover:content-['GitHub'] after:absolute after:bottom-4 after:opacity-0 after:text-slate-800 text-[1rem] flex justify-center items-center flex-col hover:after:opacity-100 hover:after:duration-500">
                <a href="https://github.com/07nikhilraj" target='_blank' rel="noreferrer">
                <FaGithub className='hover:text-slate-800 hover:cursor-pointer duration-300 text-[2rem]'/>
                </a>
            </motion.div>
            <motion.div 
            initial={{opacity:0, y:100}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:1,delay:.3,type:"spring", mass:1, stiffness:100}}
            className="after:hover:content-['Twitter'] after:absolute after:bottom-4 after:opacity-0 hover:text-sky-400 text-[1rem] flex justify-center items-center flex-col hover:after:opacity-100 hover:after:duration-500"> 
                <a href="https://twitter.com/12nikhilraj" target='_blank' rel="noreferrer">
                <FaTwitter className='hover:text-sky-400 hover:cursor-pointer duration-300 text-[2rem]'/>
                </a>
            </motion.div>
            <motion.div 
            initial={{opacity:0, y:100}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:1,delay:.4,type:"spring", mass:1, stiffness:100}}
            className="after:hover:content-['Facebook'] after:absolute after:bottom-4 after:opacity-0 hover:text-blue-800 text-[1rem] flex justify-center items-center flex-col hover:after:opacity-100 hover:after:duration-500">
                <a href="https://www.facebook.com/07nikhilraj" target='_blank' rel="noreferrer">
                <FaFacebook className='hover:text-blue-800 hover:cursor-pointer duration-300 text-[2rem]'/>
                </a>
            </motion.div>
        </div>
        <motion.div
        initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:1}} className='font-mono'
        ><span className='oldstyle-nums'>2023</span> Nikhil Raj</motion.div>
        <motion.div className='p-1 pb-20'
        initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:1}}
        >   
            Made with
            <Typed className='pl-1 text-red-400 font-mono font-bold'
            strings={[
                '❤️',
                'HTML',
                'Tailwind CSS',
                'JavaScript',
                'React',
                'Framer-Motion'
            ]}
                typeSpeed={40}
                backSpeed={50}
                loop >
            </Typed>
        </motion.div>
        </div>
    </div>
  )
}

export default Footer
