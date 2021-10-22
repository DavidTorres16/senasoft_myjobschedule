import'./Style.css'
import React, {useState,useEffect} from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import verifyUser from '../../components/functions/verifyUser'
import {PatientAsignationCardVent} from '../../components/PatientAsignationCard/PatientAsignationCard'
import LinkAsButtonCard from '../../components/LinkAsButtonCard/LinkAsButtonCard'
import Logout from '../../components/functions/Logout'

const API = process.env.REACT_APP_API;

export default function IndexPage() {

    const [userInSession, setUserInSession] = useState(false)
    const [userData, setUserData] = useState({})
    const [reloadReact, setReloadReact] = useState(false)
    
    const authorizeUser = () =>{
        let rawUserData = localStorage.getItem("token")
        let userInSession = rawUserData != null || "" ?  true : false
        let authorize = false
        if(userInSession){
            authorize = true
        }
        console.log(authorize)
        return authorize
    }


    const getUserData = async() =>{
        if(authorizeUser() === true){
            const res = await fetch(`${API}/indexPage`,{
                headers: {
                    'Authorization':`JSW ${localStorage.getItem("token")}`
                }
            })
            const data = await res.json();
            if(data != null){
                setUserData(JSON.parse(data))
            }
        }
    }

    
    useEffect(() => {
        setUserInSession(verifyUser())
        getUserData()
    }, [])


    return (
        // <div className="container d-flex flex-column justify-content-center align-items-center w-100 h-100">
        //             <div>
        //                 <button className="btn btn-danger" onClick={Logout}>Cerrar sesión</button>
        //             </div>
        //             <div className="column-grid">
        //                 <div>
        //                     <LinkAsButtonCard name="Ingresar datos" url="/" />
        //                 </div>
        //                 <div>
        //                     <LinkAsButtonCard name="Ver calendario" url="/Calendar" />
        //                 </div>
        //                 <div>
        //                     <LinkAsButtonCard name="Crear horario" url="/" />
        //                 </div>
        //                 <div>
        //                     <LinkAsButtonCard name="Modificar personal" url="/modifyStaff" />
        //                 </div>
        //             </div>
        // </div>
        <div  className="d-flex flex-column justify-content-center align-items-center w-100">
            <div className="d-flex justify-content-center align-items-center">
                <div className="d-flex justify-content-center align-items-center">
                    <h1 className="text-light fw-bold">My Job Schedule</h1>
                </div>
                <section className="d-flex justify-content-center align-items-center mb-3 mt-3 w-100">
                    <div className="col-4 justify-content-end align-items-end">
                    <button className="btn btn-danger btn-logout">Cerrar Sesion</button>
                    </div>
                </section>
            </div>
            <div className="container row mb-1">
                <div className="row">
                    <div className="col-md-6 mt-1">
                        <LinkAsButtonCard name="Ingresar datos" url="/" />
                    </div>
                    <div className="col-md-6 mt-1">
                        <LinkAsButtonCard name="Ver calendario" url="/Calendar" />
                    </div>
                </div>
                </div>
                <div className="container row mt-1">
                <div className="row">
                    <div className="col-md-6 mt-1">
                        <LinkAsButtonCard name="Crear horario" url="/" />
                    </div>
                    <div className="col-md-6 mt-1">
                        <LinkAsButtonCard name="Modificar personal" url="/modifyStaff" />
                    </div>
                </div>
            </div>
        </div>
    )
}
