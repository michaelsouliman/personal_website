import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleLg">MICHAEL SOULIMAN</span>
        <span className="headerTitleSm">ENGINEER</span>
        <div className="headerText">
          <span className="headerTextLg">ABOUT ME</span>
          <span className="headerTextSm">
            I'm a student at Stanford studying computer science, and I'm
            interested in the intersection of education, NLP, and equity in
            tech. I love to get hands on with my projects and build new stuff
            to not only learn how to, but to share that knowledge with others. 
            I work with everything tech, from basic circuit design to full stack web
            developement, and don't shy away from a new challenge. Feel free to browse my
            projects and don't hesitate to reach out via email or LinkedIn!  
          </span>
        </div>
      </div>
      <div className="headerImgContainer">
        <img
          className="headerImg"
          src="https://i.imgur.com/CbU6CYO.jpg"
          alt=""
        ></img>
      </div>
    </div>
  );
}
