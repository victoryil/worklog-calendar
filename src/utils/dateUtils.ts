import { format, parseISO } from "date-fns";
import { es, enUS } from "date-fns/locale";

export const formatDate = (dateString: string, locale: "es" | "en" = "es"): string => {
    const localeMap = { es, en: enUS };
    const date = parseISO(dateString); // Convertir el string en fecha válida

    return format(date, "EEEE, d 'de' MMMM yyyy", { locale: localeMap[locale] });
};