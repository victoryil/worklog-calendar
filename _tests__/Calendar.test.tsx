import { render, screen, fireEvent } from "@testing-library/react";
import { expect, test, describe, vi } from "vitest";
import { CalendarEvent } from "../src/types";
import { Calendar } from "../src/components/Calendar/Calendar";
import { ColorConfigProvider } from "../src/context/ColorConfigContext"; // Importa el provider

// Definir eventos estándar y personalizados
type CustomEventType = "custom_workshop" | "custom_meeting";
type CustomEventStatus = "custom_pending" | "custom_approved";

const mockEvents: CalendarEvent<CustomEventType | "worklog", CustomEventStatus | "approved">[] = [
    { id: "1", date: "2025-02-11", type: "worklog", status: "approved", title: "Fichaje Aprobado" },
    { id: "2", date: "2025-02-15", type: "custom_workshop", status: "custom_approved", title: "Taller Avanzado" },
];

describe("Calendar Component con eventos personalizados", () => {
    test("renderiza eventos estándar y personalizados correctamente", () => {
        render(
            <ColorConfigProvider>
                <Calendar events={mockEvents} locale="es" />
            </ColorConfigProvider>
        );

        expect(screen.getByText("Fichaje Aprobado"));
        expect(screen.getByText("Taller Avanzado"));
    });

    test("ejecuta onEventClick cuando se hace clic en un evento personalizado", () => {
        const handleEventClick = vi.fn();

        render(
            <ColorConfigProvider>
                <Calendar events={mockEvents} locale="es" onEventClick={handleEventClick} />
            </ColorConfigProvider>
        );

        fireEvent.click(screen.getByText("Taller Avanzado"));

        expect(handleEventClick).toHaveBeenCalledWith(
            expect.objectContaining({ title: "Taller Avanzado", type: "custom_workshop", status: "custom_approved" })
        );
    });
});