import'./Style.css'
import React from 'react'
import Login from '../../components/Login/Login'
import PatientAsignationCard from '../../components/PatientAsignationCard/PatientAsignationCard'
import Registry from '../../components/Registry/Registry'
import StaffSchedule from '../../components/StaffSchedule/StaffSchedule'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

export default function IndexPage() {
    return (
        <div className="container d-flex justify-content-center align-items-center w-100 h-100">
            <Router>
                <div className="d-flex justify-content-center align-items-center w-100 h-100">
                    <Switch>
                        <Route path="/staffRegistry" component={Registry}/>
                        <Route path="/prueba" component={PatientAsignationCard}/>
                        <Route path="/" component={Login}/>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}
