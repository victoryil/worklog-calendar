import { CalendarEvent } from "../types";
import { useColorConfig } from "../context/ColorConfigContext";

/**
 * Hook para obtener los colores personalizados de un evento basado en su tipo y estado.
 */
export const useEventColor = (event: CalendarEvent) => {
    const { colors } = useColorConfig();

    // Definir colores por combinación de type y status
    const eventColors: Record<string, string> = {
        // 🟢 Worklog (Fichajes)
        "worklog-approved": "bg-green-500 text-white",
        "worklog-pending": "bg-yellow-500 text-black",
        "worklog-rejected": "bg-red-500 text-white",

        // 🏖️ Absences (Vacaciones, bajas, festivos)
        "absence-vacation": "bg-blue-400 text-white",
        "absence-sick_leave": "bg-purple-400 text-white",
        "absence-holiday": "bg-gray-400 text-white",

        // 📅 Meetings (Reuniones)
        "meeting-confirmed": "bg-blue-500 text-white",
        "meeting-pending": "bg-yellow-400 text-black",
        "meeting-cancelled": "bg-red-500 text-white",

        // 🏋 Training (Capacitaciones)
        "training-scheduled": "bg-indigo-500 text-white",
        "training-completed": "bg-green-500 text-white",

        // 🎤 Event Categories (Conferencias y Workshops)
        "event-conference": "bg-orange-500 text-white",
        "event-workshop": "bg-teal-500 text-white",
    };

    // Generar la clave dinámica en base a type + status
    const key = `${event.type}-${event.status}`;

    // Retornar el color correspondiente o un color por defecto
    return eventColors[key] || `${colors.eventBackground} ${colors.eventText}`;
};