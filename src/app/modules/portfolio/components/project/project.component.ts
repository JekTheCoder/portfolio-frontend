import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { animations } from "./project.animations";

interface Image {
  src?: string;
   alt?: string
}

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

  state = 'mobile'

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.resizeImages();
  }

  resizeImages() {
    const containerBox = this.container.nativeElement.getBoundingClientRect();
    this.imageMobile.nativeElement.style.height = containerBox.height + 'px';
    this.imageDesktop.nativeElement.style.width = containerBox.width + 'px';
  }

}
