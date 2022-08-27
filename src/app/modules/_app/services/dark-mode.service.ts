import { Inject, Injectable, RendererFactory2 } from '@angular/core';
import { BODY } from '../providers/body.provider';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {

  private renderer = this.rendererFactory.createRenderer(null, null);
  constructor(
    private rendererFactory: RendererFactory2,
    @Inject(BODY) private body: Body
  ) { }

  setDarkMode(dark: boolean) {
    dark ?
    this.renderer.addClass(this.body, 'dark') :
    this.renderer.removeClass(this.body, 'dark');
  }
}
