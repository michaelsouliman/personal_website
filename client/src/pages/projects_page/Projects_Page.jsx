import Single_Project from "../../components/single_project/Single_Project"
import "./projects_page.css"
import projects from"../../data/projects.json"

export default function Projects_Page() {
  const projects_to_load = projects;

  return (
    <div className="projects_page">
        <div className="projects_title">MY PROJECTS</div>
        <div className="projects_container">
           {projects_to_load.map(p => (
            <Single_Project project={p}></Single_Project>
            ))}
        </div>
    </div>
  )
}
