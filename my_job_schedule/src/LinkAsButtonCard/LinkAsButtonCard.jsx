import React, {useState, useState} from 'react'
import { Link } from 'react-router-dom'

export default function LinkAsButtonCard(props) {
    return (
        <div>
            <Link className="">{props.name}</Link>
        </div>
    )
}
