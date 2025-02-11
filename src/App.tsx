import './App.css'
import {CalendarEvent} from "./types.ts";
import {Calendar} from "./components/Calendar/Calendar.tsx";
import {ColorConfigPanel} from "./components/ColorConfigPanel.tsx";

function App() {

    const mockEvents: CalendarEvent[] = [
        { id: "1", date: "2025-02-11", type: "worklog", status: "approved", title: "Fichaje Aprobado" },
        { id: "2", date: "2025-02-11", type: "worklog", status: "pending", title: "Revisión Horas" },
        { id: "3", date: "2025-02-11", type: "meeting", status: "confirmed", title: "Reunión Confirmada" },
        { id: "4", date: "2025-02-11", type: "training", status: "scheduled", title: "Capacitación Programada" },
        { id: "5", date: "2025-02-12", type: "absence", status: "vacation", title: "Vacaciones" },
    ];

    return (
        <>
            <div className="mx-auto mt-10">
                <h1 className="text-2xl font-bold mb-4 text-center">📆 Calendario Mensual</h1>
                <Calendar events={mockEvents} locale="en" />
                <div className="mt-10">
                    <ColorConfigPanel />
                </div>
            </div>
        </>
  )
}

export default App
