import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { BoxSizeService } from '../../services/box-size.service';
import { animations } from "./project.animations";

interface Image {
  src?: string;
   alt?: string
}

type State = {
  value: 'desktop',
  params: {
    height: number | string
  }
} | {
  value: 'mobile',
  params: { width: number | string }
};

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  animations
})
export class ProjectComponent implements OnInit, AfterViewInit {

  @Input() image: Image = {};
  @Input() mImage: Image = {};

  @ViewChild('container') container!: ElementRef<HTMLElement>;
  @ViewChild('imgMobile') imageMobile!: ElementRef<HTMLImageElement>;
  @ViewChild('imgDesktop') imageDesktop!: ElementRef<HTMLImageElement>;

  state?: State;

  protected imageDesktopHeight!: number;
  protected imageMobileWidth!: number;
  constructor(private boxSize: BoxSizeService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  resizeImages() {
    const containerBox = this.container.nativeElement.getBoundingClientRect();
    const imageDesktop = this.imageDesktop.nativeElement;

    const imageDesktopHeight = this.boxSize.calculateResizeDimension(containerBox.width, imageDesktop.naturalWidth, imageDesktop.naturalHeight);
    imageDesktop.style.width = containerBox.width + 'px';
    imageDesktop.style.height = imageDesktopHeight + 'px';

    this.imageDesktopHeight = imageDesktopHeight;
    containerBox.height = containerBox.height + imageDesktopHeight;
    this.container.nativeElement.style.height = containerBox.height + 'px';

    const imageMobileWidth = this.boxSize.calculateResizeDimension(containerBox.height, this.imageMobile.nativeElement.naturalHeight, this.imageMobile.nativeElement.naturalWidth);
    this.imageMobileWidth = imageMobileWidth;
    this.imageMobile.nativeElement.style.width = imageMobileWidth + 'px';

    this.toggleState();
  }

  toggleState() {
    this.state = this.state?.value === 'mobile' ? {
      value: 'desktop',
      params: { height: this.imageDesktopHeight }
    } : { value: 'mobile', params: { width: this.imageMobileWidth } };
  }

}
