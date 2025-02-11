import React, { useContext, useState, useEffect } from "react";
import { ColorConfigContext } from "../context/ColorConfigContext";

export const ColorConfigPanel: React.FC = () => {
    const { colors, setColors } = useContext(ColorConfigContext);
    const [localColors, setLocalColors] = useState(colors);

    // Cargar los colores desde localStorage al iniciar
    useEffect(() => {
        const storedColors = localStorage.getItem("eventColors");
        if (storedColors) {
            setLocalColors(JSON.parse(storedColors));
        }
    }, []);

    const handleColorChange = (category: string, key: "bg" | "text", value: string) => {
        setLocalColors({
            ...localColors,
            [category]: { ...localColors[category], [key]: value }
        });
    };

    const applyChanges = () => {
        setColors(localColors);
        localStorage.setItem("eventColors", JSON.stringify(localColors)); // Guardar en localStorage
    };

    return (
        <div className="p-4 border rounded-md shadow-md w-full max-w-lg mx-auto">
            <h2 className="text-lg font-bold mb-4 text-center">🎨 Configurar Colores</h2>
            <div className="flex flex-col gap-3">
                {Object.keys(colors).map((category) => (
                    <div key={category} className="flex justify-between items-center">
                        <span className="text-sm font-semibold">{category}</span>
                        <div className="flex gap-2">
                            <input
                                type="color"
                                value={localColors[category]?.bg || "#ffffff"}
                                onChange={(e) => handleColorChange(category, "bg", e.target.value)}
                            />
                            <input
                                type="color"
                                value={localColors[category]?.text || "#000000"}
                                onChange={(e) => handleColorChange(category, "text", e.target.value)}
                            />
                        </div>
                        <div
                            className="w-10 h-6 rounded border"
                            style={{
                                backgroundColor: localColors[category]?.bg || "#ffffff",
                                color: localColors[category]?.text || "#000000",
                                textAlign: "center",
                                lineHeight: "24px",
                                fontWeight: "bold"
                            }}
                        >
                            A
                        </div>
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