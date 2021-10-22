import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

export default function LinkAsButtonCard(props) {
    const propArray = Object.values(props);
    console.log(propArray)
    return (
        <div>
            <Link className="btn bgButton w-100" to={propArray[1]}>{propArray[0]}</Link>
        </div>
    )
}
