import React from 'react'

export function DangerActionButton(ActionName) {
    return (
        <div>
            <h1>Nombre de la acción a ejecutar con el botón {ActionName}</h1>
        </div>
    )
}

export function NormalActionButton(ActionName){
    return(
        <div>
            <h1>Nombre la acción a ejecutar con el botón {ActionName}</h1>
        </div>
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


