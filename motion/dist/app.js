import { ImageComponents } from "./components/item/image.js";
import { PageComponents } from "./components/page/page.js";
class App {
    constructor(appRoot) {
        this.page = new PageComponents();
        this.page.attachTo(appRoot);
        const image = new ImageComponents("image title", "https://picsum.photos/600/300");
        image.attachTo(appRoot, "beforeend");
    }
}
new App(document.querySelector(".document"));
