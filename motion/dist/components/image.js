export class ImageComponents {
    constructor() {
        this.divElement = document.createElement("div");
        this.textElement = document.createElement("div");
        this.element = document.createElement("img");
        this.element.src = "https://picsum.photos/200/300";
        this.element.setAttribute("class", "image");
        this.textElement.textContent = "My image";
        this.divElement.appendChild(this.element);
        this.divElement.appendChild(this.textElement);
    }
    attachTo(parent, position = "afterbegin") {
        parent.insertAdjacentElement(position, this.divElement);
    }
}
