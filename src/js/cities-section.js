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
                        <p class="my-city-description-text m-0"><b>Hong Kong</b> - city and a special administrative region in China.</p>
                    </div>
                    <button class="my-city-info-button w-50 align-self-end m-2">INFO</button>
                </div>
                <div class="my-city-container d-flex flex-column" >
                    <div class="singapore-photo my-city-photo"></div>
                    <div class="p-2">
                        <p class="my-city-description-text m-0"><b>Singapore</b> -  island country and city-state in maritime Southeast Asia.</p>
                    </div>
                    <button class="my-city-info-button w-50 align-self-end m-2">INFO</button>
                </div>
              </div>
              <div class="col d-flex flex-column justify-content-between">
                <div class="my-city-container d-flex flex-column" >
                    <div class="bangkok-photo my-city-photo"></div>
                    <div class="p-2">
                        <p class="my-city-description-text m-0"><b>Bangkok</b> - the capital and most populous city of Thailand.</p>
                    </div>
                    <button class="my-city-info-button w-50 align-self-end m-2">INFO</button>
                </div>
                <div class="my-city-container d-flex flex-column" >
                    <div class="macau-photo my-city-photo"></div>
                    <div class="p-2">
                        <p class="my-city-description-text m-0"><b>Macau</b> - a city and special administrative region of China in the western Pearl River Delta.</p>
                    </div>
                    <button class="my-city-info-button w-50 align-self-end m-2">INFO</button>
                </div>
              </div>
              <div class="col d-flex flex-column justify-content-between">
                <div class="my-city-container d-flex flex-column" >
                    <div class="london-photo my-city-photo"></div>
                    <div class="p-2">
                        <p class="my-city-description-text m-0"><b>London</b> - the capital and largest city of England and the United Kingdom.</p>
                    </div>
                    <button class="my-city-info-button w-50 align-self-end m-2">INFO</button>
                </div>
                <div class="my-city-container d-flex flex-column" >
                    <div class="paris-photo my-city-photo"></div>
                    <div class="p-2">
                        <p class="my-city-description-text m-0"><b>London</b> - the capital and most populous city of France.</p>
                    </div>
                    <button class="my-city-info-button w-50 align-self-end m-2">INFO</button>
                </div>
              </div>
            </div>
    `
}