import'./Style.css'
import React from 'react'
import Login from '../../components/Login/Login'
import Registry from '../../components/Registry/Registry'

export default function IndexPage() {
    return (
        <div className="container d-flex justify-content-center align-items-center w-100 h-100">
            <div className="d-flex justify-content-center align-items-center w-100 h-100">
                <Login/>
                <br />
                <Registry/>
            </div>
        </div>
    )
}
