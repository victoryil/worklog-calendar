/**
 * Configuración de categorías de eventos y sus colores personalizados.
 * Permite que el usuario modifique y agregue nuevas categorías sin tocar la lógica del código.
 */

export const EVENT_CATEGORIES: Record<string, { bg: string; text: string }> = {
    // Fichajes de trabajo
    "worklog-approved": { bg: "bg-green-300", text: "text-green-900" },
    "worklog-pending": { bg: "bg-yellow-300", text: "text-yellow-900" },
    "worklog-rejected": { bg: "bg-red-300", text: "text-red-900" },

    // Ausencias
    "absence-vacation": { bg: "bg-blue-200", text: "text-blue-900" },
    "absence-sick_leave": { bg: "bg-purple-300", text: "text-purple-900" },
    "absence-holiday": { bg: "bg-gray-200", text: "text-gray-900" },

    // Reuniones
    "meeting-confirmed": { bg: "bg-cyan-300", text: "text-cyan-900" },
    "meeting-pending": { bg: "bg-orange-300", text: "text-orange-900" },
    "meeting-cancelled": { bg: "bg-red-400", text: "text-red-900" },

    // Capacitación
    "training-scheduled": { bg: "bg-indigo-300", text: "text-indigo-900" },
    "training-completed": { bg: "bg-teal-300", text: "text-teal-900" },

    // Eventos sociales
    "event-conference": { bg: "bg-pink-300", text: "text-pink-900" },
    "event-workshop": { bg: "bg-yellow-400", text: "text-yellow-900" },

    // Color por defecto
    "default": { bg: "bg-gray-300", text: "text-gray-900" }
};