import React from 'react'
import { animate, motion,useInView } from 'framer-motion'
import '../AboutPage/aboutpage.scss'
import { useRef } from 'react'

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    }
}

function AboutPage() {
    const ref = useRef();
    const isInView= useInView (ref,{margin:'-100px'})
    return (
        <motion.div
            className='aboutpage'
            variants={variants}
            initial='initial'
            // animate='animate'
            // whileInView='animate'
            ref={ref}
            animate={isInView && 'animate'}

        >
            <motion.div className='textContainer'>
                <p>
                    I focus on helping your brand grow
                     <br />and move forward
                </p>
                <hr />
            </motion.div>

            <motion.div className='titleContainer' variants={variants}>
                <div className="title">
                    <img src="/printer.jpg" alt="" />
                    <h1>
                        What  <motion.b whileHover={{color:'orange'}}>About</motion.b>
                    </h1>
                </div>

                <div className="title">
                    <h1>
                        <motion.b whileHover={{color:'orange'}}>Us </motion.b> and.
                    </h1>
                    <button>WHAT WE DO?</button>
                </div>

                <motion.div className='texx' variants={variants}>
                    <h1 href="">Rainbow Graphix offers you the most convenient, elegant, economical and efficient way of designing and printing. Since 2022, we have been offering our dear customers with the best digital printing solutions. Here with full-fledged employees & hitech machines, we assure the finest services to our clients. We provide all in one solutions like administration, marketing, stores, pre-press, press, post press etc. with a pulse of new products and customer demands. We provide your ads as a finesh one swiftly without any delay. As a digital printing solutions, we provide the choices with a constant focus on delivering unparalleled value to our customers.</h1>
                </motion.div>


            </motion.div>
            <motion.div className='listContainer'></motion.div>
        </motion.div>
    )
}

export default AboutPage
