const theme_button = document.getElementById("theme_checkbox")
var THEME = "light"

//Carrega do localStorage o valor do tema (caso ja tenha algo salvo) >>
if (localStorage.getItem("theme")) {
    THEME = localStorage.getItem("theme")
    document.documentElement.setAttribute('data-theme', THEME);

    if (THEME == "dark") {
        theme_button.setAttribute("checked", true)
    }
}

//Addc um listener para o checkbox que muda o tema >>
theme_button.addEventListener("change", () => {
    //SE FOR CLARO MUDA PRO MODO ESCURO E VISSE VERSA
    if (theme_button.checked) {
        THEME = "dark"
    } else {
        THEME = "light"
    }

    document.documentElement.setAttribute('data-theme', THEME);
    localStorage.setItem("theme", THEME)
})

