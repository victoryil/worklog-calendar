import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    build: {
        lib: {
            entry: "src/index.tsx",
            name: "WorklogCalendar",
            fileName: (format) => `worklog-calendar.${format}.js`,
        },
        rollupOptions: {
            external: ["react", "react-dom"],
        }
    }
});