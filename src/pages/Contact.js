function Contact() {
    return (
        <section className="container rounded">
            <div className="row">
                <div className="col">
                    <h2 className="header text-center">Contact me!</h2>
                </div>
            </div>
            <div className="row">
                <div className="col mx-auto">
                    <div className="card">
                        <p className="card-text text-center contact">View all my work on GitHub</p>
                        <p className="card-text text-center contact">Connect with me on LinkedIn</p>
                        <p className="card-text text-center contact">See my resume</p>
                        <p className="card-text text-center contact">Send me an email</p>
                    </div>
                </div>
                <div className="col mx-auto">
                    <div className="card">
                        <div className="list-group">
                            <a href="https://github.com/alhoffiq" className="list-group-item list-group-item-action text-center" target="_blank" rel="noreferrer">Github: alhoffiq</a>
                            <a href="https://www.linkedin.com/in/andrew-hoff-12b4a61b3/" className="list-group-item list-group-item-action text-center" target="_blank" rel="noreferrer">LinkedIn</a>
                            <a href="https://docs.google.com/document/d/1DHSTkMWxxxCFN6Ovv9eOYqgtJe8nAvcUo2VF_yZFAhg/edit?usp=sharing" className="list-group-item list-group-item-action text-center" target="_blank" rel="noreferrer">Resume</a>
                            <a href="mailto:andrew.hoff14@yahoo.com" className="list-group-item list-group-item-action text-center">Email</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
