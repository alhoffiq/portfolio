const Projects = ({ project }) => {
    return (
        <li key={project.name}>
            <div className="card">
                <div className="row">
                    <div className="col-md">
                        <h2 className="text-center project-title">{project.name}</h2>
                        <img className="img-fluid" src={project.img} alt={project.name}></img>
                        <p className="text-center">{project.description}</p>
                        <div className="card-footer">
                            <div className="row">
                                <div className="col">
                                    <h5 className="text-center"><a href={project.link} target="_blank" rel="noreferrer">Visit the site here!</a></h5>
                                </div>
                                <div className="col">
                                    <h5 className="text-center"><a href={project.github} target="_blank" rel="noreferrer">View Github repo here!</a></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default Projects;