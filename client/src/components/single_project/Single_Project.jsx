import "./single_project.css"

export default function Single_Project({project}) {
  const projectDesc = project.desc;

  
  return (
    <div className="single_project">
        <div className="projectInfo">
        <a target="_blank" href={project.link}><span className="projectTitle">{project.name}</span></a>
            <span className="projectDate">{project.date}</span>
            {projectDesc.map(p => (
              <p className="projectDesc">{p}</p>
            ))}
        </div>
        <div className="imageContainer">
        <img className="projectImg" src={project.img} alt=""></img>
        </div>
    </div>
  )
}
