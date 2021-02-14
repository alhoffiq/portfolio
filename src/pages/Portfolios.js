import projects from '../assets/projects';
import Projects from '../components/Projects'

function Portfolio() {
    return (
        <section className="container">
            <div className="row">
                <div className="col-md-6">
                    <h2 id="header">Portfolio</h2>
                </div>
            </div>
            <ol>
                {projects.map(project => {
                    return (
                        <Projects project={project} key={project.name} />
                    );
                })}
            </ol>
        </section>
    );
}

export default Portfolio;
