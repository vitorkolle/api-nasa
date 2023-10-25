'use strict'

async function pegarImagemM(){
    const urlAPiPicMarte = `https://mars-photos.herokuapp.com/api/v1/rovers/curiosity/latest_photos?api_key=aPYdTFBOJ3plq0jbUcveZsqBmASwOcl7RksDVUB8`
    const responseM = await fetch(urlAPiPicMarte)
    const dadosM = await responseM.json()
    const imgM = dadosM.latest_photos
    const imagensMartei = []
    
    imgM.forEach(imagemMarte => {
     imagensMartei.push(imagemMarte.img_src)         
    })

    return imagensMartei
}

function criarImgM(imagensMartei){
    const imagensMarte = []
    console.log(imagensMarte)
    imagensMarte.push(imagensMartei)

    const galeriaM = document.getElementById('galeriaM')
    
    imagensMarte.forEach(imagemMarte => {
        let i = 0
        const imgMar = document.createElement('img')
        imgMar.src = imagemMarte[i]
        imgMar.classList.add('imagem-marte')
        galeriaM.appendChild(imgMar)    
        i++  
    });    
}
async function mostrarImgM(){
    const imgMar = await pegarImagemM()
     criarImgM(imgMar)   
 }
mostrarImgM()