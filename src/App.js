import './App.css';
import { StoreIndex, StoreShow, Nav, Auth } from './components'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'


function App(props) {
  console.log(props)
  return (
    <>
    <h1>Ustore</h1>
    <Nav/>
    { props.user.username ?
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

export default connect(mapStateToProps)(App);
