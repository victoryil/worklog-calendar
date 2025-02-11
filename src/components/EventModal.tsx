import React, { useEffect, useState } from "react";
import { CalendarEvent } from "../types";
import { getEventColor } from "../utils/colorUtils";

interface EventModalProps {
    events: CalendarEvent[];
    onClose: () => void;
}

export const EventModal: React.FC<EventModalProps> = ({ events, onClose }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 50); // Pequeño delay para la animación de entrada
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(onClose, 300); // Espera a que termine la animación antes de cerrar
    };

    return (
        <div className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <div className={`bg-white p-4 rounded-md shadow-lg max-w-sm w-full transform transition-all duration-300 ${isVisible ? "scale-100" : "scale-90"}`}>
                <h2 className="text-lg font-bold mb-4">Eventos del Día</h2>
                <ul>
                    {events.map((event, idx) => (
                        <li key={idx} className={`p-2 my-1 rounded ${getEventColor(event)}`}>
                            {event.title}
                        </li>
                    ))}
                </ul>
                <button
                    className="mt-4 w-full bg-red-500 text-white p-2 rounded transition-transform duration-200 hover:scale-105"
                    onClick={handleClose}
                >
                    Cerrar
                </button>
            </div>
        </div>
    );
};