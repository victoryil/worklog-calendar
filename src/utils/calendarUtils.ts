import { startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, format, isSameMonth } from "date-fns";
import { es, enUS } from "date-fns/locale";

export const generateMonthView = (month: string, locale: "es" | "en") => {
    const localeMap = { es, en: enUS };

    // Asegurar que `month` es una fecha válida con día 1
    const firstDayOfMonth = new Date(`${month}-01`); // "YYYY-MM-DD"

    const startDate = startOfWeek(startOfMonth(firstDayOfMonth), { weekStartsOn: locale === "es" ? 1 : 0 });
    const endDate = endOfWeek(endOfMonth(firstDayOfMonth), { weekStartsOn: locale === "es" ? 1 : 0 });

    const days = [];
    let currentDate = startDate;

    while (currentDate <= endDate) {
        days.push({
            date: new Date(currentDate), // Asegurar que es un objeto Date independiente
            formatted: format(currentDate, "d", { locale: localeMap[locale] }),
            isCurrentMonth: isSameMonth(currentDate, firstDayOfMonth),
        });
        currentDate = addDays(currentDate, 1);
    }

    return days;
};