export type WorklogStatus = "approved" | "rejected" | "pending";
export type AbsenceType = "vacation" | "sick_leave" | "holiday";

export interface CalendarEvent {
    id: string;
    date: string;
    type: "worklog" | "absence";
    status?: WorklogStatus;
    absenceType?: AbsenceType;
    title: string;
    description?: string;
}

export interface CalendarProps {
    events: CalendarEvent[];
    locale?: "es" | "en";
    onEventClick?: (event: CalendarEvent) => void;
}