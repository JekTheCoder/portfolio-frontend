import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Input,
  ViewChild,
} from '@angular/core';
import { animations } from './project.animations';
import { BoxSizeService } from './services/box-size.service';

interface Image {
  src?: string;
  alt?: string;
}

type State =
  | {
      value: 'desktop';
      params: {
        height: number | string;
      };
    }
  | {
      value: 'mobile';
      params: {
        width: number | string;
        'text-width': number | string;
      };
    };

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  animations,
})
export class ProjectComponent implements AfterViewInit {
  @Input() image: Image = {};
  @Input() mImage: Image = {};

  @ViewChild('container') container!: ElementRef<HTMLElement>;
  @ViewChild('imgMobile') imageMobile!: ElementRef<HTMLImageElement>;
  @ViewChild('imgDesktop') imageDesktop!: ElementRef<HTMLImageElement>;
  @ViewChild('text') text!: ElementRef<HTMLElement>;

  state?: State;

  protected imageDesktopHeight!: number;
  protected imageMobileWidth!: number;
  protected textWidth!: number;

  protected textBox!: DOMRect;
  protected containerBox!: DOMRect;

  constructor(private boxSize: BoxSizeService) {}

  ngAfterViewInit(): void {
    this.textBox = this.text.nativeElement.getBoundingClientRect();
  }

  @HostListener('window:resize')
  onResize() {
    if (this.state?.value !== 'mobile')
      this.textBox = this.text.nativeElement.getBoundingClientRect();
    this.resizeImages();
    this.setState(this.state!.value);
  }

  onImagesLoad() {
    this.resizeImages();
    this.setState('mobile');
  }

  resizeImages() {
    this.containerBox = this.container.nativeElement.getBoundingClientRect();
    const textHeight =
      (this.textBox.height * this.containerBox.width) / this.textBox.width;
    this.containerBox.height = textHeight + 40;

    this.resizeDesktopImage(this.containerBox);

    this.containerBox.height += this.imageDesktopHeight;

    this.resizeMobileImage(this.containerBox);

    this.container.nativeElement.style.height = this.containerBox.height + 'px';
  }

  protected resizeDesktopImage(containerBox: DOMRect) {
    const imageDesktop = this.imageDesktop.nativeElement;

    const imageDesktopHeight = this.boxSize.calculateResizeDimension(
      containerBox.width,
      imageDesktop.naturalWidth,
      imageDesktop.naturalHeight
    );
    imageDesktop.style.width = containerBox.width + 'px';
    this.imageDesktopHeight = imageDesktopHeight;
  }

  protected resizeMobileImage(containerBox: DOMRect) {
    const imageMobileWidth = this.boxSize.calculateResizeDimension(
      containerBox.height,
      this.imageMobile.nativeElement.naturalHeight,
      this.imageMobile.nativeElement.naturalWidth
    );
    this.imageMobile.nativeElement.style.height = containerBox.height + 'px';
    this.imageMobileWidth = imageMobileWidth;
    this.textWidth = containerBox.width - imageMobileWidth - 20;
  }

  toggleState() {
    this.state =
      this.state?.value !== 'mobile'
        ? {
            value: 'mobile',
            params: { width: this.imageMobileWidth, 'text-width': this.textWidth },
          }
        : {
            value: 'desktop',
            params: { height: this.imageDesktopHeight },
          };
  }

  protected setState(state: 'desktop' | 'mobile') {
    this.state =
      state === 'mobile'
        ? {
            value: 'mobile',
            params: { width: this.imageMobileWidth, 'text-width': this.textWidth },
          }
        : {
            value: 'desktop',
            params: { height: this.imageDesktopHeight },
          };
  }
}
