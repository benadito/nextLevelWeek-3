//Limit all the options about the map

const options = { 
    dragging: false,
    touchZoom: false,
    doubleClicksZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//get values from html 
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng= document.querySelector('span[data-lng]').dataset.lng


//Create map

const map = L.map('mapid', options).setView([lat,lng], 15); //Não vai mudar!
 

//Create and add tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);


//Create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})



//Create and add marker



L.marker([lat,lng], {icon})
.addTo(map)

/* image gallery */

function selectImage(){
    const button = event.currentTarget
    //Remover all active classes 
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass) 
    
    function removeActiveClass(button){
        button.classList.remove("active")
    }

    //Selecionar a imagem clicada
     const image = button.children[0]
     const imageContainer = document.querySelector(".orphanage-details > img")
    
    //Atualizar o container de imagem 

    imageContainer.src = image.src
    //Adicionar a classe .active para este botão
    button.classList.add('active')
}