// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
// import * as bootstrap from 'bootstrap'

//假如我只需要 Carousel和Tooltip/
import { Carousel, Tooltip } from 'bootstrap';

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
tooltipTriggerList.forEach(tooltipTriggerEl => {
    new Tooltip(tooltipTriggerEl)
})
