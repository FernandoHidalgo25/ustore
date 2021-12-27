import { connect } from 'react-redux'
import { CommentCard } from '../components'

function Comments({comments}){
    return <div className="comments">
        {comments.map(comment => <CommentCard {...comment} key={comment.id} />)}
    </div>
}


const mapStateToProps = (state) => ({comments: state.selectedStore.comments})

export default connect(mapStateToProps)(Comments)