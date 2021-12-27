import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../redux/actionCreators'

function Nav({logout}){
    return <nav>
        <NavLink to="/stores"><button>See all Stores!!</button></NavLink>
        <br/>
        <button onClick={logout}>Logout!</button> 
    </nav>
}

export default connect(null, {logout})(Nav);