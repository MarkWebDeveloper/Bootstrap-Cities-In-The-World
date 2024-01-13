import * as bootstrap from 'bootstrap'
import '../scss/styles.scss'
import '../scss/general-rules.scss'
import '../scss/header.scss'
import '../scss/banner.scss'
import '../scss/grid.scss'
import { loadHeader } from './header'
import { loadCities } from './cities-section'

function app() {
    loadHeader()
    loadCities()
}

app()