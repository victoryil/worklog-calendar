import React, { useState, useMemo } from "react";
import { CalendarProps, CalendarEvent } from "../../types";
import { generateMonthView } from "../../utils/calendarUtils";
import { addMonths, subMonths, addYears, subYears, format } from "date-fns";
import { EventModal } from "./../EventModal";
import { CalendarHeader } from "./CalendarHeader";
import { CalendarGrid } from "./CalendarGrid";

export const Calendar: React.FC<CalendarProps> = ({ events, locale = "es", onDayClick, onEventClick }) => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedEvents, setSelectedEvents] = useState<CalendarEvent[] | null>(null);

    // Generar los días del mes
    const monthDays = useMemo(() => generateMonthView(format(currentDate, "yyyy-MM"), locale), [currentDate, locale]);

    // Mapear eventos en base a la fecha
    const eventsMap = useMemo(() => {
        const map = new Map<string, CalendarEvent[]>();
        events.forEach((event) => {
            const dateKey = new Date(event.date).toISOString().split("T")[0]; // Formato YYYY-MM-DD
            if (!map.has(dateKey)) {
                map.set(dateKey, []);
            }
            map.get(dateKey)?.push(event);
        });
        return map;
    }, [events]);

    // 🔥 Manejar clic en un día del calendario
    const handleDayClick = (date: string) => {
        const dayEvents = eventsMap.get(date) || [];
        if (onDayClick) {
            onDayClick(date, dayEvents);
        }
    };

    // 🔥 Manejar clic en un evento o en `+X más`
    const handleEventClick = (events: CalendarEvent[]) => {
        setSelectedEvents(events); // 🔥 Abre el modal con los eventos
        if (onEventClick && events.length === 1) {
            onEventClick(events[0]); // 🔥 Si es un solo evento, llama a `onEventClick`
        }
    };

    return (
        <div className="p-4 border rounded-md shadow-md mx-auto w-full max-w-screen-xl">
            <CalendarHeader
                currentDate={currentDate}
                locale={locale}
                onNextMonth={() => setCurrentDate(addMonths(currentDate, 1))}
                onPrevMonth={() => setCurrentDate(subMonths(currentDate, 1))}
                onNextYear={() => setCurrentDate(addYears(currentDate, 1))}
                onPrevYear={() => setCurrentDate(subYears(currentDate, 1))}
            />

            <CalendarGrid days={monthDays} eventsMap={eventsMap} onDayClick={handleDayClick} onEventClick={handleEventClick} />

            {selectedEvents && (
                <EventModal events={selectedEvents} onClose={() => setSelectedEvents(null)} />
            )}
        </div>
    );
};