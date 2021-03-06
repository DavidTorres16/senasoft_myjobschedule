import './Style.css'
import React, {useState,useEffect} from 'react'
const API = process.env.REACT_APP_API;

export function PatientAsignationCardVent(props) {
    
    const [serviceHours, setServiceHours] = useState(0)
    const [patientsNumber, setPatientsNumber] = useState(0)
    const [patientType, setPatientType] = useState("")
    const [name, setName] = useState("")
    const styles =props.styles;
    const [classname, setClassName] = useState("d-flex flex-column w-100 pt-3 pb-4 justify-content-center align-items-center")
    
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

    useEffect(() => {
        if(styles == 1){
            setClassName("d-flex flex-column w-100 pt-3 pb-4 justify-content-center align-items-center bgFormVen")
            setName("Pacientes ventilados")
            setPatientType(1)
        }
        else if(styles == 2){
            setClassName("d-flex flex-column w-100 pt-3 pb-4 justify-content-center align-items-center bgFormChildren")
            setPatientType(2)
            setName("Pacientes Infantes")
        }
        else if(styles == 3){
            setClassName("d-flex flex-column w-100 pt-3 pb-4 justify-content-center align-items-center bgFormMed")
            setPatientType(3)
            setName("Pacientes Medicamentos")
        }
        else if(styles == 4){
            setClassName("d-flex flex-column w-100 pt-3 pb-4 justify-content-center align-items-center bgFormGen")
            setPatientType(4)
            setName("Pacientes generales")
        }
    }, [])
    
    return (
        <div className="col-md-6 m-1 w-75 m-auto">
            <form className={classname}>
                <h2 className="formTitle">{name}</h2>
                <div className="mb-3 d-flex flex-column w-75">
                <label htmlFor="numVen" className="form-label text-light h4 text-center">N??mero de Pacientes</label>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-light" onClick={e => handleBtn(2,2,e)}>-</button>
                    <input type="number" className="form-control w-75 me-2 ms-2" id="numVen" onChange={e => setPatientsNumber(e.target.value)} value={patientsNumber}/>
                    <button className="btn btn-light" onClick={e => handleBtn(1,2,e)}>+</button>
                </div>
                </div>
                <div className="mb-3 d-flex flex-column w-75">
                <label htmlFor="numVen" className="form-label text-light h4 text-center">N??mero de Horas</label>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-light" onClick={e => handleBtn(2,1,e)}>-</button>
                    <input type="number" className="form-control w-75 me-2 ms-2" id="numVen" onChange={e => setServiceHours(e.target.value)} value={serviceHours}/>
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

