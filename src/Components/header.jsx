// import BiforeLogo from "../Assets/images/filename.png"

function Header(){
    return(

        <nav className="navbar navbar-expand-lg nav-background">
            <div className="container-md">
                <a className="navbar-brand nav-size nav-text-color" href="#home">bifore</a>
                <button className="navbar-toggler text-light custom-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                {/* <span className="navbar-toggler-icon"></span> */}
                <span className="toggler-icon top-bar"></span>
                <span className="toggler-icon middle-bar"></span>
                <span className="toggler-icon bottom-bar"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto text-center gap-3">
                    <li className="nav-item">
                    <a className="nav-link active nav-text-color" href="#about">Who we are ?</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active nav-text-color" href="#contact">Contact us</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active text-white glass" href="#product">Product</a>
                    </li>
                    <hr className="nav-text-color"></hr>
                    <li className="nav-item d-lg-none">
                        <p className="nav-text-color lead">Follow us</p>
                        <div className="d-flex justify-content-center">
                            <i class="bi bi-github h3 mx-2 nav-text-color"></i>
                            <i class="bi bi-linkedin h3 mx-2 nav-text-color"></i>
                            <i class="bi bi-facebook h3 mx-2 nav-text-color"></i>
                        </div>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;