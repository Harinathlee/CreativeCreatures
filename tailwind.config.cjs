/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{hrml,js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {},
    //adding font family for knowme text to reuse
    fontFamily: {
      signature: ["Great Vibes"],
      Roboto: ["Roboto"],
      La_Belle_Aurore: ["La Belle Aurore"],
      Open_Sans: ["Open Sans"],
      Playfair_Display: ["Playfair Display"],
      Spirax: ["Spirax"],
      Style_Script: ["Style Script"],
      Rowdies: ["Rowdies"]
    },
  },
  plugins: [require("tw-elements/dist/plugin"), require("rippleui")],
};
