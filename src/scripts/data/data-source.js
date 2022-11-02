const axios = require("axios");
const baseUrl = "https://api.jikan.moe/v4";

class DataSource {
    static getFeatured() {
        const promise = axios.get(`${baseUrl}/anime/41587`);
        const dataPromise = promise.then((response) => response.data);
        // .catch((error) => {
        //     // handle error
        //     console.log(error);
        // });
        return dataPromise;
    }

    static getUpcoming() {
        const promise = axios.get(`${baseUrl}/top/anime/1/upcoming`);
        const dataPromise = promise.then((response) => response.data);
        return dataPromise;
    }

    static getAiring() {
        const promise = axios.get(`${baseUrl}/top/anime/1/airing`);
        const dataPromise = promise.then((response) => response.data);
        return dataPromise;
    }

    static getTopTV() {
        const promise = axios.get(`${baseUrl}/top/anime/1/tv`);
        const dataPromise = promise.then((response) => response.data);
        return dataPromise;
    }

    static getTopMovie() {
        const promise = axios.get(`${baseUrl}/top/anime/1/movie`);
        const dataPromise = promise.then((response) => response.data);
        return dataPromise;
    }

    static getAnimeData(id) {
        const promise = axios.get(`${baseUrl}/anime/${id}`);
        const dataPromise = promise.then((response) => response.data);
        return dataPromise;
    }

    static getSearchData(name) {
        const promise = axios.get(`${baseUrl}/search/anime?q=${name}&page=1`);
        const dataPromise = promise.then((response) => response.data);
        return dataPromise;
    }
}

export default DataSource;
