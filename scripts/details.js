const eventLocation = location.search
const params = new URLSearchParams(eventLocation)
const id = params.get("id")
const evento = data.events.find(event => event._id == id)
const divDetail = document.getElementById("main")
if(evento.assistance){
    divDetail.innerHTML =
    `    <div class="d-flex w-100 justify-content-center">
    <div class="details rounded-4 d-flex flex-nowrap">
         <img src="${evento.image}" class="rounded-1 imgdetail" alt="${evento.name}">
        <div class="s-flex d-column ms-2">
             <div class="d-flex flex-column">
                   <p class="text-light fw-bolder">Name: ${evento.name}</p>
                  <p class="text-light fw-bolder">Description: ${evento.description}</p>
             </div>
             <div>
                    <p class="text-light">Date: ${evento.date}</p>
                    <p class="text-light">Category: ${evento.category}</p>
                   <p class="text-light">Place: ${evento.place}</p>
                   <p class="text-light">Capacity: ${evento.capacity}</p>
                    <p class="text-light">Assistance: ${evento.assistance}</p>
                   <p class="text-light">Price: $${evento.price}</p>
             </div>
         </div>
      </div>
   </div>
    `
}
if(evento.estimate){
    divDetail.innerHTML =
    `    <div class="d-flex w-100 justify-content-center">
    <div class="details rounded-4 d-flex flex-nowrap">
         <img src="${evento.image}" class="rounded-1 imgdetail" alt="${evento.name}">
        <div class="s-flex d-column ms-2">
             <div class="d-flex flex-column">
                   <p class="text-light fw-bolder">Name: ${evento.name}</p>
                  <p class="text-light fw-bolder">Description: ${evento.description}</p>
             </div>
             <div>
                    <p class="text-light">Date: ${evento.date}</p>
                    <p class="text-light">Category: ${evento.category}</p>
                   <p class="text-light">Place: ${evento.place}</p>
                   <p class="text-light">Capacity: ${evento.capacity}</p>
                    <p class="text-light">Estimate: ${evento.estimate}</p>
                   <p class="text-light">Price: $${evento.price}</p>
             </div>
         </div>
      </div>
   </div>
    `
}