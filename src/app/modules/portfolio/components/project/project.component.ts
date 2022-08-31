import { Component, Input, OnInit } from '@angular/core';
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
export class ProjectComponent implements OnInit {

  @Input() image: Image = {};
  @Input() mImage: Image = {};

  state = 'mobile'

  constructor() { }

  ngOnInit(): void {
  }

}
