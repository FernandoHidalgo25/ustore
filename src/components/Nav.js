import { NavLink } from 'react-router-dom'

function Nav(){
    return <nav>
        <NavLink to="/stores"><button>See all Stores!!</button></NavLink>
        <br/>
        <button>Logout!</button> 
    </nav>
}

export default Nav;