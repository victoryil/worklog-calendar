import React from "react";
import { CalendarEvent } from "../../types";
import { useEventColor } from "../../utils/colorUtils";

interface CalendarDayProps {
    day: { date: Date; formatted: string; isCurrentMonth: boolean };
    events: CalendarEvent[];
    onDayClick: () => void;
    onEventClick: (event: CalendarEvent) => void;
}

export const CalendarDay: React.FC<CalendarDayProps> = ({ day, events, onDayClick, onEventClick }) => {
    const isCurrentMonth = day.isCurrentMonth ? "bg-white" : "bg-gray-200 text-gray-500";

    return (
        <div
            className={`relative p-2 ${isCurrentMonth} border text-center aspect-square flex flex-col justify-between cursor-pointer hover:bg-gray-100 transition`}
            onClick={onDayClick} // 🔥 Disparar `onDayClick` cuando se haga clic en un día
        >
            <span className="absolute top-2 right-2 text-xs md:text-sm font-semibold">{day.formatted}</span>

            <div className="flex flex-col gap-1 mt-6 overflow-hidden">
                {events.slice(0, 2).map((event) => {
                    const eventColor = useEventColor(event);
                    return (
                        <button
                            key={event.id}
                            className={`text-xs p-1 rounded-md shadow truncate ${eventColor} hover:scale-105 transition`}
                            onClick={(e) => {
                                e.stopPropagation(); // ❌ Evita que el clic se propague al día
                                onEventClick(event); // 🔥 Llamar solo si se clicó en un evento
                            }}
                        >
                            {event.title}
                        </button>
                    );
                })}

                {events.length > 2 && (
                    <span className="text-xs text-blue-600 underline mt-1">+{events.length - 2} más</span>
                )}
            </div>
        </div>
    );
};