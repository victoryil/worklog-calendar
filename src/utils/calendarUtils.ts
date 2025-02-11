import { startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, format, isSameMonth, parseISO } from "date-fns";
import { es, enUS } from "date-fns/locale";

export const generateMonthView = (month: string, locale: "es" | "en") => {
    const localeMap = { es, en: enUS };
    const firstDayOfMonth = parseISO(month); // "YYYY-MM"
    const startDate = startOfWeek(startOfMonth(firstDayOfMonth), { weekStartsOn: locale === "es" ? 1 : 0 });
    const endDate = endOfWeek(endOfMonth(firstDayOfMonth), { weekStartsOn: locale === "es" ? 1 : 0 });

    const days = [];
    let currentDate = startDate;

    while (currentDate <= endDate) {
        days.push({
            date: currentDate,
            formatted: format(currentDate, "d", { locale: localeMap[locale] }),
            isCurrentMonth: isSameMonth(currentDate, firstDayOfMonth),
        });
        currentDate = addDays(currentDate, 1);
    }

    return days;
};