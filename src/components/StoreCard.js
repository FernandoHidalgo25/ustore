export default function StoreCard({name, image_url, kindOfShop}){

    return <div className="card">
        <h3>{name}</h3>
        <img src={image_url} alt={name}/>
        <p>{kindOfShop}</p>
    </div>
}