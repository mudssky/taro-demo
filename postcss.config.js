/* eslint-disable import/no-commonjs */
// postcss.config.js
// 假如你使用的框架/工具不支持 postcss.config.js，则可以使用内联的写法
// 其中 `autoprefixer` 有可能已经内置了，假如框架内置了可以去除
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    // 把项目里，所有的 rem 都转化成 rpx
    // "postcss-rem-to-responsive-pixel": {
    //   // 32 意味着 1rem = 32rpx
    //   rootValue: 32,
    //   // 默认所有属性都转化
    //   propList: ["*"],
    //   // propList: ["font", "font-size"],
    //   // 转化的单位,可以变成 px / rpx
    //   transformUnit: "px",
    // },
  },
};
