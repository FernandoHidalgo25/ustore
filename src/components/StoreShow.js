import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { getStore, clearStore } from '../redux/actionCreators'
import { useEffect } from 'react'     
import { Link } from 'react-router-dom'    
import { Comments , CommentForm} from './'  

function StoreShow({getStore, name, url, lat, long, imageUrl, address, kindOfShop, zipCode, clearStore, id}){
    const routeId = useParams().id

    useEffect(() => {
    getStore(routeId)
    //when you return in your useEffect function it will run the component is about to unmount
        return clearStore
        }, [getStore, routeId, clearStore])
    
        const spinner = () => <div className="loader"></div>
        
        const loadedPage = () => <div className="show">
        <a href={url}><h1>{name}</h1></a>
        <img src={imageUrl} alt={name}/>
        <p>{kindOfShop}</p>
        <p>{address}</p>
        <Comments/>
        <Link to={`/stores/${parseInt(routeId) + 1}`}> Go to next Store</Link>
    </div>
        
    return id ? loadedPage() : spinner()
    }

    const mapStateToProps = (state) => {
        return {...state.selectedStore}
    }

export default connect(mapStateToProps, {getStore, clearStore})(StoreShow);