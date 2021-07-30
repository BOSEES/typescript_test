import { ImageComponents } from "./components/item/image.js";
import { PageComponents } from "./components/page/page.js";

class App {
  private readonly page: PageComponents;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponents();
    this.page.attachTo(appRoot);
    
    const image = new ImageComponents("image title", "https://picsum.photos/600/300");
    image.attachTo(appRoot, "beforeend");
  }
}

new App(document.querySelector(".document")! as HTMLElement);