import "./topbar.css"

export default function TopBar() {
  return (
    <div className="top">
        <div className="topLeft">
            <i class="fa-brands fa-facebook-square"></i>
            <i class="fa-brands fa-instagram-square"></i>
            <i class="fa-brands fa-twitter-square"></i>
            <i class="fa-brands fa-tiktok"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">HOME</li>
                <li className="topListItem">ABOUT</li>
                <li className="topListItem">CONTACT</li>
                <li className="topListItem">WRITE</li>
                <li className="topListItem">LOGOUT</li>
            </ul>
        </div>
        <div className="topRight">
            <img src="https://media-exp1.licdn.com/dms/image/C5603AQGHQh5Va5Fbyw/profile-displayphoto-shrink_200_200/0/1610845060542?e=1659571200&v=beta&t=nhgCCwxk9vrJ5xYZ-FqNbw3kIbxaM5gRncuuCMxsp0A" alt="" />
            <i class="fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
