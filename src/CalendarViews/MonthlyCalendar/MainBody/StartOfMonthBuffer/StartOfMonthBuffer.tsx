import { Accessor, Show } from "solid-js"

interface Props {
    monthToLoad: Accessor<Date>
}

/**
 * Creates a buffer div for the start of the month
 * @param props The information needed to be passed in
 * @returns If the first day is a sunday, an empty element. 
 *          Otherwise, a buffer element between sunday and the first date.
 */
function StartOfMonthBuffer({ monthToLoad }: Props){
    return (
        <Show when={GetFirstDayOfMonth(monthToLoad()) > 0}>
        <div id="StartOfMonthBuffer" style={{"grid-column": "1 / span " + GetFirstDayOfMonth(monthToLoad())}}>
        </div>
        </Show>
    )
}

/**
 * Gets the first weekday of the month
 * @param date The month + year used, wrapped in a date object
 * @returns A number representing the weekday of the first day in the month,
 * per Date object format
 */
function GetFirstDayOfMonth(date: Date):number {
    let tempDate = new Date(date)
    tempDate.setDate(1)
    return tempDate.getDay();
}
export default StartOfMonthBuffer
