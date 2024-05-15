import "../../SharedStyling/WeekFormating.css"
import SingleDate from "./SingleDate/SingleDate"
import StartOfMonthBuffer from "./StartOfMonthBuffer/StartOfMonthBuffer"

interface Props{
    date: Date
}

function CalendarBody(props: Props) {
    let {date} = props
    return (
        <div className="weekFormat">
            <StartOfMonthBuffer firstOfMonth={GetFirstDayOfWeek(date)}/>
            {GetDateObjects(date)}
        </div>
    )
}

function GetFirstDayOfWeek(date: Date):number {
    let tempDate = new Date(date)
    tempDate.setDate(1)
    return tempDate.getDay();
}

function GetLastDate(date: Date):number {
    let currentYear = date.getFullYear()
    let currentMonth = date.getMonth()
    let lastDate = new Date(currentYear,currentMonth + 1, 0)
    return lastDate.getDate()
}

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