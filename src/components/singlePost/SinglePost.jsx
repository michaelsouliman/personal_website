import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img src="" alt="" className="singlePostImg" />
            <h1 className="singlePostTitle">
                Lorem 
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-solid fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author : <b>Michael</b></span>
                <span className="singlePostDate">1 Hour ago</span>
            </div>
            <p className="singlePostDesc">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi reprehenderit maiores doloribus nesciunt, dolores id officiis quaerat fugit culpa vel! Praesentium explicabo animi libero reiciendis, fuga eaque quidem atque qui?

            </p>
        </div>
    </div>
  )
}
