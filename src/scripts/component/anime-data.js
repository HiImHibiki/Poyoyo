class AnimeData extends HTMLElement {
    constructor() {
        super();
        this.id = new URL(window.location.href).searchParams.get("id");
    }

    set anime(anime) {
        this._anime = anime;
        this.render();
    }

    render() {
        let genres = [];
        let studios = [];
        this._anime.genres.forEach((e) => {
            genres.push(e.name);
        });
        this._anime.studios.forEach((e) => {
            studios.push(e.name);
        });

        this.innerHTML = `
        <div class="top-anime-container">
            <div class="anime-img">
                <img src="${this._anime.image_url}" alt="">
            </div>
            <div class="anime-desc">
                <h2>${this._anime.title}</h2>
                <p>Premiered: ${
                    this._anime.premiered ? this._anime.premiered : "-"
                }</p>
                <p>Genre: ${genres.join(", ")}</p>
                <p>Studio: ${studios.join(", ")}</p>
            </div>
        </div>
        <div class="anime-synopsis">
            <h2>Synopsis</h2>
            <p>${this._anime.synopsis}</p>
        </div>
        `;
    }
}

customElements.define("anime-data", AnimeData);
