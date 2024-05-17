import ControlPanel from "../ControlPanel/ControlPanel";
import "./CalendarViewLayout.css";

function CalendarLayout() {
    return (
        <div className="Layout">
            <ControlPanel />
            <main>
                <h1>This is the calendar</h1>
            </main>
        </div>
    );
}

export default CalendarLayout