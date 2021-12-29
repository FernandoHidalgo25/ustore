function CommentCard({username, rating, content}){
    return <div className="comment">
      <p>{username} says: {rating} stars!</p>
      <p>{content}</p>
      <input type="submit" value="edit" />
      <input type="submit" value="delete" />
    </div>
  }
  
  export default CommentCard;