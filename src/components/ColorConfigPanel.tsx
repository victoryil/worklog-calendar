import React, { useState } from "react";
import { useColorConfig } from "../context/ColorConfigContext";

export const ColorConfigPanel: React.FC = () => {
    const { colors, setColors } = useColorConfig();
    const [localColors, setLocalColors] = useState(colors);

    const handleColorChange = (key: keyof typeof colors, value: string) => {
        setLocalColors({
            ...localColors,
            [key]: value,
        });
    };

    const applyChanges = () => {
        setColors(localColors);
    };

    return (
        <div className="p-4 border rounded-md shadow-md w-full max-w-lg mx-auto bg-gray-50">
            <h2 className="text-lg font-bold mb-4 text-center">🎨 Personalizar Colores</h2>
            <div className="flex flex-col gap-3">
                {Object.keys(colors).map((key) => (
                    <div key={key} className="flex justify-between items-center">
                        <span className="text-sm font-semibold capitalize">{key}</span>
                        <input
                            type="color"
                            value={localColors[key as keyof typeof colors]}
                            onChange={(e) => handleColorChange(key as keyof typeof colors, e.target.value)}
                        />
                    </div>
                ))}
            </div>
            <button
                className="mt-4 w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
                onClick={applyChanges}
            >
                Guardar Cambios
            </button>
        </div>
    );
};