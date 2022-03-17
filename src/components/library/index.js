import SkeletonBlock from './SkeletonBlock.vue'

export default {
    install(app) {
        // 封装一个 骨架屏 全局组件
        app.component(SkeletonBlock, SkeletonBlock)
    }
}