import Me from "../../assets/images/Selfie.jpg";

function Home() {
    return (
        <section class="container">
            <div class="row">
                <div class="col-md-6">
                    <h2 id="header">About Me!</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <img class="img-fluid" src={Me} alt="Me!"></img>
                </div>
                <div class="col-md-6">
                    <h4 class="text-center" id="title">Full-Stack Web Developer</h4>
                    <p class="text-center">
                        Hello! My name is Andrew Hoff. I am a 22 year old husband and father of 1 son. I was born in Texas
                        and after moving around a couple times I ended up here in Arizona. I currently work at Walgreens as
                        a pharmacy technician however I am eagar to leave this field in pursuit of my career in software
                        development. Most of my spare time is spent with either my family or on the computer playing games
                        with my friends. Some other hobbies of mine include playing the cello, building computers, and
                        helping my wife run her shop where she sells little charms.
                </p>
                </div>
            </div>
        </section>
    );
}

export default Home;