import { useEffect, useState } from "react"
import "./sidebar.css"
import axios from "axios"
import { Link } from "react-router-dom";
import { axiosInstance } from "../../config";

export default function Sidebar() {
  const [cats, setCats] = useState([]);
  
  useEffect(() => {
    const getCats = async () => {
      const res = await axiosInstance.get("/categories");
      setCats(res.data);
    }
    getCats();
  }, []);
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle"> ABOUT ME</span>
            <img src="https://media-exp1.licdn.com/dms/image/C5603AQGHQh5Va5Fbyw/profile-displayphoto-shrink_200_200/0/1610845060542?e=1659571200&v=beta&t=nhgCCwxk9vrJ5xYZ-FqNbw3kIbxaM5gRncuuCMxsp0A" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
            {cats.map((c) => (
              <Link className="link" to={`/?cat=${c.name}`}><li className="sidebarListItem">{c.name}</li></Link>
            ))}
        </ul>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span> 
        <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-facebook-square"></i>
            <i className="sidebarIcon fa-brands fa-instagram-square"></i>
            <i className="sidebarIcon fa-brands fa-twitter-square"></i>
        </div>
        </div>
    </div>
  )
}
