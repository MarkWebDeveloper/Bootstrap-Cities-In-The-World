import * as bootstrap from 'bootstrap'
import '../scss/styles.scss'
import '../scss/general-rules.scss'
import '../scss/header.scss'
import '../scss/banner.scss'
import '../scss/grid.scss'
import '../scss/restaurants.scss'
import '../scss/footer.scss'
import { loadHeader } from './header'
import { loadCities } from './cities-section'
import { loadRestaurants } from './restaurants'
import { loadFooter } from './footer'

function app() {
    loadHeader()
    loadCities()
    loadRestaurants()
    loadFooter()
}

app()