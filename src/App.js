import './App.css';
import { StoreIndex, StoreShow, Nav, Auth } from './components'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import { autoLogin } from './redux/actionCreators'

function App({user, autoLogin}) {

  useEffect(() => localStorage.token && autoLogin(), [autoLogin])
  
  return (
    <>
    <h1>Ustore</h1>
    <Nav/>
    { user.username ?
    <Switch>
        <Route path="/stores/:id"><StoreShow/></Route>
        <Route exact path="/stores"><StoreIndex/></Route>
        <Route exact path="/"><StoreIndex/></Route>
    </Switch> :
    <Auth/>
    }   
    </>
  );
}

const mapStateToProps = (state) => ({user: state.user})

export default connect(mapStateToProps, {autoLogin})(App);
