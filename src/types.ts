export type WorklogStatus = "approved" | "rejected" | "pending";
export type AbsenceType = "vacation" | "sick_leave" | "holiday";
export type MeetingStatus = "confirmed" | "pending" | "cancelled";
export type TrainingStatus = "scheduled" | "completed";
export type EventCategory = "conference" | "workshop";

// **Nuevos Tipos de Estado**
export type EventStatus = WorklogStatus | AbsenceType | MeetingStatus | TrainingStatus | EventCategory;

// **Tipos de eventos permitidos**
export type EventType = "worklog" | "absence" | "meeting" | "training" | "event";

// **Estructura del evento en el calendario**
export interface CalendarEvent {
    id: string;
    date: string; // Formato "YYYY-MM-DD"
    type: EventType;
    status?: EventStatus;
    title: string;
    description?: string;
}

// **Propiedades del componente de calendario**
export interface CalendarProps {
    events: CalendarEvent[];
    locale?: "es" | "en";
    onDayClick?: (date: string, events: CalendarEvent[]) => void;
    onEventClick?: (event: CalendarEvent) => void;
}