import product from "../Assets/images/product.svg"
import upwave from "../Assets/images/upwave.svg"
import { motion } from "framer-motion"
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from "react"

function Product(){
    useEffect(() => {
        Aos.init({ duration : 1000 })
    }, [])
    return(
        <>
        <section className="welcome-background p-lg-1 px-4 text-center text-md-start" id="product">
            <div className="container">
                <div className="row about product align-items-center justify-content-between">
                    <div className="col-md col-lg-6 my-lg-0 mt-5 mb-4" data-aos="fade-up">
                        <h2 className="mb-4 product-text">Our Product</h2>
                        <p className="lead product-p wel-p-font">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit totam cum, officiis ipsam modi voluptatem!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vel incidunt placeat deleniti obcaecati sed! Magni, laborum quidem.
                        </p>
                        <motion.button 
                            whileHover={{scale:1.05}} 
                            whileTap={{scale:0.95}} 
                            initial={{opacity:0}} 
                            animate={{opacity:1, transition:{duration:1.5}}} 
                            className="btn text-white welcome-glass mt-2"
                            >
                            Read More <i className="bi bi-chevron-right"></i>
                        </motion.button>
                    </div>
                    <div className="col-md mb-lg-0 mb-4">
                        <img src={product} className="img-fluid" alt="about" />
                    </div>
                </div>
            </div>
        </section>
        <section className="m-0 p-0 edit-svg">
        <img src={upwave} alt="svg"/>
        </section>
        </>
    )
}

export default Product