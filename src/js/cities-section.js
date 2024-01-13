let citiesSection = document.querySelector('#cities-container')

export function loadCities() {
    citiesSection.innerHTML = /* html */ `
    <div class="row">
              <div id="most-visited-container" class="col d-flex flex-column justify-content-start p-2">
                <p class="m-0 h6">Ranking most visited</p>
                <div class="my-cities-container col d-flex flex-column justify-content-between p-2">
                    <div id="hong-kong-photo" class="hong-kong-photo my-city-container-ranked d-flex justify-content-end align-items-end p-2">
                        <p class="m-0">Hong Kong</p>
                    </div>
                    <div id="bangkok-photo" class="bangkok-photo my-city-container-ranked d-flex justify-content-end align-items-end p-2">
                        <p class="m-0">Bangkok</p>
                    </div>
                    <div id="london-photo" class="london-photo my-city-container-ranked d-flex justify-content-end align-items-end p-2">
                        <p class="m-0">London</p>
                    </div>
                    <div id="singapore-photo" class="singapore-photo my-city-container-ranked d-flex justify-content-end align-items-end p-2">
                        <p class="m-0">Singapore</p>
                    </div>
                    <div id="macau-photo" class="macau-photo my-city-container-ranked d-flex justify-content-end align-items-end p-2">
                        <p class="m-0">Macau</p>
                    </div>
                    <div id="paris-photo" class="paris-photo my-city-container-ranked d-flex justify-content-end align-items-end p-2">
                        <p class="m-0">Paris</p>
                    </div>
                </div>
              </div>
              <div class="col d-flex flex-column justify-content-between">
                <div class="my-city-container d-flex flex-column" >
                    <div id="hong-kong" class="hong-kong-photo my-city-photo"></div>
                    <div class="p-2">
                        <p class="my-city-description-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <button class="my-city-info-button w-50 align-self-end m-2">INFO</button>
                </div>
                <div class="my-city-container d-flex flex-column" >
                    <div class="singapore-photo my-city-photo"></div>
                    <div class="p-2">
                        <p class="my-city-description-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <button class="my-city-info-button w-50 align-self-end m-2">INFO</button>
                </div>
              </div>
              <div class="col d-flex flex-column justify-content-between">
                <div class="my-city-container d-flex flex-column" >
                    <div class="bangkok-photo my-city-photo"></div>
                    <div class="p-2">
                        <p class="my-city-description-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <button class="my-city-info-button w-50 align-self-end m-2">INFO</button>
                </div>
                <div class="my-city-container d-flex flex-column" >
                    <div class="macau-photo my-city-photo"></div>
                    <div class="p-2">
                        <p class="my-city-description-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <button class="my-city-info-button w-50 align-self-end m-2">INFO</button>
                </div>
              </div>
              <div class="col d-flex flex-column justify-content-between">
                <div class="my-city-container d-flex flex-column" >
                    <div class="london-photo my-city-photo"></div>
                    <div class="p-2">
                        <p class="my-city-description-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <button class="my-city-info-button w-50 align-self-end m-2">INFO</button>
                </div>
                <div class="my-city-container d-flex flex-column" >
                    <div class="paris-photo my-city-photo"></div>
                    <div class="p-2">
                        <p class="my-city-description-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <button class="my-city-info-button w-50 align-self-end m-2">INFO</button>
                </div>
              </div>
            </div>
    `
}