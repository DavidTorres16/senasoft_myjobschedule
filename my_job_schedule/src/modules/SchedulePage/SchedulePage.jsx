import React, {useState,useEffect} from 'react'
import StaffSchedule from '../../components/StaffSchedule/StaffSchedule'
import VerifyUser from '../../components/functions/verifyUser'
import { DangerActionButton } from '../../components/ActionButton/ActionButton';
const API = process.env.REACT_APP_API;

export default function SchedulePage() {

    const [staffData,setStaffData] = useState([])
    const [userInSession, setUserInSession] = useState(false)

    const getStaffData = async() =>{
        if(userInSession){
            const res = await fetch(`${API}/staffSchedule`,{
                'Authorization':`JSW ${localStorage.getItem("token")}`
            })
            const data = await res.json();
            if(data != null){
                setUserData(JSON.parse(data))
            }
        }
    }

    useEffect(() => {
        setUserInSession(VerifyUser())
        getStaffData()
    }, [])




    return (
        <div>
            <div>
                <DangerActionButton />
            </div>
            <div>
                <StaffSchedule/>
            </div>
        </div>
    )
}