import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTextContainer">
      <div className="headerTitles">
        <span className="headerTitleLg">MICHAEL SOULIMAN</span>
        <span className="headerTitleSm">ENGINEER</span>
      </div>
      <div className="headerInfo">
      <div className="headerText">
        <span className="headerTextLg">ABOUT ME</span>
        <span className="headerTextSm">
          I'm a student at Stanford studying computer science interested in the
          intersection of education, NLP, and equity in tech. I love to get
          hands on with my projects and build new stuff to not only learn how
          to, but to share that knowledge with others. I work with everything
          tech, from basic circuit design to full stack web developement, and
          don't shy away from a new challenge. Feel free to browse my projects
          and don't hesitate to reach out via email or LinkedIn!
        </span>
      </div>
      <div className="headerText">
        <span className="headerTextLg">CONTACT ME</span>
        <div className="contactMeIcons">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/michaelsouliman/"
          >
            <i className="headerIcon fa-brands fa-linkedin"></i>
          </a>
          <a target="_blank" href="https://github.com/michaelsouliman">
            <i className="headerIcon fa-brands fa-github"></i>
          </a>
          <a target="_blank" href="mailto:msoul@stanford.edu">
            <i className="headerIcon fa-solid fa-square-envelope"></i>
          </a>
        </div>
      </div>
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
