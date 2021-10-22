import './Style.css'
import React from 'react'
import { ShowMoreButton } from '../ActionButton/ActionButton'

export default function ScheduleDailyCard(props) {
    return (
        <div className="card">
                <h5>Día del turno {props.WorkShiftDay}</h5>
                <p>Hora de inicio: {props.startTime}</p>
                <p>Hora de inicio: {props.finishTime}</p>
                {/* <ShowMoreButton/> */}
        </div>
    )
}
