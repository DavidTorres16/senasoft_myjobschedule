import React from 'react'
import { PatientAsignationCardVent } from '../../components/PatientAsignationCard/PatientAsignationCard'
import { DangerActionButton } from '../../components/ActionButton/ActionButton'

export default function IngresarDatos() {
    return (
        <div className="container d-flex justify-content-center align-items-center w-100 h-100">
            <div>
                <DangerActionButton/>
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
