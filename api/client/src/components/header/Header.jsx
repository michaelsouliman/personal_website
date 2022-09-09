import "./header.css"

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleLg">Hi, I'm Michael!</span>
            <span className="headerTitleSm">I'm studying computer science and education at Stanford, and I'm interested in the intersection of education, NLP, and equity in tech.</span> 
            <span className="headerProjects">Click here to see some of my work!</span>   
        </div>
        <img className ="headerImg" src="https://i.ibb.co/Lxkjfqf/IMG-6576.jpg" alt=""></img>    
    </div>
  )
}
