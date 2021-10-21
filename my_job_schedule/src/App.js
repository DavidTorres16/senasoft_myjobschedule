import './App.css';
import IndexPage from './modules/IndexPage/IndexPage';
import Registry from './components/Registry/Registry';
import PatientAsignationCardVent from './components/PatientAsignationCard/PatientAsignationCard';
import Login from './components/Login/Login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
  return (
    <div className="container App">
      <Router>
        <div className="d-flex justify-content-center align-items-center w-100 h-100">
            <Switch>
                <Route path="/staffRegistry" component={Registry}/>
                <Route path="/prueba" component={IndexPage}/>
                <Route path="/" component={Login}/>
            </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
