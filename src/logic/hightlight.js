import { copyable } from "./copyable"

export function initHighlight() {
    let carbon = `
<figcaption class="custom">
    <div class="custom-carbon">
        <div class="custom-carbon-dot custom-carbon-dot--red"></div>
        <div class="custom-carbon-dot custom-carbon-dot--yellow"></div>
        <div class="custom-carbon-dot custom-carbon-dot--green"></div>
    </div>
    <span class="copyable">copy</span>
</figcaption>
`

    let highlights = document.getElementsByClassName("highlight")
    for (let i = 0; i < highlights.length; i++) {
        highlights[i].innerHTML = carbon + highlights[i].innerHTML

        let copybtns = highlights[i].getElementsByClassName("copyable")

        for (let h = 0; h < copybtns.length; h++) {
            copybtns[h].addEventListener("click", el => {
                let text = el.target.parentNode.parentNode.lastChild.innerText
                copyable(el.target, text)
            })
        }
    }
}
