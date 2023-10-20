'use strict'

async function pegarImagemM(){
    const urlAPiPicMarte = `https://mars-photos.herokuapp.com/api/v1/rovers/curiosity/latest_photos?api_key=aPYdTFBOJ3plq0jbUcveZsqBmASwOcl7RksDVUB8`
    const responseM = await fetch(urlAPiPicMarte)
    const dadosM = await responseM.json()
    const imgM = dadosM.latest_photos
    const imagensMarte = []
    
    imgM.forEach(imagemMarte => {
     imagensMarte.push(imagemMarte.img_src)         
    })
    return imagensMarte

}
function criarImgM(imagensMarte){
    const galeriaM = document.getElementById('galeriaM')
    
    imagensMarte.forEach(imagemMarte => {
        const i = 0
        const imgMar = document.createElement('img')
        imgMar.src = imagemMarte[i]
        galeriaM.appendChild(imgMar)      
    });    
}
async function mostrarImgM(){
    const imgMar = await pegarImagemM()
     criarImgM(imgMar)   
 }
criarImgM()