let contenedorMain = document.getElementById = (main)
for (events of data.events) {
    if (events.date > data.currentDate) {
        console.log(events);
        let card = document.createElement("div")
        card.classList.add("card")
        card.classList.add("cartahover")
        card.style.width = "18rem"
        let image = document.createElement("img")
        image.src = events.image
        image.classList.add("card-img-top")
        image.alt = data.events.name
        let cardBody = document.createElement("div")
        cardBody.innerHTML = `
    <div class="card-body align-items-center">
        <h5 class="card-title text-center">${events.name}</h5>
        <p class="card-text text-center">${events.description}.</p>
        <div class="d-flex align-content-center gap-3">
            <p>Price $ ${events.price}</p>
            <a href="./cinemadetail.html"class="flex-grow-1 btn btn-outline-light d-flex justify-content-center">Details</a>
        </div>
    </div>
    `
        card.appendChild(image)
        card.appendChild(cardBody)
        contenedorMain.appendChild(card)
    }
}