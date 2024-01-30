// DARK MODE

let sol = document.querySelector("#sun");
let lua = document.querySelector("#moon");

let corpo = document.querySelector("body");

let logo = document.querySelector(".logo");

let darkMobile = document.querySelector(".dark_mobile");
let lightMobile = document.querySelector(".light_mobile");

lua.addEventListener("click", darkModeAtivo)
sol.addEventListener("click", darkModeDesativo)

darkMobile.addEventListener("click", darkModeAtivo)
lightMobile.addEventListener("click", darkModeDesativo)

function darkModeAtivo(){

    corpo.classList.add("darkMode")

    sol.style.display = "flex"
    lua.style.display = 'none'

    logo.setAttribute("src", "logo_dark.png")

    darkMobile.style.display = "none"
    lightMobile.style.display = "flex"
}

function darkModeDesativo(){

    corpo.classList.remove("darkMode")

    sol.style.display = "none"
    lua.style.display = 'flex'

    logo.setAttribute("src", "logo_light.png")

    lightMobile.style.display = "none"
    darkMobile.style.display = "flex"
}

// MENU HAMBURGUER

let menuHamburguer = document.querySelector(".menu_hamburguer")
let menuHamburguerAtivo = document.querySelector(".menu_hamburguer_ativo")
let fecharMenu = document.querySelector(".fechar_menu")

menuHamburguer.addEventListener("click", ativarMenuHamburguer)

fecharMenu.addEventListener("click", menuHamburguerDesativo)

function ativarMenuHamburguer(){

    menuHamburguerAtivo.style.display = "flex"

    fecharMenu.style.display = "flex"
}

function menuHamburguerDesativo(){

    menuHamburguerAtivo.style.display = "none"

    fecharMenu.style.display = "none"
}

// VOLTAR AO TOPO

let botaoVoltarTopo = document.querySelector(".voltar_topo")

window.addEventListener("scroll", aparecerBotaoTopo)

function aparecerBotaoTopo(){

    let scrollTop = window.pageYOffset

    if(scrollTop > 900){

        botaoVoltarTopo.style.display = "flex"
    } else {

        botaoVoltarTopo.style.display = "none"
    }
}

botaoVoltarTopo.addEventListener("click", voltarTopo)

function voltarTopo(){

    window.scrollTo({

        top: 0,
        behavior: "smooth"
    })
}