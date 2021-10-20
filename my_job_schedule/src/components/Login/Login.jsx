import React, {useEffect,useState} from 'react'
const API = process.env.REACT_APP_API;

export default function Login() {

    const [id,setId] = useState("")
    const [password,setPassword] = useState("")

    const verifyCompletedInputs = () =>{
        if(id.length < 1 || password.length < 1){
            alert("Por favor rellene todos los campos")
            return false
        }
        else if(id.length <= 9){
            alert("Error, verifique su documento de identidad")
        }
        else if(password.length <= 8){
            alert("Error, verifique su contraseña")
        }
        else{
            return true
        }
    }

    const handleSubmit = async(e) =>{
        const completedInputs = verifyCompletedInputs()
        if(completedInputs){
            const res = await fetch(`${API}/login`,{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id,
                    password
                })
            })
            const data = await res.json()
            console.log(data)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Documento de identidad"  onChange={e => setId(e.target.value)} value={id}/>
                <input type="password" placeholder="Contraseña" onChange={e => setPassword(e.target.value)} value={password}/>
                <input type="submit" value="IniciarSesion"/>
            </form>
        </div>
    )
}
