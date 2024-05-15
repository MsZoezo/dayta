import { useState } from "react"
import CalendarHeader from "./Header/CalendarHeader"
import CalendarBody from "./MainBody/MainBody";
import DayLabels from "../Components/DayLabels/DayLabels";

function MonthlyCalandar() {
    let [date, setDate] = useState(new Date())
    
    function ChangeMonth(offset: number){
        const maxMonth = 11;
        let updatedYear = date.getFullYear();
        let updatedMonth = date.getMonth() + offset;

        if (updatedMonth > maxMonth) {
            updatedMonth = 0
            updatedYear++
        } else if (updatedMonth < 0) {
            updatedMonth = maxMonth
            updatedYear--
        }
        setDate(new Date(updatedYear, updatedMonth))

    }
    
    return (
        <>
            <CalendarHeader date={date} changeMonthYear={ChangeMonth} />
            <DayLabels/>
            <CalendarBody date={date}/>
        </>
    )
}


export default MonthlyCalandar;