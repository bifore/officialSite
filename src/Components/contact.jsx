
function Contact(){
    return(
        <section className="background p-lg-5 p-4" id="contact">
            <div className="container">
            <div className="row position-relative">
                <div className="col-md mb-3">
                    <h3 className="mb-4 contact-font">
                        bifore
                    </h3>
                    <button className="btn btn-primary mb-4 contact-btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Get a Proposal</button>
                    <div className="d-flex">
                        <a className="cursor" href="#git"><i class="bi bi-github h4 mx-2 "></i></a>
                        <a className="cursor" href="#git"><i class="bi bi-linkedin h4 mx-2 "></i></a>
                        <a className="cursor" href="#git"><i class="bi bi-facebook h4 mx-2 "></i></a>
                    </div>
                </div>
                <hr className="d-md-none"/>
                <div className="col-md">
                    <h4 className="mb-3 contact-font">Quick Links</h4>
                    <div><a href="#about" className="link"><i className="bi bi-chevron-right"></i>Who we are?</a></div>                   
                    <div><a href="#contact" className="link"><i className="bi bi-chevron-right"></i>Contact us</a></div>                   
                    <div><a href="#product" className="link"><i className="bi bi-chevron-right"></i>Product</a></div>                   
                </div>
                <hr className="d-md-none"/>
                
                <div className="col-md">
                    <h4 className="mb-4 contact-font">Contact us</h4>
                    <p className="contact"><i class="bi bi-telephone-fill"></i> 01515313</p>
                    <p><a href="mailto:bifore.inc@example.com" className="contact"><i class="bi bi-envelope-fill"></i> bifore.inc@gmail.com</a></p>
                    <p><a href="https://www.google.com/maps/place/P.T.C.+Bus+Stop/@12.933773,80.2305277,17z/data=!3m1!4b1!4m5!3m4!1s0x3a525cf80dd945bf:0x1f8b2db697fb062f!8m2!3d12.933773!4d80.2327164" className="contact d-flex" target="blank"><i class="bi bi-geo-alt-fill"></i> locate us</a></p>
                </div>

                <div>
                <a href="#top" class="position-absolute bottom-0 end-0">
                    <i class="bi bi-arrow-up-circle h1"></i>
                </a>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Contact