import React from "react";
import { CalendarEvent } from "../../types";
import { useColorConfig } from "../../context/ColorConfigContext";
import { useEventColor } from "../../utils/colorUtils";
import { isToday } from "date-fns";

interface CalendarDayProps {
    day: { date: Date; formatted: string; isCurrentMonth: boolean };
    events: CalendarEvent[];
    onClick: () => void;
}

export const CalendarDay: React.FC<CalendarDayProps> = ({ day, events, onClick }) => {
    const { colors } = useColorConfig();
    const isCurrentMonth = day.isCurrentMonth ? colors.dayBackground : "bg-gray-200 text-gray-500";
    const highlightToday = isToday(day.date) ? colors.todayHighlight : "";

    return (
        <div
            className={`relative p-2 ${isCurrentMonth} ${highlightToday} border ${colors.dayBorder} 
            text-center aspect-square flex flex-col justify-between
            transition-transform transform hover:scale-105 hover:bg-gray-100 cursor-pointer active:scale-95`}
            onClick={onClick}
        >
            <span className="absolute top-2 right-2 text-xs md:text-sm font-semibold">
                {day.formatted}
            </span>

            <div className="flex flex-col gap-1 mt-6 overflow-hidden">
                {events.slice(0, 1).map((event) => {
                    const eventColor = useEventColor(event);
                    return (
                        <div key={event.id} className={`text-xs p-1 rounded-md shadow truncate ${eventColor}`}>
                            {event.title}
                        </div>
                    );
                })}

                {events.length > 1 && (
                    <button
                        className="text-xs text-blue-600 underline mt-1"
                        onClick={(e) => e.stopPropagation()}
                    >
                        +{events.length - 1}
                    </button>
                )}
            </div>
        </div>
    );
};