import { Injectable } from '@angular/core';

@Injectable()
export class SmoothAnchorService {

  private targetMap = new Map<string, HTMLElement>();

  constructor() {}

  set(name: string, element: HTMLElement) {
    this.targetMap.set(name, element);
  }

  get(name: string): HTMLElement | undefined {
    return this.targetMap.get(name);
  }
}
