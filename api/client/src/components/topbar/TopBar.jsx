import "./topbar.css";
import {Link} from "react-router-dom";

export default function TopBar() {
    return (
    <div className="top">
        <div className="topLeft">
            <i className="topIcon fa-brands fa-linkedin"></i>
            <i className="topIcon fa-brands fa-instagram-square"></i>
            <i className="topIcon fa-brands fa-twitter-square"></i>
        </div>
        <div className="topRight">
        <ul className="topList">
                <li className="topListItem">About</li>
                <li className="topListItem">Projects</li>
                <li className="topListItem">Resume</li>
            </ul>
        </div>
    </div>
  )
}
