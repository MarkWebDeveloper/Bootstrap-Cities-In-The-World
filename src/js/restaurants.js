let restaurants = document.querySelector('#restaurants-section')

export function loadRestaurants() {
    restaurants.innerHTML = /* html */ `
    <h3 class="my-restaurants-title h3 text-center">Most Popular Restaurants</h3>
    <div class="my-restaurants-container d-flex align-items-center justify-content-evenly">
        <div class="my-restaurant-container d-flex flex-column align-items-center justify-content-evenly">
            <div class="my-central my-restaurant-image"></div>
            <p class="my-restaurant-description m-0 text-center">Central Lima</p>
        </div>
        <div class="my-restaurant-container d-flex flex-column align-items-center justify-content-evenly">
            <div class="my-disfrutar my-restaurant-image"></div>
            <p class="my-restaurant-description m-0 text-center">Disfrutar Barcelona</p>
        </div>
        <div class="my-restaurant-container d-flex flex-column align-items-center justify-content-evenly">
            <div class="my-diverxo my-restaurant-image"></div>
            <p class="my-restaurant-description m-0 text-center">Divertxo Madrid</p>
        </div>
        <div class="my-restaurant-container d-flex flex-column align-items-center justify-content-evenly">
            <div class="my-asador-etxebarri my-restaurant-image"></div>
            <p class="my-restaurant-description m-0 text-center">Asador Etxebarri Atxondo</p>
        </div>
    </div>
    `
}