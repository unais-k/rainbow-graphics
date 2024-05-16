import React from 'react'
import '../RainbowHome/rainbowhome.scss'
import { animate,motion } from 'framer-motion'

const textVariants={
    initial:{
        x:-500,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1,
        }
    }
}

const sliderVariants={
    initial:{
        x:0,
    },
    animate:{
        x:'-220%',
        transition:{
            repeat:Infinity,
            repeatType:'mirror',
            duration:20,
        }
    }
}


function RainbowHome() {
    return (
        <div className='hero'>
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial='initial' animate='animate'>
                    <motion.h2  variants={textVariants}>RAINBOW GRAPHICS</motion.h2>
                    <motion.h1  variants={textVariants}>The Compleate Graphics Designing  </motion.h1>
                    <motion.div  variants={textVariants} className="buttons">
                        <motion.button  variants={textVariants}>See the our works</motion.button>
                        <motion.button  variants={textVariants}>Contact Me</motion.button>
                    </motion.div>
                </motion.div>
            </div>
            <motion.div className="slidingTextContainer" variants={sliderVariants} initial='initial' animate='animate'>
                Compleate Printing Solution
            </motion.div>
            <div className='imageContainer'>
                <img src="/pintedimages.png" alt="" />
            </div>

        </div>
    )
}

export default RainbowHome
