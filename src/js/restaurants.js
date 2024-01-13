let restaurants = document.querySelector('#restaurants-section')

export function loadRestaurants() {
    restaurants.innerHTML = /* html */ `
    <h3 class="my-restaurants-title h3 text-center">Most Popular Restaurants</h3>
    <div class="my-restaurants-container d-flex align-items-center">
        <div class="my-restaurant-container d-flex flex-column align-items-center justify-content-evenly">
            <div class="my-restaurant-image"></div>
            <p class="my-restaurant-description m-0 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div class="my-restaurant-container d-flex flex-column align-items-center justify-content-evenly">
            <div class="my-restaurant-image"></div>
            <p class="my-restaurant-description m-0 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div class="my-restaurant-container d-flex flex-column align-items-center justify-content-evenly">
            <div class="my-restaurant-image"></div>
            <p class="my-restaurant-description m-0 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div class="my-restaurant-container d-flex flex-column align-items-center justify-content-evenly">
            <div class="my-restaurant-image"></div>
            <p class="my-restaurant-description m-0 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
    </div>
    `
}