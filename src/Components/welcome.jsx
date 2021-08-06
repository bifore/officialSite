import rocket from "../Assets/images/paper_rocket 1.png"
import wave from "../Assets/images/wave3.svg"
import { motion } from "framer-motion"

function Welcome(){

    const fadeLeft = {
        hidden:{opacity:0, x:-100},
        visible:{opacity:1, x:0}
    };
    const fadeRight = {
        hidden:{opacity:0, x:100},
        visible:{opacity:1, x:0}
    };

    return(
        <>
        <section className="welcome-background p-lg-5 py-5 px-4 text-center text-sm-start">
            <div className="container">
                <div className="d-sm-flex text-white align-items-center justify-content-between">
                    <div className="">
                        <motion.h2 initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className="mb-4 welcome-font">Welcome to bifore</motion.h2>
                        <motion.p variants={fadeLeft} initial='hidden' animate='visible' transition={{duration:1}} className="lead mb-4 wel-p-font">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus in consequuntur.
                        </motion.p>
                        <motion.button whileHover={{scale:1.05}} whileTap={{scale:0.95}} initial={{opacity:0}} animate={{opacity:1, transition:{duration:1.5}}} className="btn text-white welcome-glass">Get a Proposal</motion.button>
                    </div>
                    <div className="">
                        <img src={rocket} className="img-fluid" id="rocket" alt="rocket"/>
                    </div>
                    <div>
                        <motion.div variants={fadeRight} initial='hidden' animate='visible' transition={{duration:1}} class="row d-none d-md-block">
                            <a href="#git" class="btn"><i class="bi bi-github h3 text-white"></i></a>
                        </motion.div>
                        <motion.div variants={fadeRight} initial='hidden' animate='visible' transition={{duration:1.3}} class="row d-none d-md-block">
                            <a href="#face" class="btn"><i class="bi bi-facebook h3 text-white"></i></a>
                        </motion.div>
                        <motion.div variants={fadeRight} initial='hidden' animate='visible' transition={{duration:1.6}} class="row d-none d-md-block">
                            <a href="#twit" class="btn"><i class="bi bi-twitter h3 text-white"></i></a>
                        </motion.div>
                        <motion.div variants={fadeRight} initial='hidden' animate='visible' transition={{duration:1.9}} class="row d-none d-md-block">
                            <a href="#google" class="btn"><i class="bi bi-linkedin h3 text-white"></i></a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <img src={wave} alt="svg"/>
        </section>
        </>
    )
}

export default Welcome;