import { useState } from "react";
import CalendarHeader from "./Header/CalendarHeader";
import CalendarBody from "./MainBody/MainBody";
import DayLabels from "../Components/DayLabels/DayLabels";

/**
 * Creates the monthly calendar view
 * @returns A JSX element for a monthly calendar
 */
function MonthlyCalandar() {
    const [date, setDate] = useState(new Date());

    function ChangeMonth(offset: number) {
        setDate(new Date(date.getFullYear(), date.getMonth() + offset));
    }

    return (
        <>
            <CalendarHeader date={date} changeMonthYear={ChangeMonth} />
            <DayLabels />
            <CalendarBody date={date} />
        </>
    );
}

export default MonthlyCalandar;
