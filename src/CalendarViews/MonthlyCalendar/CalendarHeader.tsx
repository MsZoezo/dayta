import "./CalendarHeader.css"

interface Props {
    date: Date
    changeMonthYear: (a: number)=> void;
}


function CalendarHeader(props: Props) {
    return (<header id="DateHeader">
        <a className={"MonthChanger"} onClick={() => props.changeMonthYear(-1)}>{"<"}</a>
        <p>{props.date.toLocaleString(undefined,{month: "long", year:"numeric"})}</p>
        <a className={"MonthChanger"} onClick={() => props.changeMonthYear(1)}>{">"}</a>
    </header>)
}

export default CalendarHeader;