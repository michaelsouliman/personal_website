import "./single_project.css"

export default function Single_Project({project}) {
  return (
    <div className="project">
        <div className="projectInfo">
            <span className="projectTitle">project.title</span>
            <span className="projectDate">project.date</span>
        </div>
        <p className="projectDesc">{project.desc}</p>
    </div>
  )
}
