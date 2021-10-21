import'./Style.css'
import React from 'react'
import {PatientAsignationCardVent} from '../../components/PatientAsignationCard/PatientAsignationCard'

export default function IndexPage() {

    const cardType = ["1","2","3","4"]

    return (
        <div className="container d-flex justify-content-center align-items-center w-100 h-100">
            <PatientAsignationCardVent styles="2"/>
        </div>
    )
}
