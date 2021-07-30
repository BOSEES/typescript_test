import { Component } from "./components/component.js";
import { ImageComponents } from "./components/item/image.js";
import { NoteComponent } from "./components/item/note.js";
import { TodoComponent } from "./components/item/todo.js";
import { VideoComponent } from "./components/item/video.js";
import { Composable, PageComponents } from "./components/page/page.js";

class App {
  private readonly page: Component & Composable;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponents();
    this.page.attachTo(appRoot);
    
    const image = new ImageComponents("image title", "https://picsum.photos/600/300");
    this.page.addChild(image);

    const video = new VideoComponent("Video title", "https://www.youtube.com/watch?v=TrkNoSk29pc");
    this.page.addChild(video)

    const note = new NoteComponent("Noto title", "Noto body");
    this.page.addChild(note);

    const todo = new TodoComponent("Todo title", "todo item");
    this.page.addChild(todo);

  }
}

new App(document.querySelector(".document")! as HTMLElement);