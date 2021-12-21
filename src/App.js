import './App.css';
import { StoreIndex, StoreShow } from './components';
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <h1>Ustore</h1>
    <Switch>
        <Route path="/stores/:id"><StoreShow/></Route>
        <Route exact path="/stores"><StoreIndex/></Route>
    </Switch>    
    </>
  );
}

export default App;
