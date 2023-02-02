/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "sidebar-bg": "#120F13",
        "chat-bg": "#252329",
        "input-bg": "#3C393F",
        primary: "#2F80ED",
        "user-bg": "#0B090C",
        secondary: "#E0E0E0",
      },
      boxShadow: {
        header: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
