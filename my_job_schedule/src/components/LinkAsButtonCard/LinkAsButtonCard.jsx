import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

export default function LinkAsButtonCard(props) {
    const propArray = Object.values(props);
    console.log(propArray)
    return (
        <div>
            <Link>Hola</Link>
        </div>
    )
}
