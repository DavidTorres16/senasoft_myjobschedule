import './Style.css'
import React, {useEffect,useState} from 'react'
import { DangerActionButton } from '../ActionButton/ActionButton'
import { NormalActionButton } from '../ActionButton/ActionButton'

export default function StaffTable() {
    return (
        <div className="d-flex flex-column bg-containerApp justify-content-center align-items-center">
            <table className="table bg-table-app tableDashboard align-middle">
                <thead className="text-center fw-bold">
                    <th>Nombre</th>
                    <th>Especialidad</th>
                    <th>Operaciones</th>
                </thead>
                <tbody>
                    <tr>
                        <td>texto Ejemplo</td>
                        <td>texto Ejemplo</td>
                        <td className="column-grid">
                                <NormalActionButton/>
                                <DangerActionButton/>
                        </td>

                        {/* <td className="row justify-content-center align-items-center w-100 marginNone">
                            <div className="col-md-5 py-1  w-75 " >
                                <NormalActionButton/>
                            </div>
                            <div className="col-md-5 py-1 w-75">
                                <DangerActionButton/>
                            </div>
                        </td> */}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
