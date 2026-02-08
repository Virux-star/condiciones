/*parte 1*/
document.addEventListener("DOMContentLoaded", () => {
    const imagen = document.getElementById("boton");
    imagen.addEventListener("click", () => {
        if (imagen.style.border === ""){
            imagen.style.border = "2px solid red";
        } else {
            imagen.style.border = "";
        }
    });
/*parte 2*/
    document.getElementById("btnStickers").addEventListener("click", () => {
        const s1 = Number(document.getElementById("sticker1").value);
        const s2 = Number(document.getElementById("sticker2").value);
        const s3 = Number(document.getElementById("sticker3").value);
        const total = s1 + s2 + s3;

        const resultado = document.getElementById("resultadoStickers");
        resultado.textContent = total <= 10
            ? `Llevas ${total} stickers`
            : "Llevas demasiados stickers";
    });
/*parte 3*/
    document.getElementById("btnPassword").addEventListener("click", () => {
        const password =
            document.getElementById("p1").value +
            document.getElementById("p2").value +
            document.getElementById("p3").value;

        const resultado = document.getElementById("resultadoPassword");

        if (password === "911") {
            resultado.textContent = "password 1 correcto";
        } else if (password === "714") {
            resultado.textContent = "password 2 correcto";
        } else {
            resultado.textContent = "password incorrecto";
        }
    });
});