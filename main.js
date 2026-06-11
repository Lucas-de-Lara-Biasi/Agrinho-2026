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
        "imagem": "", // caminho até o arquivo
        "icon": "assets/sprites/future/future-hidrico.png" // caminho até o arquivo
    },
    "2": {
        "title": "Menos emissão de gases",
        "descricao": "É produzir evitando a produção de gases do efeito estufa, que esquentam o planeta, utilizando-se de placas solares e biogás.",
        "imagem": "", // caminho até o arquivo
        "icon": "assets/sprites/future/future-co2.png" // caminho até o arquivo
    },
    "3": {
        "title": "Agricultura repeitosa",
        "descricao": 'Significa plantar de um jeito que a terra consiga se recuperar, sem ficar "cansada" e/ou danificada, de uma forma que haja um respeito ao meio ambiente, e principalmente o solo.',
        "imagem": "", // caminho até o arquivo
        "icon": "assets/sprites/bars-icon.png" // caminho até o arquivo
    },
    "4": {
        "title": "Equilíbrio entre a retirada e a reposição",
        "descricao": "É a ideia de que, se você tirou algo da natureza, precisa ajudar ela a se recompor. Com o replantio de árvores, ou a compensação em areas danificadas do meio ambiente, para haver um equilibrio entre as duas areas.",
        "imagem": "", // caminho até o arquivo
        "icon": "assets/sprites/bars-icon.png" // caminho até o arquivo
    },
    "5": {
        "title": "Cuidado com a fauna e flora natural",
        "descricao": "Significa proteger os animais e as plantas originais da região. Sem o desmatamente, que causa o fim do habitat de vários desses animais",
        "imagem": "", // caminho até o arquivo
        "icon": "assets/sprites/bars-icon.png" // caminho até o arquivo
    },
    "6": {
        "title": "Utilização de recursos com eficiência",
        "descricao": "É utilizar os recursos de forma eficiente sem os desperdicar de forma errada e desrespeitosa. Utilizando-se da tecnologia para encontrar os meios mais eficientes para diminuir o desperdício.",
        "imagem": "", // caminho até o arquivo
        "icon": "assets/sprites/bars-icon.png" // caminho até o arquivo
    }
}

//Variaveis
let div_numero_atual = 1 //id do div atual
let max_div_quantidade = Object.keys(informacoes).length //Quantiade de elementos dentro do dict

//Future Display principal
const future_display = document.getElementById("future_display")

//Future controles
const future_next = document.getElementById("future_next")
const future_last = document.getElementById("future_last")
const future_close = document.getElementById("future_close")

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
    future_img.src = informacoes_atuais.imagem
    future_icon.src = informacoes_atuais.icon
}

//Mostra o div quando o botão for clicado e atualiza ele
function mostrar_div(id) {
    future_display.style.visibility = "visible"
    atualizar_div()
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
            console.log("click no div {future_" + numinfo + "}")
            div_numero_atual = numinfo

            mostrar_div()
        })
    }
}

//Proximo
future_next.addEventListener("click", () => {
    check_proximo_div(1)
})

//Anterior
future_last.addEventListener("click", () => {
    check_proximo_div(-1)
})

//Fechar;
future_close.addEventListener("click", () => {
    fechar_div()
})

//CURIOSIDADE >>--------------------------------------------------------------
const curiosidade_button = document.getElementById("curiosidade_button");

const curiosidade_div = document.getElementById("curiosidade_div");
const curiosidade_title = curiosidade_div.getElementsByClassName("curiosidade_title")[0];
const curiosidade_desc = curiosidade_div.getElementsByClassName("curiosidade_desc")[0];
const curiosidade_img = curiosidade_div.getElementsByClassName("curiosidade_img")[0];

let curiosidades = [
    { "titulo": "TITULO 1", "desc": "descrição breve", "img": "assets/sprites/earth/earth-sad.png", "img_alt": "..." },
    { "titulo": "TITULO 2", "desc": "descrição breve", "img": "assets/sprites/earth/earth-sad.png", "img_alt": "..." },
    { "titulo": "TITULO 3", "desc": "descrição breve", "img": "assets/sprites/earth/earth-sad.png", "img_alt": "..." },
    { "titulo": "TITULO 4", "desc": "descrição breve", "img": "assets/sprites/earth/earth-sad.png", "img_alt": "..." },
    { "titulo": "TITULO 5", "desc": "descrição breve", "img": "assets/sprites/earth/earth-sad.png", "img_alt": "..." },
    { "titulo": "TITULO 6", "desc": "descrição breve", "img": "assets/sprites/earth/earth-sad.png", "img_alt": "..." },
    { "titulo": "TITULO 7", "desc": "descrição breve", "img": "assets/sprites/earth/earth-sad.png", "img_alt": "..." },
]

let curiosidades_length = curiosidades.length - 1;
let ultima_curiosidade = 0

//função que pega um numero aleatorio
const RandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

//Quando o botão for clicado gerar uma curiosidade aleatória e mudar as infos no div >>
curiosidade_button.addEventListener("click", () => {
    //Gerar aleatoria que não é igual a ultima >

    c_curiosidade = RandomNumber(0, curiosidades_length)
    if (c_curiosidade == ultima_curiosidade) {
        while (c_curiosidade == ultima_curiosidade) {
            c_curiosidade = RandomNumber(0, curiosidades_length)
        }
    }
    ultima_curiosidade = c_curiosidade

    //Muda as informações do div >>

})