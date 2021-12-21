export default function StoreCard({name, imageUrl, kindOfShop}){

    return <div className="card">
        <h3>{name}</h3>
        <img src={imageUrl} alt={name}/>
        <p>{kindOfShop}</p>
    </div>
}