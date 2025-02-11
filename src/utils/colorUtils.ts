import { CalendarEvent } from "../types";

/**
 * Función para obtener el color de fondo y texto de un evento.
 * Se han utilizado colores pastel con una opacidad del 80%.
 */
export const getEventColor = (event: CalendarEvent): string => {
    if (event.type === "worklog") {
        switch (event.status) {
            case "approved":
                return "bg-green-300 text-green-900 bg-opacity-80"; // Verde pastel
            case "pending":
                return "bg-yellow-300 text-yellow-900 bg-opacity-80"; // Amarillo pastel
            case "rejected":
                return "bg-red-300 text-red-900 bg-opacity-80"; // Rojo pastel
            default:
                return "bg-gray-300 text-gray-900 bg-opacity-80"; // Gris neutro
        }
    } else if (event.type === "absence") {
        switch (event.absenceType) {
            case "vacation":
                return "bg-blue-200 text-blue-900 bg-opacity-80"; // Azul pastel
            case "sick_leave":
                return "bg-purple-300 text-purple-900 bg-opacity-80"; // Morado pastel
            case "holiday":
                return "bg-gray-200 text-gray-900 bg-opacity-80"; // Gris claro
            default:
                return "bg-gray-300 text-gray-900 bg-opacity-80"; // Gris neutro
        }
    }
    return "bg-gray-300 text-gray-900 bg-opacity-80"; // Color por defecto
};