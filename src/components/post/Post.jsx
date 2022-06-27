import "./post.css"

export default function Post() {
  return (
    <div className="post"> 
        <img className="postImg" src="" alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">Title</span>
            <hr/>
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, omnis dolor? Eligendi aliquam maxime totam eos cumque dicta, vero minima dolores a labore! Placeat sapiente dignissimos rerum repellat, ullam autem?
        </p>
    </div>
  )
}
