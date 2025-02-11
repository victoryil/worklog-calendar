import './App.css'
import {CalendarEvent} from "./types.ts";
import {Calendar} from "./components/Calendar/Calendar.tsx";
import {ColorConfigProvider} from "./context/ColorConfigContext.tsx";

function App() {

    const mockEvents: CalendarEvent[] = [
        { id: "1", date: "2025-02-11", type: "worklog", status: "approved", title: "Fichaje Aprobado" },
        { id: "2", date: "2025-02-11", type: "worklog", status: "pending", title: "Revisión Horas" },
        { id: "3", date: "2025-02-11", type: "meeting", status: "confirmed", title: "Reunión Confirmada" },
        { id: "4", date: "2025-02-11", type: "training", status: "scheduled", title: "Capacitación Programada" },
        { id: "5", date: "2025-02-12", type: "absence", status: "vacation", title: "Vacaciones" },
    ];
    const handleDayClick = (date: string, events: CalendarEvent[]) => {
        console.log(`Día seleccionado: ${date}`);
        if (events.length > 0) {
            console.log("Eventos:", events);
        } else {
            console.log("No hay eventos en esta fecha.");
        }
    };
    return (
        <ColorConfigProvider>
            <div className="mx-auto mt-10">
                <h1 className="text-2xl font-bold mb-4 text-center">📆 Calendario Personalizable</h1>
                <Calendar events={mockEvents} locale="es" onEventClick={handleDayClick} />
            </div>
        </ColorConfigProvider>
  )
}

export default App
