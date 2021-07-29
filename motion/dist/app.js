import { ImageComponents } from "./components/image.js";
import { PageComponents } from "./components/page.js";
class App {
    constructor(appRoot) {
        this.page = new PageComponents();
        this.page.attachTo(appRoot);
        this.image = new ImageComponents();
        this.image.attachTo(appRoot);
    }
}
new App(document.querySelector(".document"));
