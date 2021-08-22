class TrailerContainer extends HTMLElement {
    constructor() {
        super();
        this.id = new URL(window.location.href).searchParams.get("id");
    }

    set anime(anime) {
        this._anime = anime;
        this.render();
    }

    render() {
        this.innerHTML = `
        <iframe
            src="${
                this._anime.trailer_url
                    ? this._anime.trailer_url
                    : "https://www.youtube.com/watch?v=-pHhb4biR9k"
            }"
            frameborder="0"
            allow="autoplay"
        ></iframe>
        `;
    }
}

customElements.define("trailer-container", TrailerContainer);
