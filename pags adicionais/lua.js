'use strict'

async function pegarImagemL(){
    const urlAPiPicLua = `https://images-api.nasa.gov/search?q=apollo&description=moon`
    const responseL = await fetch(urlAPiPicLua)
    const dadosL = await responseL.json()
    const imgL = dadosL.collection.items  
    const imagensLuai = []
    
    imgL.forEach(imagemLua => {
     imagensLuai.push(imagemLua)         
    })

    return imagensLuai
}

function criarImgM(imagensLuai){
    const imagensLua = []
    imagensLua.push(imagensLuai)
    console.log(imagensLua)

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
criarImgM()