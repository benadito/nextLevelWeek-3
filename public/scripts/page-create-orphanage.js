//Create map

const map = L.map('mapid').setView([-27.222633, -49.6455874], 15); //Não vai mudar!
 

//Create and add tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);


//Create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})

let marker;

// create and add marker 
map.on('click',(event) => {

    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remove icon 
    marker && map.removeLayer(marker)

    // add icon layer
    marker = L.marker([lat, lng], {icon})
    .addTo(map)

})


//Add field photo

function addPhotoField(){
    // Get the photo container #images
    const container = document.querySelector('#images')
    // Get the containers to duplicate    .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload')
    // Make the duplicate of the last image added
    const newFieldContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true)

    //Verify if the field is empty
    const input = newFieldContainer.children[0]

    if (input.value == ""){
        return 
    }
    //Clear the field before add to image container
    input.value = ""
    // Add clone to #images container
    container.appendChild(newFieldContainer)
}

function deleteField(event){
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if (fieldsContainer.length < 2){
        //clear the field value
        span.parentNode.children[0].value = ""
        return
    }

    //delete the field
    span.parentNode.remove();

}

// Toggle yes or no 

function toggleSelect(event) {

    // Remove the active class from the buttons
    document.querySelectorAll('.button-select button')
    .forEach( button => 
        button.classList.remove('active'))
    //Put the active class in this clicked button.
    const button = event.currentTarget
    button.classList.add('active')

    
    //Update my hidden input with  the selected value
        const input = document.querySelector('[name="open_on_weekends"]')

        //Verify if yes or no

        input.value = button.dataset.value


    }

    function validate(event) {

        //validar se latitude e longitude estão preenchidos
        const needsLatAndLng = false;
        if(needsLatAndLng){
            event.preventDefault()
            alert('Selecione um ponto no mapa')
        }
        
    }