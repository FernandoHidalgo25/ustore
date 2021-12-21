import { useEffect } from "react"
import { getStores } from '../redux/actionCreators'
import { connect } from 'react-redux'
import { StoreCard } from "../components"


function StoreIndex({getStores, stores}){

    useEffect(getStores, [getStores])

    return <div className="cards">
        {stores.map(store => <StoreCard {...store} key={store.id}/>)}
    </div>
}

const mapStateToProps = (state) => {
    return {stores: state.stores}
}

export default connect(mapStateToProps, { getStores })(StoreIndex)