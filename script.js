function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // O switch pode ser feito das duas formas: ou da forma abaixo mais detalhada ou somente pela funçao "toggle

  // if(html.classList.contains('light')){
  // html.classList.remove('light')
  //  } else{
  //  html.classList.add('light')
  //   }

  // pegar a tag img

  const img = document.querySelector("#profile img")

  // substituir a imagem se
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar.png")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }

  const Dprofile = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    Dprofile.setAttribute("alt", "foto dum cara feio")
  } else {
    Dprofile.setAttribute("alt", "Foto de Tommas Shelby fumando cigarro")
  }
}
