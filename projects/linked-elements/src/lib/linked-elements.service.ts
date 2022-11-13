import { Inject, Injectable } from '@angular/core';
import { LinkedElementsModule } from './linked-elements.module';
import { BaseScrollStrategy } from './scroll-strategy/base-scroll-strategy';
import { PrimaryScrollStrategy, SecondaryScrollStrategy } from './scroll-strategy/tokens';

@Injectable({
  providedIn: LinkedElementsModule
})
export class LinkedElementsService {

  private elements = new Map<string, HTMLElement>();
  constructor(
    @Inject(PrimaryScrollStrategy)
    private scrollStrategy: BaseScrollStrategy,
    @Inject(SecondaryScrollStrategy)
    private secondaryScrollStrategy: BaseScrollStrategy
  ) {}

  set(key: string, element: HTMLElement) {
    this.elements.set(key, element);
  }

  get(key: string) {
    return this.elements.get(key);
  }

  scroll(key: string) {
    const element = this.elements.get(key);
    if (!element) return console.warn(`Element with name '${key}' not found`);

    this.scrollStrategy.scrollIntoView(element);
  }

  rawScroll(key: string) {
    const element = this.elements.get(key);
    if (!element) return console.warn(`Element with name '${key}' not found`);

    this.secondaryScrollStrategy.scrollIntoView(element);
  }
}
