import { Link } from 'react-router-dom'

export default function storeCard({id, name, imageUrl, kindOfShop}){

    return <div className="card">
        <Link to={`/stores/${id}`}><h3>{name}</h3></Link>
        <Link to={`/stores/${id}`}><img src={imageUrl} alt={name}/></Link>
        <p>{kindOfShop}</p>
    </div>
}