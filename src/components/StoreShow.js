import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { getStore} from '../redux/actionCreators'
import { useEffect } from 'react'     
import { Link } from 'react-router-dom'    
//import { Comments , CommentForm} from './'  

function StoreShow({getStore, name, url, lat, long, imageUrl, address, kindOfShop, zipCode, clearStore, id}){
    const routeId = useParams().id

    useEffect(() => {
        getStore(routeId)
    }, [getStore, routeId])

    return <div className="show">
    <a href={url}><h1>{name}</h1></a>
    <img src={imageUrl} alt={name}/>
    <p>{kindOfShop}</p>
    <p>{address}</p>
    <Link to={`/stores/${parseInt(routeId) + 1}`}> Go to next Store</Link>
    </div>
}

const mapStateToProps = (state) => {
    return {...state.selectedStore}
}

export default connect(mapStateToProps, {getStore})(StoreShow);