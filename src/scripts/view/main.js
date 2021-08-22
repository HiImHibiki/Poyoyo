import "../component/nav-bar.js";
import "../component/featured.js";
import "../component/anime-list.js";
import "../component/anime-data.js";
import "../component/trailer-container.js";
import "../component/search-result.js";
import DataSource from "../data/data-source.js";

const main = () => {
    // console.log(window.location.pathname);

    if (
        window.location.pathname === "/index.html" ||
        window.location.pathname === "/"
    ) {
        const featuredElement = document.querySelector("featured-content");
        const animeListElement = document.querySelector("anime-list");

        DataSource.getFeatured().then((res) => {
            featuredElement.featured = res;
            // console.log(res.title);
        });

        DataSource.getUpcoming().then((res) => {
            animeListElement.anime = res;
            // console.log(animeListElement);
        });
    }

    if (window.location.pathname === "/anime.html") {
        const animeData = document.querySelector("anime-data");
        const trailerContainer = document.querySelector("trailer-container");
        // console.log(animeData.id);
        DataSource.getAnimeData(animeData.id).then((res) => {
            animeData.anime = res;
        });
        DataSource.getAnimeData(trailerContainer.id).then((res) => {
            trailerContainer.anime = res;
        });
    }

    if (window.location.pathname === "/search-result.html") {
        const searchResult = document.querySelector("search-result");
        // console.log(searchResult.searchRes);
        DataSource.getSearchData(searchResult.searchRes).then((res) => {
            searchResult.anime = res;
        });
    }
};

export default main;
