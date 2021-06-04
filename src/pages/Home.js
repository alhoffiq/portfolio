import Me from "../assets/images/Selfie.jpg";
import Image from "react-bootstrap/Image";
import Skills from "../components/Skills";
import badge from "../assets/badge.json";

function Home() {
    return (
        <div>
            <section className="container home rounded">
                <div className="row">
                    <div className="col">
                        <h2 className="header text-center">About Me!</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 text-center">
                        <Image className="img-fluid" src={Me} alt="Me!" roundedCircle fluid />
                    </div>
                    <div className="col-md-8">
                        <p className="big">Hello! I'm Andrew Hoff and I'm a former a pharmacy technician for Walgreens but I am eager to start my web develoment career. I've gained my current skills from graduating University of Arizona's Web Development Bootcamp and I'm always learning more on my own.</p>
                        <br></br>
                        <p className="big">I grew up in front of a computer screen and I always knew I'd have a career making them work. I'm always wondering how things work and I enjoy breaking things down into their parts to figure out every one of their roles and how the accomplish them. I'm constantly looking at my computer wondering just how it's doing what it's doing and even with my knowledge of them I'm convinced it's just magic.</p>
                        <br></br>
                        <p className="big">In my spare time I play video games with my friends, watch videos of others doing the same online, and go out enjoying time with my family.</p>
                    </div>
                    <div className="col-md-1">
                        <a href={badge.id} target="_blank" rel="noreferrer"><img className="badge rounded" src={badge.image.id} alt="badge"></img></a>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h2 className="header text-center seeWork">See some of my work!</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <a className="btn btn-dark mx-auto" href="/portfolio/#/portfolios">View projects</a>
                    </div>
                </div>
            </section>
            <Skills />
        </div>
    );
}

export default Home;
