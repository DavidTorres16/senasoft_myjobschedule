import React from 'react'

export default function ShowDailyInfoCard(props) {
    return (
        <div>
            <div>
                <h1>Nombre del usuario {props.name}</h1>
                <h1>Hora inicio de turno {props.startTime}</h1>
                <h1>Hora finalización de turno {props.finishTime}</h1>
                <h1>Turno {props.workShift}</h1>
                <h1>Novedad del turno {props.workShiftNews}</h1>
            </div>
        </div>
    )
}
