import { JSXElement } from "solid-js";
import "../../SharedStyling/WeekFormating.css";

/**
 * Creates a week-long header for a calendar
 * @returns The JSX element for a week-long view of a calendar
 */
function DayLabels(){
    const maxDays = 7; // JS days go from 0-6

    const dayLabels = Array.from(Array(maxDays).keys()).map(GetDayLabel);
    return (
        <div class="weekFormat">
            {dayLabels}
        </div>
    );
}

/**
 * Gets the day name for an incoming day
 * @param dayIdx The weekday index, following Date object conventions
 * @returns A localized string for the weekday's name
 */
function GetDayName(dayIdx: number): string {
    const baseDate = 1;
    const workingDate = new Date(1970, 2); // Just a random sunday
    workingDate.setDate(baseDate + dayIdx);
    return workingDate.toLocaleDateString(undefined, { weekday: "long" });
}

/**
 * Creates a container for the individual day
 * @param dayIdx The weekday index, following Date object conventions
 * @returns A container with the localized name for the weekday
 */
function GetDayLabel(dayIdx: number): JSXElement {
    return (
        <div class="DayLabel" >
            <p>{GetDayName(dayIdx)}</p>
        </div>
    );
}

export default DayLabels;

