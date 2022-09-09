import "./projects.css"
import Single_Project from "../single_project/Single_Project"

export default function Projects({projects}) {
  return (
    <div className="projects">
        {projects.map(p => (
            <Single_Project project={p}/>
        ))}
    </div>
  )
}
