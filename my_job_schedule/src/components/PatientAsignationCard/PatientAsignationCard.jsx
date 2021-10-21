import './Style.css'
import React, {useState,useEffect} from 'react'



export default function PatientAsignationCardVent(cardType) {
    
    const [serviceHours, setServiceHours] = useState(0)
    const [patientsNumber, setPatientsNumber] = useState(0)
    let IndexClass = ""
    
    const SubmitDataFromCards = () =>{
        
        
    }

    if(cardType == "vent"){
        IndexClass = "d-flex flex-column w-100 pt-3 pb-4 justify-content-center align-items-center bgFormVen"
    }
    else if(cardType == "children"){
        IndexClass = "d-flex flex-column w-100 pt-3 pb-4 justify-content-center align-items-center bgFormChildren"
    }

    return (
        <div class="col-md-6 m-1">
            <form className={IndexClass}>
                <h2 className="formTitle">Pacientes ventilados</h2>
                <div className="mb-3 d-flex flex-column w-75">
                <label htmlFor="numVen" className="form-label text-light h4 text-center">Número de Pacientes</label>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-light">-</button>
                    <input type="number" placeholder className="form-control w-75 me-2 ms-2" id="numVen" onChange={e => setPatientsNumber(e.target.value)} value={patientsNumber}/>
                    <button className="btn btn-light">+</button>
                </div>
                </div>
                <div className="mb-3 d-flex flex-column w-75">
                <label htmlFor="numVen" className="form-label text-light h4 text-center">Número de Horas</label>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-light">-</button>
                    <input type="number" placeholder className="form-control w-75 me-2 ms-2" id="numVen" onChange={e => setServiceHours(e.target.value)} value={serviceHours}/>
                    <button className="btn btn-light">+</button>
                </div>
                </div>
                <div className="d-flex justify-content-center w-75">
                <button type="submit" className="btn btnForms w-75">Guardar</button>
                </div>
            </form>
        </div>
    )
}