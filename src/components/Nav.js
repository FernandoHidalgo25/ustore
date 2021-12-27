import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../redux/actionCreators'

function Nav({logout, username}){

    const loggedInRender = () => 
    <nav>
        <NavLink to="/stores"><button>See all Stores!!</button></NavLink>
        <br/>
        <button onClick={logout}>Logout!</button>
    </nav>

    const loggedOutRender = () =>
    <nav>Hello, user please sign in or sign up!</nav>

    return username ? loggedInRender() : loggedOutRender()
}

const mapStateToProps = (state) => ({username: state.user.username})

export default connect(mapStateToProps, {logout})(Nav);