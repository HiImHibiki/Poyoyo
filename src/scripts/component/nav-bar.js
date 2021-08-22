import Logo from "../../assets/poyoyo.png";

class NavBar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.querySelector("#searchElement").value;
    }

    render() {
        this.innerHTML = `
        <a href="./index.html" class="logo-container">
            <img src="${Logo}" alt="logo">
            <h2 class="flex-center">Poyoyo</h2>
        </a>    
        <form class="search-container">
            <input placeholder="Search anime..." id="searchElement" type="search">
        </form>
        `;

        this.querySelector(".search-container").addEventListener(
            "submit",
            (e) => {
                e.preventDefault();
                let value = this.querySelector("#searchElement").value;
                window.location.href = `./search-result.html?search=${value}`;
                this._clickEvent;
            }
        );
    }
}

customElements.define("nav-bar", NavBar);
