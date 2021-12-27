function CommentCard({username, rating, content}){
    return <div className="comment">
      <p>{username} says: {rating} stars!</p>
      <p>{content}</p>
    </div>
  }
  
  export default CommentCard;