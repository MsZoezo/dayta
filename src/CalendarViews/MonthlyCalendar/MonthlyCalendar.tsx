import { useState } from "react"
import CalendarHeader from "./Header/CalendarHeader"
import CalendarBody from "./MainBody/MainBody";
import DayLabels from "../Components/DayLabels/DayLabels";

function MonthlyCalandar() {
    let [date, setDate] = useState(new Date())
    
    function ChangeMonth(offset: number){
        setDate(new Date(date.getFullYear(), date.getMonth() + offset))

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