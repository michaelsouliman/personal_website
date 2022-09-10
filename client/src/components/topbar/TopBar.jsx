import "./topbar.css";
import {Link} from "react-router-dom";

export default function TopBar() {
    return (
    <div className="top">
        <div className="topLeft">
        <a target="_blank" href="https://www.linkedin.com/in/michaelsouliman/"><i className="topIcon fa-brands fa-linkedin"></i></a>
        <a target="_blank" href="https://github.com/michaelsouliman"><i className="topIcon fa-brands fa-github"></i></a>
        <a target="_blank" href="mailto:msoul@stanford.edu"><i className="topIcon fa-solid fa-square-envelope"></i></a>
        </div>
        <div className="topRight">
        <ul className="topList">
                <li className="topListItem"><Link className="link" to="/">About</Link></li>
                <li className="topListItem"><Link className="link" to="/projects">Projects</Link></li>
                <li className="topListItem"><a className="resumeLink" target="_blank" href="https://drive.google.com/file/d/1zpHg-85PXfny-qG4ITrvfOdHSShlJuyN/view?usp=sharing">Resume</a></li>
            </ul>
        </div>
    </div>
  )
}
