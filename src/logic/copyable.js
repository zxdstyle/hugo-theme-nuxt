export function copyable(btn, value) {
    btn.innerText = "copied"
    setTimeout(() => {
        btn.innerText = "copy"
    }, 500)

    let textarea = document.createElement("textarea", {})
    textarea.style.position = "absolute"
    textarea.style.top = "0"
    textarea.style.left = "0"
    textarea.style.opacity = "0"
    textarea.style.zIndex = "-10"
    textarea.value = value // 修改文本框的内容
    document.body.appendChild(textarea)

    textarea.select() // 选中文本
    document.execCommand("copy") // 执行浏览器复制命令

    textarea.remove()
}
