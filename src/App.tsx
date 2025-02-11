import './App.css'
import {CalendarEvent} from "./types.ts";
import {Calendar} from "./components/Calendar.tsx";

function App() {

    const mockEvents: CalendarEvent[] = [
        { id: "1", date: "2025-02-11", type: "worklog", status: "approved", title: "Fichaje Aprobado" },
        { id: "2", date: "2025-02-11", type: "worklog", status: "pending", title: "Revisión Horas" },
        { id: "3", date: "2025-02-11", type: "worklog", status: "rejected", title: "Solicitud Rechazada" },
        { id: "4", date: "2025-02-11", type: "absence", absenceType: "vacation", title: "Vacaciones" },
        { id: "5", date: "2025-02-12", type: "absence", absenceType: "holiday", title: "Festivo Nacional" },
        { id: "6", date: "2025-02-13", type: "worklog", status: "approved", title: "Entrada Fichaje" },
        { id: "7", date: "2025-02-14", type: "absence", absenceType: "sick_leave", title: "Baja Médica" },
    ];

    return (
      <>
          <div className="mx-auto mt-10">
              <h1 className="text-2xl font-bold mb-4 text-center">📆 Calendario Mensual</h1>
              <Calendar events={mockEvents} locale="es" />
          </div>
      </>
  )
}

export default App
