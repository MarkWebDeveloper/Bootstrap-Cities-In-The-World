let footer = document.querySelector("footer");

export function loadFooter() {
  footer.innerHTML = /* html */ `
    <div class="my-footer-container d-flex justify-content-center align-items-end">
            <div class="my-footer-subcontainer">
                <div class="my-footer-line"></div>
                <div class="my-footer-underline-container w-100 h-100 d-flex align-items-center">
                    <div class="my-company-logo"></div>
                    <p class="my-copyright-text my-0 mx-2">© 2021 Mountains Travel, Inc</p>
                    <div class="my-icons-container d-flex justify-content-between align-items-center">
                        <img class="my-social-logos" src="/images/logos/icons8-facebook-100.png" alt="facebook">
                        <img class="my-social-logos" src="/images/logos/icons8-instagram-120.png" alt="facebook">
                        <img class="my-social-logos" src="/images/logos/icons8-twitterx-100.png" alt="facebook">
                    </div>
                </div>
            </div>
        </div>
    `;
}
