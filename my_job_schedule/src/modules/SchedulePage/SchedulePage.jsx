import React, {useState,useEffect} from 'react'
import StaffSchedule from '../../components/StaffSchedule/StaffSchedule'
import VerifyUser from '../../components/functions/verifyUser'
import { ReturnButton } from '../../components/ActionButton/ActionButton';
const API = process.env.REACT_APP_API;

export default function SchedulePage() {

    return (
        <div>
            <div>
                <ReturnButton url="/IndexPage"/>
            </div>
            <div>
                <StaffSchedule/>
            </div>
        </div>
    )
}
