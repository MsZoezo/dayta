import "./CalendarHeader.css"
import { Accessor, JSXElement } from "solid-js";

interface Props {
    date: Accessor<Date>
    changeMonthYear: (a: number)=> void;
}

/**
 * Creates the header for a monthly calendar
 * @param props The information necessary to create the header
 * @returns a JSX element for the header 
 */
function CalendarHeader({ date, changeMonthYear }: Props): JSXElement {
    return (<header id="DateHeader">
        <a class={"MonthChanger"} onClick={() => changeMonthYear(-1)}>{"<"}</a>
        <p>{date().toLocaleString(undefined,{month: "long", year:"numeric"})}</p>
        <a class={"MonthChanger"} onClick={() => changeMonthYear(1)}>{">"}</a>
    </header>)
}

export default CalendarHeader;
