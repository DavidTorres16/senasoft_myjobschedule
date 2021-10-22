import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

export default function LinkAsButtonCard(props) {
    return (
        <div>
            <Link className="">HOLA{props.name}</Link>
        </div>
    )
}
