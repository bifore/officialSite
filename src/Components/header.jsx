// import BiforeLogo from "../Assets/images/filename.png"

function Header(){
    return(

        <nav className="navbar navbar-expand-lg sticky-top">
            <div className="container-md">
                <a className="navbar-brand nav-size nav-text-color" href="#home" id="home">bifore</a>
                <button className="navbar-toggler text-light custom-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                {/* <span className="navbar-toggler-icon"></span> */}
                <span className="toggler-icon top-bar"></span>
                <span className="toggler-icon middle-bar"></span>
                <span className="toggler-icon bottom-bar"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto text-center gap-3">
                    <li className="nav-item">
                    <a className="nav-link active nav-text-color" href="#home" id="home">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active nav-text-color" href="#about">Who we are ?</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active text-white glass" href="#products">Products</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;