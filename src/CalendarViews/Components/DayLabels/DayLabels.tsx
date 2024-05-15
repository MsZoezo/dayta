import "../../SharedStyling/WeekFormating.css"

function DayLabels(){
    const maxDays = 7; //JS days go from 0-6

    const dayLabels = Array.from(Array(maxDays).keys()).map(GetDayLabel)
    return (
        <div className="weekFormat">
            {dayLabels}
        </div>
    )
}

function GetDayName(dayIdx: number):string {
    const baseDate = 1
    const workingDate = new Date(1970, 2) //Just a random sunday
    workingDate.setDate(baseDate + dayIdx)
    return workingDate.toLocaleDateString(undefined, {weekday:"long"})
}

function GetDayLabel(dayIdx: number): JSX.Element {
    return <div className="DayLabel" key={dayIdx}>
        <p>{GetDayName(dayIdx)}</p>
    </div>
}

export default DayLabels