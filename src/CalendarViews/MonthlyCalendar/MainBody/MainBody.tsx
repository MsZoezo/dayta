import "../../SharedStyling/WeekFormating.css"
import SingleDate from "./SingleDate/SingleDate"
import StartOfMonthBuffer from "./StartOfMonthBuffer/StartOfMonthBuffer"

interface Props{
    date: Date
}

/**
 * Creates the main body of a monthly calendar
 * @param props The props used to recreate the element
 * @returns A JSX copy of the body of the monthly view
 */
function CalendarBody({date}: Props) {
    return (
        <div className="weekFormat">
            <StartOfMonthBuffer firstOfMonth={GetFirstDayOfWeek(date)}/>
            {GetDateObjects(date)}
        </div>
    )
}

/**
 * Gets the first weekday of the month
 * @param date The month + year used, wrapped in a date object
 * @returns A number representing the weekday of the first day in the month,
 * per Date object format
 */
function GetFirstDayOfWeek(date: Date):number {
    let tempDate = new Date(date)
    tempDate.setDate(1)
    return tempDate.getDay();
}
/**
 * Gets the last date of the month
 * @param date The month + year used, wrapped in a date object
 * @returns The number of the last date of the month
 */
function GetLastDate(date: Date):number {
    let currentYear = date.getFullYear()
    let currentMonth = date.getMonth()
    let lastDate = new Date(currentYear,currentMonth + 1, 0)
    return lastDate.getDate()
}

/**
 * Gets all the date objects associated with the month
 * @param effectiveMonth The month + year used, wrapped in a date object
 * @returns An array of JSX elements, one for each day
 */
function GetDateObjects(effectiveMonth: Date):JSX.Element[]{
    let output = new Array<JSX.Element>
    for(let i = 1; i <= GetLastDate(effectiveMonth); i++){
        let currentDate = new Date(effectiveMonth)
        currentDate.setDate(i)
        output.push(<SingleDate date={currentDate}/>);
    }
    return output
}

export default CalendarBody;