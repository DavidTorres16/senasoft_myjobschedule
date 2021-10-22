import React from 'react'
import { PatientAsignationCardVent } from '../../components/PatientAsignationCard/PatientAsignationCard'
import Logout from '../../components/functions/Logout'
import { ReturnButton } from '../../components/ActionButton/ActionButton'
export default function IngresarDatos() {
    return (
        <div className="container d-flex justify-content-center align-items-center w-100 h-100 flex-column">
            <div className="d-flex justify-content-between w-100">
                <div>
                    <ReturnButton url="IndexPage"/>
                </div>
                <div>
                    <button onClick={Logout} className="btn btn-danger w-10 mb-5">Cerrar sesión</button>
                </div>
            </div>
            <div className="column-grid">
                <PatientAsignationCardVent styles="1"/>
                <PatientAsignationCardVent styles="2"/>
                <PatientAsignationCardVent styles="3"/>
                <PatientAsignationCardVent styles="4"/>
            </div>
        </div>
    )
}
