import React, {useEffect,useState} from 'react'
import { DangerActionButton } from '../ActionButton/ActionButton'
import { NormalActionButton } from '../ActionButton/ActionButton'

export default function StaffTable() {
    return (
        <div>
            <table>
                <thead>
                    <th>Nombre</th>
                    <th>Especialidad</th>
                    <th>Operaciones</th>
                </thead>
                <tbody>
                    <tr>
                        <td>texto Ejemplo</td>
                        <td>texto Ejemplo</td>
                        <td>
                            <DangerActionButton/>
                            <NormalActionButton/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
