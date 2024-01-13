let citiesSection = document.querySelector('#cities-container')

export function loadCities() {
    citiesSection.innerHTML = /* html */ `
    <div class="row">
              <div id="most-visited-container" class="col d-flex flex-column justify-content-start p-2">
                <p class="m-0">Ranking most visited</p>
                <div class="my-cities-container col d-flex flex-column justify-content-between p-2">
                    <div class="my-city-container-ranked d-flex justify-content-end align-items-end p-2">
                        <p class="m-0">Name of the city</p>
                    </div>
                    <div class="my-city-container-ranked d-flex justify-content-end align-items-end p-2">
                        <p class="m-0">Name of the city</p>
                    </div>
                    <div class="my-city-container-ranked d-flex justify-content-end align-items-end p-2">
                        <p class="m-0">Name of the city</p>
                    </div>
                    <div class="my-city-container-ranked d-flex justify-content-end align-items-end p-2">
                        <p class="m-0">Name of the city</p>
                    </div>
                    <div class="my-city-container-ranked d-flex justify-content-end align-items-end p-2">
                        <p class="m-0">Name of the city</p>
                    </div>
                    <div class="my-city-container-ranked d-flex justify-content-end align-items-end p-2">
                        <p class="m-0">Name of the city</p>
                    </div>
                </div>
              </div>
              <div class="col d-flex flex-column justify-content-between">
                <div class="my-city-container d-flex flex-column" >
                    <div class="my-city-photo"></div>
                    <div class="p-2">
                        <p class="my-city-description-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <button class="my-city-info-button w-50 align-self-end m-2">INFO</button>
                </div>
                <div class="my-city-container d-flex flex-column" >
                    <div class="my-city-photo"></div>
                    <div class="p-2">
                        <p class="my-city-description-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <button class="my-city-info-button w-50 align-self-end m-2">INFO</button>
                </div>
              </div>
              <div class="col d-flex flex-column justify-content-between">
                <div class="my-city-container d-flex flex-column" >
                    <div class="my-city-photo"></div>
                    <div class="p-2">
                        <p class="my-city-description-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <button class="my-city-info-button w-50 align-self-end m-2">INFO</button>
                </div>
                <div class="my-city-container d-flex flex-column" >
                    <div class="my-city-photo"></div>
                    <div class="p-2">
                        <p class="my-city-description-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <button class="my-city-info-button w-50 align-self-end m-2">INFO</button>
                </div>
              </div>
              <div class="col d-flex flex-column justify-content-between">
                <div class="my-city-container d-flex flex-column" >
                    <div class="my-city-photo"></div>
                    <div class="p-2">
                        <p class="my-city-description-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <button class="my-city-info-button w-50 align-self-end m-2">INFO</button>
                </div>
                <div class="my-city-container d-flex flex-column" >
                    <div class="my-city-photo"></div>
                    <div class="p-2">
                        <p class="my-city-description-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <button class="my-city-info-button w-50 align-self-end m-2">INFO</button>
                </div>
              </div>
            </div>
    `
}