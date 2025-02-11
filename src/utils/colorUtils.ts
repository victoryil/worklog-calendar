import { useContext } from "react";
import { CalendarEvent } from "../types";
import { ColorConfigContext } from "../context/ColorConfigContext";

/**
 * Hook para obtener los colores desde el contexto.
 */
export const useEventColor = (event: CalendarEvent): string => {
    const { colors } = useContext(ColorConfigContext);

    // Construye la clave con el formato "{tipo}-{estado}"
    const key = `${event.type}-${event.status || "default"}`;

    // Retorna el color definido o el color por defecto
    const { bg, text } = colors[key] || colors["default"];

    return `${bg} ${text} bg-opacity-80`;
};