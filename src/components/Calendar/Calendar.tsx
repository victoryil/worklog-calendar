import React, { useState, useMemo } from "react";
import { CalendarProps, CalendarEvent } from "../../types.ts";
import { generateMonthView } from "../../utils/calendarUtils.ts";
import {addMonths, subMonths, addYears, subYears, format} from "date-fns";
import { EventModal } from "../EventModal.tsx";
import { CalendarHeader } from "./CalendarHeader";
import { CalendarGrid } from "./CalendarGrid";

export const Calendar: React.FC<CalendarProps> = ({ events, locale = "es" }) => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedEvents, setSelectedEvents] = useState<CalendarEvent[] | null>(null);

    const monthDays = useMemo(() => generateMonthView(format(currentDate, "yyyy-MM"), locale), [currentDate, locale]);

    const eventsMap = useMemo(() => {
        const map = new Map<string, CalendarEvent[]>();
        events.forEach((event) => {
            const dateKey = new Date(event.date).toISOString().split("T")[0]; // Asegurar formato YYYY-MM-DD
            if (!map.has(dateKey)) {
                map.set(dateKey, []);
            }
            map.get(dateKey)?.push(event);
        });
        return map;
    }, [events]);

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

            <CalendarGrid
                days={monthDays}
                eventsMap={eventsMap}
                onDayClick={(events) => setSelectedEvents(events.length > 0 ? events : null)}
            />

            {selectedEvents && (
                <EventModal events={selectedEvents} onClose={() => setSelectedEvents(null)} />
            )}
        </div>
    );
};