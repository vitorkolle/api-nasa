'use strict'

async function pegarImagemD(){
    const urlAPiPicDia = `https://api.nasa.gov/planetary/apod?api_key=aPYdTFBOJ3plq0jbUcveZsqBmASwOcl7RksDVUB8&date=&concept_tags=True`
    const responseP = await fetch(urlAPiPicDia)
    const dadosP = await responseP.json()
    const imgDia = dadosP.url
    return imgDia
 }

function criarImg(imgDia){
    const divD = document.getElementById('img-dia')
    const imgD = document.createElement('img')
    imgD.src = imgDia
    imgD.classList.add('img-d')
    divD.appendChild(imgD) 
}

async function mostrarImgD(){
   const imgDia = await pegarImagemD()
    criarImg(imgDia)   
}
mostrarImgD()

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
