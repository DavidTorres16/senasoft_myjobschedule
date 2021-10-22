import React from 'react'
import Icono from '../../img/Icono.png'
import { PatientAsignationCardVent } from '../../components/PatientAsignationCard/PatientAsignationCard'
import Logout from '../../components/functions/Logout'
import { ReturnButton } from '../../components/ActionButton/ActionButton'
export default function IngresarDatos() {
    return (
        <div className="container d-flex justify-content-center align-items-center w-100 h-100 flex-column">
            <div className="d-md-flex flex-row justify-content-between w-75">
                <div className="d-flex justify-content-center align-items-center">
                    <ReturnButton url="IndexPage"/>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <img src={Icono} alt="LOGO" />
                    <h1 className="text-light fw-bold">My Job Schedule</h1>
                </div>
                <div className="d-md-grid">
                    <button onClick={Logout} className="btn btn-danger w-10 mb-5 ">Cerrar sesión</button>
                </div>
            </div>
            <div className="column-grid w-100">
                <PatientAsignationCardVent styles="1"/>
                <PatientAsignationCardVent styles="2"/>
                <PatientAsignationCardVent styles="3"/>
                <PatientAsignationCardVent styles="4"/>
            </div>
        </div>
    )
}
