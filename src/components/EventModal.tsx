import React from "react";
import { CalendarEvent } from "../types";
import { useEventColor } from "../utils/colorUtils";

interface EventModalProps {
    events: CalendarEvent[];
    onClose: () => void;
}

export const EventModal: React.FC<EventModalProps> = ({ events, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300">
            <div className="bg-white p-4 rounded-md shadow-lg max-w-sm w-full transform transition-all duration-300 scale-100">
                <h2 className="text-lg font-bold mb-4">Eventos del Día</h2>
                <ul>
                    {events.map((event, idx) => {
                        const eventColor = useEventColor(event);
                        return (
                            <li key={idx} className={`p-2 my-1 rounded ${eventColor}`}>
                                {event.title}
                            </li>
                        );
                    })}
                </ul>
                <button
                    className="mt-4 w-full bg-red-500 text-white p-2 rounded hover:bg-red-600 transition"
                    onClick={onClose}
                >
                    Cerrar
                </button>
            </div>
        </div>
    );
};