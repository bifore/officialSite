
import team from "../Assets/images/team.svg"

function About(){
    return(
        <section className="p-lg-1 px-4 text-start" id="about">
            <div className="container">
                <div className="row about flex-column-reverse flex-lg-row align-items-center justify-content-between">
                    <div className="col-md-6 mb-lg-0 mb-4">
                        <img src={team} className="img-fluid" alt="about" />
                    </div>
                    <div className="col-md-8 col-lg-6">
                        <h2 className="mb-4 about-text">About bifore<span class="heart ms-2">❤️</span></h2>
                        <p className="lead welcome-p">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit totam cum, officiis ipsam modi voluptatem!
                        </p>
                        <p className="lead welcome-p">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vel incidunt placeat deleniti obcaecati sed! Magni, laborum quidem.
                        </p>
                        <p className="lead welcome-p">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis in a voluptatum harum? Quia odit doloremque accusantium sit accusamus.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;