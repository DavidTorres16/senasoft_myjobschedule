import './Style.css';
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
        <div className="d-flex flex-column containerApp justify-content-center align-items-center">
            <form onSubmit={handleSubmit} className="d-flex flex-column w-100 pt-3 pb-4 justify-content-center align-items-center bgform">
                <div className="mb-3 d-flex flex-column w-75">
                    <label htmlFor="rdoc" className="form-label text-light">Número de documento</label>
                    <input type="text" 
                    placeholder="Documento de identidad" 
                    className="form-control inputs" id="rdoc" 
                    onChange={e => setId(e.target.value)} value={id}/>
                </div>

                <div className="mb-3 d-flex flex-column w-75">
                    <label htmlFor="rnombre" className="form-label text-light">Nombres</label>
                    <input type="text" 
                    placeholder="Nombre" 
                    className="form-control inputs" id="rnombre" 
                    onChange={e => setName(e.target.value)} value={name}/>
                </div>

                <div className="mb-3 d-flex flex-column w-75">
                    <label htmlFor="rapellido" className="form-label text-light">Apellidos</label>
                    <input type="text" 
                    placeholder="Apellido" 
                    className="form-control inputs" id="rapellido" 
                    onChange={e => setLastName(e.target.value)} value={lastName}/>
                </div>

                <div className="mb-3 d-flex flex-column w-75">
                    <label htmlFor="rtelefono" className="form-label text-light">Teléfono</label>
                    <input type="text" 
                    placeholder="Teléfono" 
                    className="form-control inputs" id="rtelefono" 
                    onChange={e => setPhoneNumber(e.target.value)} value={phoneNumber}/>
                </div>

                <div className="mb-3 d-flex flex-column w-75">
                    <label htmlFor="remail" className="form-label text-light">Email</label>
                    <input type="text" 
                    placeholder="Email" 
                    className="form-control inputs" id="remail" 
                    onChange={e => setEmail(e.target.value)} value={email}/>
                </div>

                <div className="mb-3 d-flex flex-column w-75">
                    <label htmlFor="rpassword" className="form-label text-light">Contraseña</label>
                    <input type="password" 
                    placeholder="contraseña" 
                    className="form-control inputs" id="rpassword" 
                    onChange={e => setPassword(e.target.value)} value={password}/>
                </div>

                <div className="d-grid w-75">
                    <input type="submit" className="btn btn-success p-3 w-100" value="IniciarSesion"/>
                </div>
            </form>
        </div>
    )
}