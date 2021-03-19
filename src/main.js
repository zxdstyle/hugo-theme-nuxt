import App from "./App.vue"
import { createApp } from "vue"

// import "./assets/less/style.less"
import "./assets/sass/style.scss"
import "./logic"

/************ animate.css **********/
import "animate.css/source/_vars.css"
import "animate.css/source/_base.css"
import "animate.css/source/fading_entrances/fadeInDown.css"
import "animate.css/source/sliding_entrances/slideInLeft.css"

if (process.env.NODE_ENV === "development") {
    createApp(App).mount("#app")
}
