class AnimePage extends HTMLElement {
    constructor() {
        super();
    }

    set anime(anime) {
        this._anime = anime;
        this.render();
    }

    render() {
        this.innerHTML = ``;
    }
}

customElements.define("anime-page", AnimePage);
