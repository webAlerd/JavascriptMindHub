// array con eventos futuros
function arrayUp(array){
    let arrayUpFilter = array.filter(up => up.date > data.currentDate)
    return arrayUpFilter
}
arrayUp(data.events)
// 
const mainCard = document.getElementById("main")
const divCheckbox = document.getElementById("checkboxList")
const search = document.getElementById("search")

function crearCards(array) {
    let card = ""
    array.forEach(evento => {
        card += `
        <div class="card cartahover" style="width: 18rem;">
          <img src="${evento.image}" class="card-img-top" alt="${evento.name}">
        <div class="card-body align-items-center">
        <h5 class="card-title text-center">${evento.name}</h5>
        <p class="card-text text-center">${evento.description}</p>
        <div class="d-flex align-content-center gap-3">
            <p>Price $ ${evento.price}</p>
            <a href="./detail.html?id=${evento._id}" class="flex-grow-1 btn btn-outline-light d-flex justify-content-center">Details</a>
        </div>
    </div>
    </div>`
    });
    mainCard.innerHTML = card
}
function crearCheckbox(array) {
    let CheckboxCategory = array.map(evento => evento.category)
    let setCheckboxCategory = new Set(CheckboxCategory)
    let arrayCheckboxCategory = Array.from(setCheckboxCategory)
    let checkboxDiv = ""
    arrayCheckboxCategory.forEach(evento => {
        checkboxDiv += `<div class="category form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="${evento}" value="${evento}">
            <label class="form-check-label" for="${evento}">${evento}</label>
    </div>`
    })
    divCheckbox.innerHTML = checkboxDiv
}
function filtrarCheckbox(array) {
    let checkboxes = Array.from(document.querySelectorAll("input[type='checkbox']"))
    let checkboxFilter = checkboxes.filter(check => check.checked)
    let filterChecks = checkboxFilter.map(check => check.value)
    if (filterChecks.length == 0) {
        return array
    }
    else {
        let arrayFilter = array.filter(element => filterChecks.includes(element.category))
        return arrayFilter
    }
}
function filtrarSearch(array, busqueda) {
    let searchFilter = array.filter(elemento => elemento.name.toLowerCase().includes(busqueda.toLowerCase()))
    return searchFilter
}
function filter() {
    let primerFiltro = filtrarSearch(arrayUp(data.events), search.value)
    let segundoFiltro = filtrarCheckbox(primerFiltro)
    crearCards(segundoFiltro)
}

divCheckbox.addEventListener('change', filter)
search.addEventListener('input', filter)

crearCards(arrayUp(data.events))
crearCheckbox(arrayUp(data.events))
