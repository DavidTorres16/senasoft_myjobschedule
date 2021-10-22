import React, {useEffect,useState} from 'react'
import { DangerActionButton } from '../ActionButton/ActionButton'
import { NormalActionButton } from '../ActionButton/ActionButton'

export default function StaffTable() {
    return (
        <div>
            <table>
                <thead>
                    <tr>Nombre</tr>
                    <tr>Especialidad</tr>
                    <tr>Operaciones</tr>
                </thead>
                <tbody>
                    <td>texto Ejemplo</td>
                    <td>texto Ejemplo</td>
                    <td>
                        <DangerActionButton/>
                        <NormalActionButton/>
                    </td>
                </tbody>
            </table>
        </div>
    )
}
