import React from 'react'
import { Link } from 'react-router-dom'

export function ReturnButton(url) {
    return (
        <Link className="btn btn-info w-100" to={url.url}>
            Regresar
        </Link>
    )
}

export function NormalActionButton(ActionName){
    return(
        <a className="btn btn-info w-100">
            Editar
        </a>
    )
}

export function DownloadPdfButton(){
    return(
        <div>
            <h1>Descargar PDF</h1>
        </div>
    )
}

export function DownloadExcelButton(){
    return(
        <div>
            <h1>Descargar Excel</h1>
        </div>
    )
}

export function ShowMoreButton(){
    return(
        <div>
            <button className="btn-viewmore">Mostrar más</button>
        </div>
    )
}


