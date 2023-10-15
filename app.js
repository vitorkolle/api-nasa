'use strict'

const data_pic = document.getElementById('data-pic')

 const urlAPiPicDia = `https://api.nasa.gov/planetary/apod?api_key=aPYdTFBOJ3plq0jbUcveZsqBmASwOcl7RksDVUB8&title&date=${data_pic}`

 async function pegarImagem(){
    const responseP = await fetch(urlAPiPicDia)
    const dadosP = await responseP.json()
    console.log(dadosP) 
 }

 pegarImagem()
 
 
function lua(){
    window.location.href = "./pags/lua.html"
}

function mar(){
    window.location.href = "./pags/mar.html"
}

function pic(){
    window.location.href = "./pags/pic.html"
}