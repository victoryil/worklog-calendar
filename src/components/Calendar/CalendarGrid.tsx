import React from "react";
import { CalendarDay } from "./CalendarDay";
import { CalendarEvent } from "../../types";

interface CalendarGridProps {
    days: { date: Date; formatted: string; isCurrentMonth: boolean }[];
    eventsMap: Map<string, CalendarEvent[]>;
    onDayClick: (date: string) => void; // 🔥 Nueva función para manejar clicks
}

export const CalendarGrid: React.FC<CalendarGridProps> = ({ days, eventsMap, onDayClick }) => {
    return (
        <div className="grid grid-cols-7 w-full max-w-[90vw] lg:max-w-[80vw] xl:max-w-[70vw] gap-1">
            {days.map((day) => {
                const dateKey = day.date.toISOString().split("T")[0]; // Convertir a formato YYYY-MM-DD
                return (
                    <CalendarDay
                        key={dateKey}
                        day={day}
                        events={eventsMap.get(dateKey) || []}
                        onClick={() => onDayClick(dateKey)} // 🔥 Se ejecuta cuando se hace click en el día
                    />
                );
            })}
        </div>
    );
};