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
    imagensMarte.push(imagensMartei)

    const galeriaM = document.getElementById('galeriaM')
    
    imagensMarte.forEach(imagemMarte => {
        const imgMar = document.createElement('img')
        imgMar.src = imagemMarte[0]
        imgMar.classList.add('imagem-marte')
        galeriaM.appendChild(imgMar)     
    });    
}
async function mostrarImgM(){
    const imgMar = await pegarImagemM()
     criarImgM(imgMar)   
 }
mostrarImgM()

function mostrarData(){
    const data = new Date();
    const dia = String(data.getDate()).padStart(2, '0')
    const mes = String(data.getMonth() + 1).padStart(2, '0')
    const ano = data.getFullYear()
    const dataAtual = `${dia}/ ${mes}/ ${ano}`
    
    const divData = document.getElementById('data')
    const txtData = document.createElement('p')
    divData.appendChild(txtData)
    txtData.textContent = `Dia da Foto: ${dataAtual}`
    txtData.classList.add('txt-data')
    }
    mostrarData()