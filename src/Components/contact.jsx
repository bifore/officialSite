
function Contact(){
    return(
        <section className="background p-lg-5 p-4" id="contact">
            <div className="container">
            <div className="row">
                <div className="col-md mb-3">
                    <h3 className="mb-4 contact-font">
                        bifore
                    </h3>
                    <button className="btn btn-primary mb-4 contact-btn">Get a Proposal</button>
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
                    <a href="#location" className="contact d-flex"><i class="bi bi-geo-alt-fill"></i> locate us</a>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Contact