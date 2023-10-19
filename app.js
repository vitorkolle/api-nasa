'use strict'

async function pegarImagemD(){
    let urlAPiPicDia = `https://api.nasa.gov/planetary/apod?api_key=aPYdTFBOJ3plq0jbUcveZsqBmASwOcl7RksDVUB8&date=&concept_tags=True`
    let responseP = await fetch(urlAPiPicDia)
    let dadosP = await responseP.json()
    let imgDia = dadosP.url
    return imgDia
 }

function criarImg(imgDia){
    let divD = document.getElementById('img-dia')
    let imgD = document.createElement('img')
    imgD.src = imgDia
    imgD.classList.add('img-d')
    divD.appendChild(imgD) 
}

async function mostrarImg(){
   let imgDia = await pegarImagemD()
    criarImg(imgDia)   
}
mostrarImg()

function mostrarData(){
let data = new Date();
let dia = String(data.getDate()).padStart(2, '0')
let mes = String(data.getMonth() + 1).padStart(2, '0')
let ano = data.getFullYear()
let dataAtual = `${dia}/ ${mes}/ ${ano}`

let divData = document.getElementById('data')
let txtData = document.createElement('p')
divData.appendChild(txtData)
txtData.textContent = `Dia da Foto: ${dataAtual}`
txtData.classList.add('txt-data')
}
mostrarData()
/*********************************************************************************************************************************** */
