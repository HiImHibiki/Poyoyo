class AnimeItem extends HTMLElement {
    constructor() {
        super();
    }

    set anime(anime) {
        this._anime = anime;
        this.render();
    }

    render() {
        this.innerHTML = `
        <a href="./anime.html?id=${this._anime.mal_id}">
            <img class="anime-art" src="${this._anime.image_url}" alt="???">
        </a>
        <a href="./anime.html?id=${this._anime.mal_id}">
            <p class="anime-title">${this._anime.title}</p>
        </a>
        `;
    }
}

customElements.define("anime-item", AnimeItem);
