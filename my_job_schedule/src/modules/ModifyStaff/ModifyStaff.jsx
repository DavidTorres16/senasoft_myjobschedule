import React, {useEffect, useState} from 'react'
import StaffTable from '../../components/StaffTable/StaffTable'
import { DangerActionButton } from '../../components/ActionButton/ActionButton'
import { NormalActionButton } from '../../components/ActionButton/ActionButton'

export default function ModifyStaff() {
    return (
        <div>
            <div>    
                <DangerActionButton/>
                <NormalActionButton/>
            </div>
            <div>
                <StaffTable/>
            </div>
        </div>
    )
}
