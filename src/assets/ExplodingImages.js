import SmoothScroll from "smoothscroll";
import explod from "./images/explod.gif";

export default class ExplodingImages {

    constructor() {

        this.selectors = {
            body: document.querySelector("body"),
            images: document.querySelectorAll("img"),
            button: document.querySelector("button"),
            splosions: document.querySelector(".splosions"),
        }

        this.exploded = false;
        this.explosionCount = 4;

        this.addListener();
    }

    addListener() {
        const { button } = this.selectors;
        button.addEventListener("click", (event) => this.explodeImages(event));
    }

    explodeImages(event) {
        const { body } = this.selectors;

        event.preventDefault();

        if (this.exploded) {
            return;
        } else {
            this.exploded = true;
            SmoothScroll(0, 1000);

            setTimeout(() => {
                body.classList.add("explod");
                this.addExplosions();
            }, 1000);
        }
    }

    addExplosions() {
        const { splosions } = this.selectors;

        for (let i = 0; i < this.explosionCount; i++) {
            let tempImage = new Image();
            tempImage.src = explod;
            tempImage.classList.add("splosion");
            splosions.appendChild(tempImage);
        };

        setTimeout(() => {
            splosions.innerHTML = "";
        }, 5500);
    }
}
