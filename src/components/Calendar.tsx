import React, { useState } from "react";
import { CalendarProps, CalendarEvent } from "../types";
import { generateMonthView } from "../utils/calendarUtils";
import { format, addMonths, subMonths, addYears, subYears } from "date-fns";
import { getEventColor } from "../utils/colorUtils";
import { EventModal } from "./EventModal";

export const Calendar: React.FC<CalendarProps> = ({ events, locale = "es" }) => {
    const [currentDate, setCurrentDate] = useState(new Date()); // Estado para el mes y año actuales
    const [selectedEvents, setSelectedEvents] = useState<CalendarEvent[] | null>(null); // Estado para eventos seleccionados

    // Generar la vista del mes actual
    const monthDays = generateMonthView(format(currentDate, "yyyy-MM"), locale);

    // Función para obtener eventos de un día específico
    const getEventsForDate = (date: string) => events.filter((event) => event.date === date);

    // Funciones para cambiar mes y año
    const nextMonth = () => setCurrentDate((prev) => addMonths(prev, 1));
    const prevMonth = () => setCurrentDate((prev) => subMonths(prev, 1));
    const nextYear = () => setCurrentDate((prev) => addYears(prev, 1));
    const prevYear = () => setCurrentDate((prev) => subYears(prev, 1));

    return (
        <div className="p-4 border rounded-md shadow-md mx-auto w-full max-w-screen-xl">
            {/* Barra de navegación para cambiar meses y años */}
            <div className="flex justify-between items-center mb-4">
                <div className="flex gap-2">
                    <button className="p-2 bg-gray-200 rounded hover:bg-gray-300" onClick={prevYear}>&lt;&lt;</button>
                    <button className="p-2 bg-gray-200 rounded hover:bg-gray-300" onClick={prevMonth}>&lt;</button>
                </div>
                <h2 className="text-lg font-bold">
                    {format(currentDate, "MMMM yyyy", { locale: locale === "es" ? undefined : undefined }).toUpperCase()}
                </h2>
                <div className="flex gap-2">
                    <button className="p-2 bg-gray-200 rounded hover:bg-gray-300" onClick={nextMonth}>&gt;</button>
                    <button className="p-2 bg-gray-200 rounded hover:bg-gray-300" onClick={nextYear}>&gt;&gt;</button>
                </div>
            </div>

            {/* Contenedor flexible del calendario */}
            <div className="w-full flex flex-col items-center">
                {/* Encabezado de los días de la semana */}
                <div className="grid grid-cols-7 w-full max-w-[90vw] lg:max-w-[80vw] xl:max-w-[70vw] text-center font-semibold bg-gray-100 p-2 rounded-md">
                    {(locale === "es"
                            ? ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"]
                            : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
                    ).map((day) => (
                        <div key={day} className="p-2 text-gray-700 text-xs md:text-sm lg:text-base">{day}</div>
                    ))}
                </div>

                {/* Contenedor de los días del mes */}
                <div className="grid grid-cols-7 w-full max-w-[90vw] lg:max-w-[80vw] xl:max-w-[70vw] gap-1">
                    {monthDays.map((day, index) => {
                        const isCurrentMonth = day.isCurrentMonth ? "bg-white" : "bg-gray-200 text-gray-500";
                        const eventsForDay = getEventsForDate(format(day.date, "yyyy-MM-dd"));

                        return (
                            <div
                                key={index}
                                className={`relative p-2 border rounded-lg ${isCurrentMonth} text-center aspect-square flex flex-col justify-between`}
                            >
                                {/* Número del día en la esquina superior derecha */}
                                <span className="absolute top-2 right-2 text-xs md:text-sm font-semibold">{day.formatted}</span>

                                {/* Contenedor de eventos */}
                                <div className="flex flex-col gap-1 mt-6 overflow-hidden">
                                    {eventsForDay.slice(0, 1).map((event, idx) => (
                                        <div
                                            key={idx}
                                            className={`text-xs p-1 rounded-md shadow truncate ${getEventColor(event)}`}
                                        >
                                            {event.title}
                                        </div>
                                    ))}

                                    {/* Si hay más de 1 evento, mostrar "+N" en una línea separada */}
                                    {eventsForDay.length > 1 && (
                                        <button
                                            className="text-xs text-blue-600 underline mt-1"
                                            onClick={() => setSelectedEvents(eventsForDay)}
                                        >
                                            +{eventsForDay.length - 1}
                                        </button>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Renderizamos el modal si hay eventos seleccionados */}
            {selectedEvents && (
                <EventModal events={selectedEvents} onClose={() => setSelectedEvents(null)} />
            )}
        </div>
    );
};