import "./single_project.css"

export default function Single_Project({project}) {
  return (
    <div className="single_project">
        <div className="projectInfo">
            <span className="projectTitle">{project.name}</span>
            <span className="projectDate">{project.date}</span>
            <p className="projectDesc">{project.desc}</p>
        </div>
        <div className="imageContainer">
        <img className="projectImg" src="https://i.ibb.co/Lxkjfqf/IMG-6576.jpg" alt=""></img>
        </div>
    </div>
  )
}
