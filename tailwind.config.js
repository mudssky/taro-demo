/* eslint-disable import/no-commonjs */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-rem2px-preset").createPreset({
      // 32 意味着 1rem = 32rpx
      fontSize: 32,
      // 转化的单位,可以变成 px / rpx
      unit: "rpx",
    }),
  ],
  corePlugins: {
    preflight: false,
  },
};
