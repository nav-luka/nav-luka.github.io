function CopiarEnlace() {
    let Enlace = document.getElementById("enlace").getAttribute("href");
    document.getElementById("copiado").innerHTML = Enlace;
}

function CopiarUsuario() {
    let Enlace = document.getElementById("usuarios").getAttribute("href");
    document.getElementById("muestra").innerHTML = Enlace;
}