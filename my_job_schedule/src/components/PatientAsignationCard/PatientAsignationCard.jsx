import './Style.css'
import React, {useState,useEffect} from 'react'
const API = process.env.REACT_APP_API;

export function PatientAsignationCardVent(props) {
    
    const [serviceHours, setServiceHours] = useState(0)
    const [patientsNumber, setPatientsNumber] = useState(0)
    const [patientType, setPatientType] = useState("")
    const styles =props.styles;
    let classname = "d-flex flex-column w-100 pt-3 pb-4 justify-content-center align-items-center";
    
    if(styles == 1){
        classname += " bgFormVen"
        setPatientType(1)
    }
    else if(styles == 2){
        classname += " bgFormChildren"
        setPatientType(2)
    }
    else if(styles == 3){
        classname += " bgFormMed"
        setPatientType(3)
    }
    else if(styles == 4){
        classname += " bgFormGen"
        setPatientType(4)
    }
    
    const handleBtn = (arithmetic,type,e) =>{
        e.preventDefault();

        if(arithmetic === 1 && type == 1){
            setServiceHours(serviceHours+1)
        }
        else if(arithmetic === 2 && type == 1){
            setServiceHours(serviceHours-1)
        }
        else if(arithmetic === 1 && type == 2){
            setPatientsNumber(patientsNumber+1)
        }
        else if(arithmetic === 2 && type === 2){
            setPatientsNumber(patientsNumber-1)
        }
    }
    
    const handleSubmitButton = async() =>{
        const res = await fetch(`${API}/patientRegistry`,{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                serviceHours,
                patientsNumber,
                patientType
            })
        })
        const data = await res.json();
        let succesfulRegistry = data != null ? true : false
        succesfulRegistry? alert("Los pacientes ha sido registrados con exito"): alert("Hubo un error, intente de nuevo")
    }
    
    return (
        <div class="col-md-6 m-1">
            <form className={classname}>
                <h2 className="formTitle">Pacientes ventilados</h2>
                <div className="mb-3 d-flex flex-column w-75">
                <label htmlFor="numVen" className="form-label text-light h4 text-center">Número de Pacientes</label>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-light" onClick={e => handleBtn(2,2,e)}>-</button>
                    <input type="number" placeholder className="form-control w-75 me-2 ms-2" id="numVen" onChange={e => setPatientsNumber(e.target.value)} value={patientsNumber}/>
                    <button className="btn btn-light" onClick={e => handleBtn(1,2,e)}>+</button>
                </div>
                </div>
                <div className="mb-3 d-flex flex-column w-75">
                <label htmlFor="numVen" className="form-label text-light h4 text-center">Número de Horas</label>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-light" onClick={e => handleBtn(2,1,e)}>-</button>
                    <input type="number" placeholder className="form-control w-75 me-2 ms-2" id="numVen" onChange={e => setServiceHours(e.target.value)} value={serviceHours}/>
                    <button className="btn btn-light" onClick={e => handleBtn(1,1,e)}>+</button>
                </div>
                </div>
                <div className="d-flex justify-content-center w-75">
                <button type="submit" className="btn btnForms w-75" onClick={handleSubmitButton}>Guardar</button>
                </div>
            </form>
        </div>
    )
}

