class Featured extends HTMLElement {
    constructor() {
        super();
    }

    set featured(featured) {
        this._featured = featured;
        this.render();
    }

    render() {
        // console.log(data);
        this.innerHTML = ` 
            <h1>${this._featured.title}</h1>
            <p>${this._featured.synopsis.substring(0, 300)} . . . . .</p>    
        `;

        this.addEventListener("click", () => {
            window.location.href = `./anime.html?id=${this._featured.mal_id}`;
        });
    }
}

customElements.define("featured-content", Featured);
