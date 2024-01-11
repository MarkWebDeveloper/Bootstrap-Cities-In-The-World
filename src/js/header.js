let header = document.querySelector('header')

export function loadHeader() {
    header.innerHTML = /* html */ `
    <nav class="navbar navbar-expand-lg navbar-light px-3 my-navbar">
        <a class="navbar-brand my-header-text fs-1" href="#">Cities in the world</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item active">
                    <a class="nav-link my-header-text" href="#">Home</a>
                </li>
                <p class="my-auto">-</p>
                <li class="nav-item">
                    <a class="nav-link my-header-text" href="#">About</a>
                </li>
                <p class="my-auto">-</p>
                <li class="nav-item">
                    <a class="nav-link my-header-text" href="#">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
    `
}