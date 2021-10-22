import React from 'react'

export function DangerActionButton(ActionName) {
    return (
        <div>
            <h3>bóton peligro</h3>
        </div>
    )
}

export function NormalActionButton(ActionName){
    return(
        <div>
            <h3>botón Normal</h3>
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


