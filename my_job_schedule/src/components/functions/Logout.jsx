import { Redirect } from "react-router-dom"

export default function CloseSession(){
    let closeConfirm = window.confirm("¿Seguro de que quieres cerrar sesión?")
    if(closeConfirm){
        localStorage.removeItem("token")
        return <Redirect to="/"/>
    }
}