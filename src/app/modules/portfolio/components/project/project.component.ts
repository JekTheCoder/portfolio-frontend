import { Component, Input, OnInit } from '@angular/core';
import { animations } from "./project.animations";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  animations
})
export class ProjectComponent implements OnInit {

  @Input() image: { src?: string, alt?: string } = {};

  state = 'mobile'

  constructor() { }

  ngOnInit(): void {
  }

}
