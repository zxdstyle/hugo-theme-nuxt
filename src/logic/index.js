import { register } from "./feather"
import { initHighlight } from "./hightlight"

document.onreadystatechange = () => {
    if (document.readyState === "complete") {
        // 初始化 feather 图标
        register()

        // 初始化语法高亮
        initHighlight()
    }
}
