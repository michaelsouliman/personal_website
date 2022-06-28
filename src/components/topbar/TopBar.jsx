import "./topbar.css";
import {Link} from "react-router-dom";

export default function TopBar() {
  
    const user = false;
    return (
    <div className="top">
        <div className="topLeft">
            <i className="topIcon fa-brands fa-facebook-square"></i>
            <i className="topIcon fa-brands fa-instagram-square"></i>
            <i className="topIcon fa-brands fa-twitter-square"></i>
            <i className="topIcon fa-brands fa-tiktok"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem"><Link className="link" to="/">HOME</Link></li>
                <li className="topListItem"><Link className="link" to="/">ABOUT</Link></li>
                <li className="topListItem"><Link className="link" to="/">CONTACT</Link></li>
                <li className="topListItem"><Link className="link" to="/write">WRITE</Link></li>
                <li className="topListItem">{user && "LOGOUT"}</li>
            </ul>
        </div>
        <div className="topRight">
            {
                user ? (<img className="topImg" src="https://media-exp1.licdn.com/dms/image/C5603AQGHQh5Va5Fbyw/profile-displayphoto-shrink_200_200/0/1610845060542?e=1659571200&v=beta&t=nhgCCwxk9vrJ5xYZ-FqNbw3kIbxaM5gRncuuCMxsp0A" alt="" />
                ) : (<ul className="topList">
                    <li className="topListItem"><Link className="link" to="/login">LOGIN</Link></li>
                    <li className="topListItem"><Link className="link" to="/register">REGISTER</Link></li></ul>)
            }
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
