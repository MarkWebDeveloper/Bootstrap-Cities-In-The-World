import '../scss/styles.scss'
import '../scss/general-rules.scss'
import '../scss/header.scss'
import * as bootstrap from 'bootstrap'
import { loadHeader } from './header'

function app() {
    loadHeader()
}

app()