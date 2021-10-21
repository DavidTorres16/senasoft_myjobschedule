import'./Style.css'
import React from 'react'
import {PatientAsignationCardVent} from '../../components/PatientAsignationCard/PatientAsignationCard'

export default function IndexPage() {

    return (
        <div className="container d-flex justify-content-center align-items-center w-100 h-100">
            <PatientAsignationCardVent styles="1"/>
            <PatientAsignationCardVent styles="2"/>
            <PatientAsignationCardVent styles="3"/>
            <PatientAsignationCardVent styles="4"/>
        </div>
    )
}
