export type WorklogStatus = "approved" | "rejected" | "pending";
export type AbsenceType = "vacation" | "sick_leave" | "holiday";
export type MeetingStatus = "confirmed" | "pending" | "cancelled";
export type TrainingStatus = "scheduled" | "completed";
export type EventCategory = "conference" | "workshop";

export type EventStatus = WorklogStatus | AbsenceType | MeetingStatus | TrainingStatus | EventCategory;
export type EventType = "worklog" | "absence" | "meeting" | "training" | "event";

// Se permite que el usuario pase sus propios tipos de eventos y estados
export interface CalendarEvent<T extends string = EventType, S extends string = EventStatus> {
    id: string;
    date: string;
    type: T;
    status?: S;
    title: string;
    description?: string;
}

export interface CalendarProps<T extends string = EventType, S extends string = EventStatus> {
    events: CalendarEvent<T, S>[];
    locale?: "es" | "en";
    onDayClick?: (date: string, events: CalendarEvent<T, S>[]) => void;
    onEventClick?: (event: CalendarEvent<T, S>) => void;
}