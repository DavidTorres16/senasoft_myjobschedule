import'./Style.css'
import Icono from '../../img/Icono.png'
import React, {useEffect,useState} from 'react'
import { Redirect } from 'react-router';
const API = process.env.REACT_APP_API;

export default function Login() {

    const [id,setId] = useState("")
    const [password,setPassword] = useState("")
    const [verifiedUser, setVerifiedUser] = useState(false)

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
        e.preventDefault();
        const completedInputs = verifyCompletedInputs()
        if(completedInputs){
            const res = await fetch(`${API}/login`,{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({
                    id,
                    password
                })
            })
            const token = await res.json();
            let existingToken = token != null || token.length <1 ? localStorage.setItem("token",token.token) : false
            existingToken != false ? setVerifiedUser(true) : setVerifiedUser(false)
        }
    }

    return (
        <div className="d-flex flex-column containerApp justify-content-center align-items-center">
            {
                !verifiedUser?
                <form onSubmit={handleSubmit} className="d-flex flex-column w-75 pt-3 pb-4 justify-content-center align-items-center bgform">
                <div>
                    <img src={Icono} alt="LOGO" />
                </div>
                
                <div class="mb-3 d-flex flex-column w-75">
                <label htmlFor="doc" className="form-label text-light">Número de documento</label>
                    <input type="text" 
                    placeholder="Documento de identidad" 
                    className="form-control inputs" 
                    id="doc"
                    onChange={e => setId(e.target.value)} value={id}/>
                </div>

                <div class="mb-3 d-flex flex-column w-75">
                <label htmlFor="password" className="form-label text-light">Password</label>
                <input type="password" 
                    placeholder="Contraseña" 
                    className="form-control inputs"  
                    id="password" 
                    onChange={e => setPassword(e.target.value)} value={password}/>
                </div>

                <div className="d-grid w-75">
                    <input type="submit" 
                    className="btn btn-success p-3 fs-5 w-100" 
                    value="IniciarSesion"/>
                </div>
                <a href="#" className="fs-5 text-light pt-2 pb-2 linkPassword">Olvidaste la contraseña?</a>
            </form>
            :
            <div>
                <Redirect to="prueba"/>
            </div>
            }
        </div>
        )
}
