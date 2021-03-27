import { register } from "./feather"
import { initHighlight } from "./hightlight"
// import { initTheme } from "./theme"

document.onreadystatechange = () => {
    if (document.readyState === "complete") {
        // 初始化 feather 图标
        register()

        // 初始化语法高亮
        initHighlight()

        // initTheme()

        menuClick()
    }
}

function menuClick() {
    let menuTitle = document.getElementsByClassName("menu-title")
    for (let i = 0; i < menuTitle.length; i++) {
        menuTitle[i].onclick = el => {
            let menuList = el.target.parentNode.parentNode.lastElementChild
            menuList.classList.toggle("hidden")
        }
    }
}
