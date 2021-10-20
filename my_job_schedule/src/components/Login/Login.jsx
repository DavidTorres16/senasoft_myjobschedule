import React, {useEffect,useState} from 'react'

export default function Login() {

    const [staffDocId,setStaffDocId] = useState("")
    const [staffPassword,setStaffPassword] = useState("")

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Documento de identidad"  onChange={e => set} value={}/>
                <input type="password" placeholder="Contraseña" onChange={e => set} value={}/>
                <input type="submit" value="IniciarSesion"/>
            </form>
        </div>
    )
}
