import React, { createContext, useState, ReactNode } from "react";

// Tipo de estructura para los colores personalizables
interface ColorConfig {
    [key: string]: { bg: string; text: string };
}

// Configuración inicial de colores
const defaultColors: ColorConfig = {
    "worklog-approved": { bg: "bg-green-300", text: "text-green-900" },
    "worklog-pending": { bg: "bg-yellow-300", text: "text-yellow-900" },
    "worklog-rejected": { bg: "bg-red-300", text: "text-red-900" },

    "absence-vacation": { bg: "bg-blue-200", text: "text-blue-900" },
    "absence-sick_leave": { bg: "bg-purple-300", text: "text-purple-900" },
    "absence-holiday": { bg: "bg-gray-200", text: "text-gray-900" },

    "meeting-confirmed": { bg: "bg-cyan-300", text: "text-cyan-900" },
    "meeting-pending": { bg: "bg-orange-300", text: "text-orange-900" },
    "meeting-cancelled": { bg: "bg-red-400", text: "text-red-900" },

    "training-scheduled": { bg: "bg-indigo-300", text: "text-indigo-900" },
    "training-completed": { bg: "bg-teal-300", text: "text-teal-900" },

    "default": { bg: "bg-gray-300", text: "text-gray-900" }
};

// Crear el contexto
export const ColorConfigContext = createContext<{
    colors: ColorConfig;
    setColors: (colors: ColorConfig) => void;
}>({
    colors: defaultColors,
    setColors: () => {}
});

// **Proveedor del contexto**
export const ColorConfigProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [colors, setColors] = useState<ColorConfig>(defaultColors);

    return (
        <ColorConfigContext.Provider value={{ colors, setColors }}>
            {children}
        </ColorConfigContext.Provider>
    );
};