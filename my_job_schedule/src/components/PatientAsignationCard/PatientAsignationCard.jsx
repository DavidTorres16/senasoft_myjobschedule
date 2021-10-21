import './Style.css'
import React from 'react'

export default function PatientAsignationCard() {
    return (
        <div class="col-md-6 m-1">
            <form className="d-flex flex-column w-100 pt-3 pb-4 justify-content-center align-items-center bgFormVen">
                <h2 className="formTitle">Pacientes ventilados</h2>
                <div className="mb-3 d-flex flex-column w-75">
                <label htmlFor="numVen" className="form-label text-light h4 text-center">Número de Pacientes</label>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-light">-</button>
                    <input type="number" placeholder className="form-control w-75 me-2 ms-2" id="numVen" />
                    <button className="btn btn-light">+</button>
                </div>
                </div>
                <div className="mb-3 d-flex flex-column w-75">
                <label htmlFor="numVen" className="form-label text-light h4 text-center">Número de Horas</label>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-light">-</button>
                    <input type="number" placeholder className="form-control w-75 me-2 ms-2" id="numVen" />
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
