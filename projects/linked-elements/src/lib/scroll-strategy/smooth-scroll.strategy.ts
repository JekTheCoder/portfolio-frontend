import { Injectable } from "@angular/core";
import { LinkedElementsModule } from "../linked-elements.module";
import { BaseScrollStrategy } from "./base-scroll-strategy";

@Injectable({
    providedIn: LinkedElementsModule
})
export class SmoothScrollStrategy implements BaseScrollStrategy {
    scrollIntoView(element: HTMLElement): void {
        element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
}