// <iframe width="1280" height="720" src="https://www.youtube.com/embed/z0l1Z6MrWuA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
// <iframe width="1280" height="720" src="https://www.youtube.com/embed/TrkNoSk29pc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
import { BaseComponent } from "../component.js";

export class VideoComponent extends BaseComponent<HTMLElement>{
  constructor(title: string, url: string) {
    super(`<section class="video">
            <div class="video__player">
              <iframe src="" frameborder="0" class="video__iframe"></iframe>
              <h3 class="video__title"></h3>
            </div>
          </section>`)

          const iframe = this.element.querySelector(".video__iframe")! as HTMLFrameElement;
          iframe.src = this.convertToEmbeddedURL(url);

          const titleElement = this.element.querySelector(".video__title")! as HTMLHeadingElement;
          titleElement.textContent = title;
  }

  private convertToEmbeddedURL(url: string): string {
    const splited = url.split("=");
    const id = splited[splited.length - 1]!;
    return `https://www.youtube.com/embed/${id}`;
  }
}