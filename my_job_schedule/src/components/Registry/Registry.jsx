import React, {useEffect,useState} from 'react'
const API= process.env.REACT_APP_API;

export default function Login() {

    const [password, setPassword] = useState("")
    const [id,setId] = useState("")
    const [name,setName] = useState("")
    const [lastName,setLastName] = useState("")
    const [email,setEmail] = useState("")
    const [phoneNumber,setPhoneNumber] = useState("")

    const verifyCompletedInputs = () =>{
        if(name.length <1 || lastName.length <1 || email.length <1 || phoneNumber.length <1 || password.length <1 || id.length <1){
            alert("Por favor rellene todos los campos")
            return false
        }
        else if(password.length <= 8){
            alert("Por favor escribe una contraseña de más de 8 caracteres")
        }
        else if(id.length <= 9){
            alert("Su documento de identidad debe ser mayor de 9 caracteres")
        }
        else{
            return true
        }
    }

    const handleSubmit = async (e) => {
        const completedInputs = verifyCompletedInputs()
        if(completedInputs){
            const res = await fetch(`${API}/staffRegistry`,{
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify({
                    name,
                    lastName,
                    email,
                    phoneNumber
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
                <input type="text" placeholder="Nombre"  onChange={e => setName(e.target.value)} value={name}/>
                <input type="text" placeholder="Apellido" onChange={e => setLastName(e.target.value)} value={lastName}/>
                <input type="text" placeholder="Teléfono" onChange={e => setPhoneNumber(e.target.value)} value={phoneNumber}/>
                <input type="text" placeholder="Email" onChange={e => setEmail(e.target.value)} value={email}/>
                <input type="password" placeholder="contraseña" onChange={e => setPassword(e.target.value)} value={password}/>
                <input type="submit" value="IniciarSesion"/>
            </form>
        </div>
    )
}