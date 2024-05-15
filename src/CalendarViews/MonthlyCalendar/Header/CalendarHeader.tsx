import "./CalendarHeader.css"

interface Props {
    date: Date
    changeMonthYear: (a: number)=> void;
}


function CalendarHeader(props: Props) {
    let {date, changeMonthYear} = props
    return (<header id="DateHeader">
        <a className={"MonthChanger"} onClick={() => changeMonthYear(-1)}>{"<"}</a>
        <p>{date.toLocaleString(undefined,{month: "long", year:"numeric"})}</p>
        <a className={"MonthChanger"} onClick={() => changeMonthYear(1)}>{">"}</a>
    </header>)
}

export default CalendarHeader;