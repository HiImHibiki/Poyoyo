import "./anime-item.js";
import DataSource from "../data/data-source.js";

class AnimeList extends HTMLElement {
    constructor() {
        super();
        this.top_option = "Top Upcoming Anime";
    }

    set anime(anime) {
        this._anime = anime;
        this.render();
    }

    render() {
        // console.log(this._anime.top);
        this.innerHTML = `
        <div class="sort-bar">
            <button class="dropbtn">
                <p class="flex-center">Select Top Anime</p>
                <i class="fas fa-caret-down flex-center"></i>
            </button>
            <div class="dropdown-content">
                <i class="flex-center">Top Upcoming</i>
                <i class="flex-center">Top Airing</i>
                <i class="flex-center">Top TVs</i>
                <i class="flex-center">Top Movies</i>
            </div>
        </div>
        <h1>${this.top_option}</h1>
        <div class="item-container">

        </div>
        `;

        const itemContainer = document.querySelector(".item-container");
        this._anime.top.forEach((anime) => {
            const animeItemElement = document.createElement("anime-item");
            animeItemElement.anime = anime;
            itemContainer.appendChild(animeItemElement);
        });

        const dropbtn = document.querySelector(".dropbtn");
        const dropdownContent = document.querySelector(".dropdown-content");
        dropbtn.addEventListener("focus", () => {
            dropdownContent.classList.add("dropdown-active");
            dropbtn.classList.add("dropbtn-border-active");
            dropdownContent.style.pointerEvents = "all";
        });
        dropbtn.addEventListener("focusout", () => {
            dropdownContent.classList.remove("dropdown-active");
            dropbtn.classList.remove("dropbtn-border-active");
            // dropdownContent.style.pointerEvents = "none";
        });

        const animeListElement = document.querySelector("anime-list");
        const dropdownItem = animeListElement.querySelectorAll(
            ".dropdown-content i"
        );

        dropdownItem[0].addEventListener("click", () => {
            DataSource.getUpcoming().then((res) => {
                animeListElement.anime = res;
            });
            this.top_option = "Top Upcoming Anime";
            this.render();
        });
        dropdownItem[1].addEventListener("click", () => {
            DataSource.getAiring().then((res) => {
                animeListElement.anime = res;
            });
            this.top_option = "Top Airing Anime";
            this.render();
        });
        dropdownItem[2].addEventListener("click", () => {
            DataSource.getTopTV().then((res) => {
                animeListElement.anime = res;
            });
            this.top_option = "Top TVs Anime";
            this.render();
        });
        dropdownItem[3].addEventListener("click", () => {
            DataSource.getTopMovie().then((res) => {
                animeListElement.anime = res;
            });
            this.top_option = "Top Anime Movie";
            this.render();
        });
    }
}

customElements.define("anime-list", AnimeList);
