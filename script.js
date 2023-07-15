function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, add a img light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos escuro, fundo colorido com roxo e azul"
    )
  } else {
    //se tiver sem light mode, manter a img normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}
