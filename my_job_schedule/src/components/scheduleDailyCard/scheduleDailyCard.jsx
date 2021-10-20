import React from 'react'
import { ShowMoreButton } from '../ActionButton/ActionButton'

export default function ScheduleDailyCard(props) {
    return (
        <div>
            <h1>Día del turno {props.WorkShiftDay}</h1>
            <h3>Hora de inicio {props.startTime}</h3>
            <h3>Hora de inicio {props.finishTime}</h3>
            <ShowMoreButton/>
        </div>
    )
}
