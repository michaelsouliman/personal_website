import Single_Project from "../../components/single_project/Single_Project"
import "./projects_page.css"

export default function Projects_Page() {
  const sample_project = {title: "MERN Stack Challenge",
                          date: "June 2022",
                          desc: "           Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi vel beatae accusamus numquam laboriosam voluptatum id natus ea! Voluptatem alias eveniet nihil necessitatibus, tempore et voluptates aliquid quisquam harum aperiam?                          "};
    return (
    <div className="projects_page">
        <div className="projects_title">My Projects</div>
        <div className="projects_container">
           <Single_Project project={sample_project}/>
           <Single_Project project={sample_project}/>
           <Single_Project project={sample_project}/>
        </div>
    </div>
  )
}
