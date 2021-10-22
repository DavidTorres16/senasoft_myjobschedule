import './Style.css'
import React, {useState, useEffect} from 'react'
import ScheduleDailyCard from '../ScheduleDailyCard/scheduleDailyCard'

export default function StaffSchedule(props) {

    const date = new Date()
    const actualMonth= (date.getMonth() + 1)
    const actualYear= date.getFullYear()
    const [leapYear, setLeapYear] = useState(false)
    const [totalMonthDays, setTotalMonthDays] = useState(0)
    const [weeks, setWeeks] = useState([])
    let totalDaysArray = []
    
    const weekDays = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado", "Domingo"]
    
    const createDaysArray= () =>{
        for (let index = 1; index < totalMonthDays; index++){
            totalDaysArray.push(index.toString())
        }
        return totalDaysArray
    }
    
    const create = createDaysArray()

    // const calculateWeeks = () =>{
    //     if(!leapYear && actualMonth == 2){
    //         setWeeks(["","","",""])
    //     }
    //     else{
    //         setWeeks(["","","","",""])
    //     }
    // }

    // const calculatedWeeks = calculateWeeks()

    const getActualMonthDays = () =>{
        if(actualMonth == 1 || actualMonth == 3 || actualMonth == 5 || actualMonth == 7 || actualMonth == 8 || actualMonth == 10 || actualMonth == 12){
            setTotalMonthDays(31)
        }
        else if(actualMonth == 4 || actualMonth == 6 || actualMonth == 9 || actualMonth == 11){
            setTotalMonthDays(30)
        }
        else{
            if(leapYear){
                setTotalMonthDays(29)
            }
            else{
                setTotalMonthDays(28)
            }
        }
    }
    
    const getLeapYear = () =>{
        if( actualYear % 100 != 0 && actualYear % 4 == 0 || actualYear % 400 == 0){
            setLeapYear(true)
        }
        else if(actualYear % 4 == 0){
            setLeapYear(true)
        }
        else{
            setLeapYear(false)
        }
    }

    const getSchedule = () =>{
        getLeapYear()
        getActualMonthDays()
    }


    useEffect(() => {
        getSchedule()
    }, [])

    return (
        <div className="shulde">
            <div className="bg-calenadar" >
                <div className className="days">
                {weekDays.map(day => (
                    <div className="">
                        <p className="">
                            {day}
                        </p>
                    </div>
                ))}
                </div>
                <div className="days">
                    {totalDaysArray.map(day =>(
                        <div className="">
                            <ScheduleDailyCard/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
