import { Accessor, JSXElement } from "solid-js";
import "../../SharedStyling/WeekFormating.css";
import SingleDate from "./SingleDate/SingleDate";
import StartOfMonthBuffer from "./StartOfMonthBuffer/StartOfMonthBuffer";

interface Props {
    date: Accessor<Date>;
}

/**
 * Creates the main body of a monthly calendar
 * @param props The props used to recreate the element
 * @returns A JSX copy of the body of the monthly view
 */
function CalendarBody({ date }: Props) {
    return (
        <div class="weekFormat">
            <StartOfMonthBuffer monthToLoad={date} />
            {GetDateObjects(date())}
        </div>
    );
}

/**
 * Gets the last date of the month
 * @param date The month + year used, wrapped in a date object
 * @returns The number of the last date of the month
 */
function GetLastDate(date: Date): number {
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth();
    const lastDate = new Date(currentYear, currentMonth + 1, 0);
    return lastDate.getDate();
}

/**
 * Gets all the date objects associated with the month
 * @param effectiveMonth The month + year used, wrapped in a date object
 * @returns An array of JSX elements, one for each day
 */
function GetDateObjects(effectiveMonth: Date):JSXElement[]{
    const output = new Array<JSXElement>();
    for (let i = 1; i <= GetLastDate(effectiveMonth); i++) {
        const currentDate = new Date(effectiveMonth);
        currentDate.setDate(i);
        output.push(<SingleDate date={currentDate} />);
    }
    return output
}

export default CalendarBody;
