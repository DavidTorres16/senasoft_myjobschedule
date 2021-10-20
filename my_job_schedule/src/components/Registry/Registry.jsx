import React, {useEffect,useState} from 'react'

export default function Login() {

    const [staffName,setStaffName] = useState("")
    const [staffLastName,setStaffLastName] = useState("")
    const [staffEmail,setStaffEmail] = useState("")
    const [staffPhoneNumber,setStaffPhoneNumber] = useState("")



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Documento de identidad"  onChange={e => set} value={}/>
                <input type="text" placeholder="Nombre"  onChange={e => set} value={}/>
                <input type="text" placeholder="Apellido" onChange={e => set} value={}/>
                <input type="text" placeholder="Teléfono" onChange={e => set} value={}/>
                <input type="text" placeholder="Email" onChange={e => set} value={}/>
                <input type="password" placeholder="Email" onChange={e => set} value={}/>
                <input type="submit" value="IniciarSesion"/>
            </form>
        </div>
    )
}