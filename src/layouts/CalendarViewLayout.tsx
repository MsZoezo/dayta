import ControlPanel from "../ControlPanel/ControlPanel";
import "./CalendarViewLayout.css"

function CalendarLayout() {
    return (
        <div className="Layout">
            <ControlPanel/>
            <main>
                <h1>This is the calendar</h1>
                <a href="/">Testing a link</a><br/>
                <a href="/" className="disabled">Testing a 'disabled' link</a>
            </main>
        </div>
    )
}

export default CalendarLayout;