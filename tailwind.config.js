
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./**/*.{js,html}"],
  theme: {
    extend: {
      colors: {
        // اللون الخلفي الرئيسي للصفحة
        cream: "#FDF6E3", 
        // خلفية الشريط السفلي / Accent أساسي
        accent: "#66869F",
        // اللون الأساسي للأزرار
        primary: "#C8846C",
        // لون الحدود والأيقونات الخفيفة
        borderLight: "#D5D5D5",
        // لون النص الداكن
        textDark: "#333333",
        // لون mint الأخضر
        mint: "#95CAAC",
      },
      gridTemplateColumns: {
        // our custom class name: 'auto-fit-180'
        auto180: "repeat(auto-fit, minmax(180px, auto))",
        auto160: "repeat(auto-fit, minmax(160px, auto))",
        auto140: "repeat(auto-fit, minmax(140px, auto))",
      },
    },
  },
};


