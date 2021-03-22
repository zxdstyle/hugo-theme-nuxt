export function initTheme() {
    if (!localStorage.theme || localStorage.theme === "light") {
        setDarkTheme()
    } else {
        setLightTheme()
    }

    document.getElementById("themeBtn").onclick = () => {
        toggleTheme()
    }
}

export function toggleTheme() {
    if (!localStorage.theme || localStorage.theme === "light") {
        setDarkTheme()
        localStorage.theme = "dark"
    } else {
        setLightTheme()
        localStorage.removeItem("theme")
    }
}

const setDarkTheme = () => {
    document.documentElement.classList.add("dark-mode")
    document.documentElement.classList.remove("light-mode")
    document.getElementById("dark-btn").classList.add("hidden")
    document.getElementById("light-btn").classList.remove("hidden")
}

const setLightTheme = () => {
    document.documentElement.classList.remove("dark-mode")
    document.getElementById("light-btn").classList.add("hidden")
    document.getElementById("dark-btn").classList.remove("hidden")
}
