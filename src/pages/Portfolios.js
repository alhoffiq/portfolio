import projects from '../assets/projects';
import Projects from '../components/Projects'

function Portfolio() {
    return (
        <section className="container portfolio rounded">
            <div className="row">
                <div className="col">
                    <h2 className="header text-center">Portfolio</h2>
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
