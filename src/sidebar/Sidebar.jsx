import "./sidebar.css"

export default function Sidebar() {
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
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Sport</li>
            <li className="sidebarListItem">Cinema</li>
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem">Style</li>

        </ul>
        </div>
    </div>
  )
}
