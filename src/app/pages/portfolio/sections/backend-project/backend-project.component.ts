import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { faArrowDown, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-backend-project',
  templateUrl: './backend-project.component.html',
  styleUrls: ['./backend-project.component.scss'],
  animations: [
    trigger('arrow', [
      state('up', style({ transform: 'rotate(180deg)' })),
      state('down', style({ transform: 'rotate(0deg)' })),
      transition('up <=> down', animate('300ms ease-in-out'))
    ]),
    trigger('text', [
      state('expanded', style({ height: '*' })),
      state('not-expanded', style({ height: 0 })),
      transition('expanded <=> not-expanded', animate('300ms ease-in-out'))
    ])
  ]
})
export class BackendProjectComponent implements OnInit {

  arrowIcon = faArrowDown;
  globeIcon = faGlobeAmericas;

  expanded = false; 

  constructor() { }

  ngOnInit(): void {
  }

}
