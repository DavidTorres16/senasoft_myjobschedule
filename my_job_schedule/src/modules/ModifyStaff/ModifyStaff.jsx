import './Style.css'
import React, {useEffect, useState} from 'react'
import StaffTable from '../../components/StaffTable/StaffTable'
import { DangerActionButton } from '../../components/ActionButton/ActionButton'
import { NormalActionButton } from '../../components/ActionButton/ActionButton'

export default function ModifyStaff() {
    return (
        <div>
            <div>
                <NormalActionButton/>
            </div>
            <div>    
                <DangerActionButton/>
            </div>
            <div className="container w-100">
                <StaffTable/>
            </div>
        </div>
    )
}
