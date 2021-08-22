import "./anime-item.js";

class SearchResult extends HTMLElement {
    constructor() {
        super();
        this.searchRes = new URL(window.location.href).searchParams.get(
            "search"
        );
    }

    set anime(anime) {
        this._anime = anime;
        this.render();
    }

    render() {
        // console.log(this._anime.top);
        this.innerHTML = `
        <div class="item-container">

        </div>
        `;
        // console.log(this.searchRes);

        const itemContainer = document.querySelector(".item-container");
        this._anime.results.forEach((anime) => {
            const animeItemElement = document.createElement("anime-item");
            animeItemElement.anime = anime;
            itemContainer.appendChild(animeItemElement);
        });
    }
}

customElements.define("search-result", SearchResult);
