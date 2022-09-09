import { useEffect, useState } from "react";
import Header from "../../components/header/Header"
import Projects from "../../components/projects/Projects";
import "./home.css"
import axios from "axios";
import { useLocation } from "react-router-dom";
import { axiosInstance } from "../../config";

export default function Home() {
  // const [projects, setProjects] = useState([]);
  // const {search} = useLocation();

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const res = await axiosInstance.get("/projects/" + search);
  //     setProjects(res.data);
  //   }
  //   fetchPosts();
  // }, [search]);
  return (
    <>
        <Header />
        <div className="home">
          {/* <Projects projects={projects}/> */}
        </div>
    </>
  )
}
