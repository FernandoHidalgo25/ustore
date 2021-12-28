import { useState } from 'react'
import { connect } from 'react-redux'
import { submitComment } from '../redux/actionCreators'

function CommentForm({storeId, submitComment}){

    const [rating, setRating] = useState(5)
    const [content, setContent] = useState("")

    const onSubmit = (e) => {
        e.preventDefault() 
        const newComment = {rating, content}
        submitComment(newComment, storeId)
    }

    return <form className="new_comment" onSubmit={onSubmit}>
        <label>
            Rating:
            <input type="number" name="rating" min="1" max="5" onChange={(e) => setRating(e.target.value)} value={rating}/>
        </label><br/>
        <label>
            Comment:<br/>
            <textarea name="content" onChange={(e) => setContent(e.target.value)} value={content}></textarea>
        </label>
        <input type="submit" value="Submit" />
    </form>
}

const mapStateToProps = (state) => ({storeId: state.selectedStore.id})

export default connect(mapStateToProps, {submitComment})(CommentForm)
