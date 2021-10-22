import './Style.css'
import React, {useEffect,useState} from 'react'
import { DangerActionButton } from '../ActionButton/ActionButton'
import { NormalActionButton } from '../ActionButton/ActionButton'
const API = process.env.REACT_APP_API;

export default function StaffTable() {

    const [staffData,setStaffData] = useState([])
    const [state, setState] = useState(false)

    const getStaffData = async() =>{
        const res = await fetch(`${API}/staffCards`,{
            'Authorization':`JSW ${localStorage.getItem("token")}`
        })
        const data = await res.json();
        console.log("-------------")
        if(data != null){
            setStaffData(JSON.parse(data))
        }
    }

    useEffect(() => {
        setStaffData(getStaffData())
    }, [])

    return (
        <div className="d-flex flex-column bg-containerApp justify-content-center align-items-center">
            <table className="table bg-table-app tableDashboard align-middle">
                <thead className="text-center fw-bold">
                    <th>Nombre</th>
                    <th>Especialidad</th>
                    <th>Operaciones</th>
                </thead>
                <tbody>
                    {/* { */}
                        <tr>
                            <td ><input type="text" />Texto prueba</td>
                            <td ><input type="text" />Texto prueba</td>
                            <td className="column-grid">
                                    <button  className="btn btn-info w-100" onClick={e => setState(true)}>Editar</button>
                                    <button className="btn btn-danger w-100">Eliminar</button>
                            </td>
                        </tr>
                </tbody>
            </table>
        </div>
    )
}
