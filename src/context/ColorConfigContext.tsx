import React, { createContext, useState, useContext } from "react";

interface ColorConfig {
    dayBackground: string;
    dayBorder: string;
    todayHighlight: string;
    eventBackground: string;
    eventText: string;
}

interface ColorConfigContextType {
    colors: ColorConfig;
    setColors: (colors: ColorConfig) => void;
}

const defaultColors: ColorConfig = {
    dayBackground: "bg-white",
    dayBorder: "border-gray-300",
    todayHighlight: "bg-blue-200",
    eventBackground: "bg-blue-500",
    eventText: "text-white",
};

const ColorConfigContext = createContext<ColorConfigContextType | undefined>(undefined);

export const ColorConfigProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [colors, setColors] = useState<ColorConfig>(defaultColors);

    return (
        <ColorConfigContext.Provider value={{ colors, setColors }}>
            {children}
        </ColorConfigContext.Provider>
    );
};

export const useColorConfig = (): ColorConfigContextType => {
    const context = useContext(ColorConfigContext);
    if (!context) {
        throw new Error("useColorConfig debe ser usado dentro de un ColorConfigProvider");
    }
    return context;
};