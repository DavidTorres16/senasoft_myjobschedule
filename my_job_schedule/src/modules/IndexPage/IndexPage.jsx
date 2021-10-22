import'./Style.css'
import React, {useState,useEffect} from 'react'
import verifyUser from '../../components/functions/verifyUser'
import {PatientAsignationCardVent} from '../../components/PatientAsignationCard/PatientAsignationCard'
import LinkAsButtonCard from '../../LinkAsButtonCard/LinkAsButtonCard'
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
            console.log("kkkkkkk", data)
            if(data != null){
                console.log(33333, data)
                setUserData(JSON.parse(data))
            }
        }
        alert(userData[0])
    }

    
    useEffect(() => {
        setUserInSession(verifyUser())
        getUserData()
    }, [])


    return (
        <div className="container d-flex justify-content-center align-items-center w-100 h-100">
            <div className="column-grid">
                <LinkAsButtonCard/>
            </div>
        </div>
    )
}
