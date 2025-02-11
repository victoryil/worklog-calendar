import React from "react";
import { format, Locale } from "date-fns";
import { enUS, es } from "date-fns/locale";
import { FaChevronLeft, FaChevronRight, FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa"; // 🔥 Agregar iconos

interface CalendarHeaderProps {
    currentDate: Date;
    locale: "es" | "en";
    onNextMonth: () => void;
    onPrevMonth: () => void;
    onNextYear: () => void;
    onPrevYear: () => void;
}

export const CalendarHeader: React.FC<CalendarHeaderProps> = ({ currentDate, locale, onNextMonth, onPrevMonth, onNextYear, onPrevYear }) => {
    const localesMap: Record<string, Locale> = { es, en: enUS };
    const formattedMonth = format(currentDate, "MMMM yyyy", { locale: localesMap[locale] });

    return (
        <div className="flex justify-between items-center mb-4 px-4">
            {/* Botones de navegación */}
            <div className="flex gap-2">
                <button className="calendar-btn" onClick={onPrevYear}><FaAngleDoubleLeft /></button>
                <button className="calendar-btn" onClick={onPrevMonth}><FaChevronLeft /></button>
            </div>

            {/* Nombre del mes y año */}
            <h2 className="text-xl font-bold capitalize text-gray-800">{formattedMonth}</h2>

            <div className="flex gap-2">
                <button className="calendar-btn" onClick={onNextMonth}><FaChevronRight /></button>
                <button className="calendar-btn" onClick={onNextYear}><FaAngleDoubleRight /></button>
            </div>
        </div>
    );
};