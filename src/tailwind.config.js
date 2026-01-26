/** @type {import('tailwindcss').Config} */

export const content = ["./src/**/*.{html,js,jsx,ts,tsx}"];
export const theme = {
    extend: {
        colors: {
            primary: "var(--primary)",
            secondary: "var(--secondary)",
            darkprimary: "var(--darkprimary)",
        },
    },
};
export const plugins = [];
