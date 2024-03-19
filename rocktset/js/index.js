
function logg (){
    const html = document.documentElement
    html.classList.toggle('light')

//primeiro pega a imagem
    const img = document.querySelector("#profile img")
//substituir a imagem
    if(html.classList.contains('light')){
//se tiver light mode, adiciona imagem
    img.setAttribute("src", "/sungzinho/img/icone 3.jpg")
}else {  
// se nao tiver light mode manter a imagem nnormal
    img.setAttribute("src", "/sungzinho/img/icone4.jpg")
}
}
function mudafoto(foto){
    document.getElementById("profile").src = foto;

}
