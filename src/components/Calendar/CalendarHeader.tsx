import React from "react";
import { format, Locale } from "date-fns";
import { enUS, es } from "date-fns/locale";

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
        <div className="flex justify-between items-center mb-4">
            <div className="flex gap-2">
                <button className="p-2 bg-gray-200 rounded hover:bg-gray-300" onClick={onPrevYear}>&lt;&lt;</button>
                <button className="p-2 bg-gray-200 rounded hover:bg-gray-300" onClick={onPrevMonth}>&lt;</button>
            </div>
            <h2 className="text-lg font-bold capitalize">{formattedMonth}</h2>
            <div className="flex gap-2">
                <button className="p-2 bg-gray-200 rounded hover:bg-gray-300" onClick={onNextMonth}>&gt;</button>
                <button className="p-2 bg-gray-200 rounded hover:bg-gray-300" onClick={onNextYear}>&gt;&gt;</button>
            </div>
        </div>
    );
};