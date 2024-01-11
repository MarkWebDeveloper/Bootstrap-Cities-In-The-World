import * as bootstrap from 'bootstrap'
import '../scss/styles.scss'
import '../scss/general-rules.scss'
import '../scss/header.scss'
import '../scss/banner.scss'
import { loadHeader } from './header'

function app() {
    loadHeader()
}

app()