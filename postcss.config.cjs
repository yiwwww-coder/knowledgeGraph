module.exports = {
    plugins: {
        'postcss-px-to-viewport-8-plugin': {
            unitToConvert: 'px',    // 需要转换的单位
            viewportWidth: 1700,    // 设计稿视口宽度（通常以1080P为基准）
            unitPrecision: 5,       // 转换后的精度（保留小数位数）
            propList: ['*'],        // 能转化为vw的属性列表，*代表所有
            viewportUnit: 'vw',     // 希望使用的视口单位
            fontViewportUnit: 'vw', // 字体使用的视口单位
            selectorBlackList: ['.ignore-vw'], // 不进行转换的CSS类名
            minPixelValue: 1,       // 设置最小转换数值，1px不转换为vw
            mediaQuery: false,      // 允许在媒体查询中转换px
            exclude: [/node_modules/] // 排除第三方库
        }
    }
}