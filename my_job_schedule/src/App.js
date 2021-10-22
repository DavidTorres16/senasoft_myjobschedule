import './App.css';
import React, {useState,useEffect} from 'react';
import IndexPage from './modules/IndexPage/IndexPage';
import Registry from './components/Registry/Registry';
import PatientAsignationCardVent from './components/PatientAsignationCard/PatientAsignationCard';
import Login from './components/Login/Login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import StaffSchedule from './components/StaffSchedule/StaffSchedule';
import VerifyUser from './components/functions/verifyUser';
import ModifyStaff from './modules/ModifyStaff/ModifyStaff';
import IngresarDatos from './modules/IngresarDatos/IngresarDatos';


function App() {

  const [userInSession, setUserInSession] = useState(false)

  setInterval(() => {
    if(VerifyUser()){
      setUserInSession(true)
    }else{
      setUserInSession(false)
    }
  },1000);


  useEffect(() => {
    if(VerifyUser()){
      setUserInSession(true)
    }
  },[])

  return (
    <div className="container App">
      <Router>
        <div className="d-flex justify-content-center align-items-center w-100 h-100">
          {
            userInSession
            ?
            <Switch>
                <Route path="/IndexPage" component={IndexPage}/>
                <Route path="/insertData" component={IngresarDatos}/>
                <Route path="/calendar" component={StaffSchedule}/>
                <Route path="/modifyStaff" component={ModifyStaff}/>
            </Switch>
            :
            <Switch>
                <Route path="/staffRegistry" component={Registry}/>
                <Route path="/" component={Login}/>
            </Switch>
            }
        </div>
      </Router>
    </div>
  );
}

export default App;
