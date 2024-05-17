import MonthlyCalandar from "../CalendarViews/MonthlyCalendar/MonthlyCalendar";
import ControlPanel from "../ControlPanel/ControlPanel";
import "./CalendarViewLayout.css";

function CalendarLayout() {
    return (
        <div className="Layout">
            <ControlPanel />
            <main>
                <MonthlyCalandar />
            </main>
        </div>
    );
}

export default CalendarLayout;
