const imagen = document.getElementById("boton");
imagen.addEventListener("click", () => {
    if (imagen.style.border === ""){
        imagen.style.border = "2px solid red";
    } else {
        imagen.style.border = "";
    }
    
});

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