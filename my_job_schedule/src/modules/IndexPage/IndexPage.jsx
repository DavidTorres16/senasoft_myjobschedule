import'./Style.css'
import React, {useState,useEffect} from 'react'
import verifyUser from '../../components/functions/verifyUser'
import {PatientAsignationCardVent} from '../../components/PatientAsignationCard/PatientAsignationCard'
const API = process.env.REACT_APP_API;

export default function IndexPage() {

    const [userInSession, setUserInSession] = useState(false)
    const [userData, setUserData] = useState([])
    
    const authorizeUser = () =>{
        const authorize = userInSession ? true :  false
        return authorize
    }

    const getUserData = async () =>{
        if(authorizeUser()){
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
        <div className="container d-flex justify-content-center align-items-center w-100 h-100">
            <h1>{userData[0]}</h1>
            <PatientAsignationCardVent styles="1"/>
            <PatientAsignationCardVent styles="2"/>
            <PatientAsignationCardVent styles="3"/>
            <PatientAsignationCardVent styles="4"/>
        </div>
    )
}
