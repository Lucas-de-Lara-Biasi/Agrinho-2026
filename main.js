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

// MOSTRANDO INFORMAÇÕES NA DIV "FUTURO" //
let informacoes = {
    "1": {
        "title": "Cuidado de fontes hídricas",
        "descricao": "Significa cuidar das fontes hídricas da região, não as poluindo com agrotóxicos e as preservando de forma que ainda seja possível a produção.",
        "imagem": "assets/imagens/futuro/rios.jpg", // caminho até o arquivo
        "icon": "assets/sprites/futuro/future-hidrico.png" // caminho até o arquivo
    },
    "2": {
        "title": "Menos emissão de gases",
        "descricao": "É produzir evitando a produção de gases do efeito estufa, que esquentam o planeta, utilizando-se de placas solares e biogás.",
        "imagem": "assets/imagens/futuro/floresta.png", // caminho até o arquivo
        "icon": "assets/sprites/futuro/future-co2.png" // caminho até o arquivo
    },
    "3": {
        "title": "Agricultura repeitosa",
        "descricao": 'Significa plantar de um jeito que a terra consiga se recuperar, sem ficar "cansada" e/ou danificada, de uma forma que haja um respeito ao meio ambiente, e principalmente o solo.',
        "imagem": "assets/imagens/futuro/agricultura.jpg", // caminho até o arquivo
        "icon": "assets/sprites/futuro/future-respeito.png" // caminho até o arquivo
    },
    "4": {
        "title": "Equilíbrio entre a retirada e a reposição",
        "descricao": "É a ideia de que, se você tirou algo da natureza, precisa ajudar ela a se recompor. Com o replantio de árvores, ou a compensação em areas danificadas do meio ambiente, para haver um equilibrio entre as duas areas.",
        "imagem": "assets/imagens/futuro/equilibrio.png", // caminho até o arquivo
        "icon": "assets/sprites/futuro/future-equilibrio.png" // caminho até o arquivo
    },
    "5": {
        "title": "Cuidado com a fauna e flora",
        "descricao": "Significa proteger os animais e as plantas originais da região. Sem o desmatamente, que causa o fim do habitat de vários desses animais",
        "imagem": "assets/imagens/futuro/fauna.jpg", // caminho até o arquivo
        "icon": "assets/sprites/futuro/future-ambiente.png" // caminho até o arquivo
    },
    "6": {
        "title": "Utilização de recursos com eficiência",
        "descricao": "É utilizar os recursos de forma eficiente sem os desperdicar de forma errada e desrespeitosa. Utilizando-se da tecnologia para encontrar os meios mais eficientes para diminuir o desperdício.",
        "imagem": "assets/imagens/futuro/eficiencia.jpg", // caminho até o arquivo
        "icon": "assets/sprites/futuro/future-eficiencia.png" // caminho até o arquivo
    }
}

//Variaveis
let div_numero_atual = 1 //id do div atual
let max_div_quantidade = Object.keys(informacoes).length //Quantiade de elementos dentro do dict

//Future Display principal
const future_display = document.getElementById("future_display")

//Future controles
const future_next = document.getElementsByClassName("future_next")
const future_last = document.getElementsByClassName("future_last")
const future_close = document.getElementsByClassName("future_closest_js")

//Future Display
const future_info_display = document.getElementById("future_info_display") //onde as informações realmente estaram

const future_title = future_info_display.getElementsByClassName("future_title")[0]
const future_desc = future_info_display.getElementsByClassName("future_desc")[0]
const future_img = future_info_display.getElementsByClassName("future_img")[0]
const future_icon = future_info_display.getElementsByClassName("future_icon")[0]

//Atualiza as informações no display div
function atualizar_div() {
    let informacoes_atuais = informacoes[div_numero_atual]

    //Atualizar o div
    future_title.textContent = informacoes_atuais.title
    future_desc.textContent = informacoes_atuais.descricao
    future_img.style.backgroundImage = "url(" + informacoes_atuais.imagem + ")"
    future_icon.src = informacoes_atuais.icon

    future_display.style.visibility = "visible"
}

//Mostra o div quando o botão for clicado e atualiza ele
function mostrar_div(id) {
    setTimeout(atualizar_div, 155)
}

//Esconde o div quando o botão de saida for clicado
function fechar_div() {
    future_display.style.visibility = "hidden"
}

//Faz uma conta pra checar qual sera o proximo div ao apertar o botão de (proximo) ou (anterior)
function check_proximo_div(dir) {
    div_numero_atual = Number(div_numero_atual)

    if ((div_numero_atual + dir) > max_div_quantidade) {
        div_numero_atual = 1
    } else if ((div_numero_atual + dir) <= 0) {
        div_numero_atual = max_div_quantidade
    } else {
        div_numero_atual += dir
    }
    atualizar_div()
}

// Carrega as informações referentes ao numero do div no display;
for (let numinfo in informacoes) {
    div = document.getElementById("future_" + numinfo)
    icon = informacoes[numinfo].icon

    div.getElementsByClassName("img_b")[0].style.backgroundImage = "url(" + icon + ")"

    if (div) {
        div.addEventListener("click", () => {
            div_numero_atual = numinfo

            mostrar_div()
        })
    }
}

//Proximo
for (let i = 0; i < future_next.length; i++) {
    const button = future_next[i]
    button.addEventListener("click", () => {
        check_proximo_div(1)
    })
}

//Anterior
for (let i = 0; i < future_last.length; i++) {
    const button = future_last[i]
    button.addEventListener("click", () => {
        check_proximo_div(-1)
    })
}

//Fechar
for (let i = 0; i < future_close.length; i++) {
    const button = future_close[i]
    button.addEventListener("click", () => {
        fechar_div()
    })
}

//mobile positional_buttons desclicar//
const all_positional = document.getElementsByClassName("future_positional_button_mobile")
for (let i = 0; i < all_positional.length; i++) {
    const button = all_positional[i]
    button.addEventListener("click", () => {
        button.active = false
    })
}