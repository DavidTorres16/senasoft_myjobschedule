import './Style.css'
import React, {useEffect, useState} from 'react'
import StaffTable from '../../components/StaffTable/StaffTable'
import Logout from '../../components/functions/Logout'
import { Link } from 'react-router-dom'
import { ReturnButton } from '../../components/ActionButton/ActionButton'

export default function ModifyStaff() {
    return (
        <div>
            <ReturnButton url="IndexPage"/>
            <div>
                <Link className="btn btn-info w-100" to="/staffRegistry">Nuevo registro</Link>
            </div>
            <div>    
                <button className="btn btn-danger w-100" onClick={Logout}>Cerrar sesión</button>
            </div>
            <div className="container w-100">
                <StaffTable/>
            </div>
        </div>
    )
}
