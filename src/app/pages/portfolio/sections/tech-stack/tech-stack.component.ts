import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DarkModeService } from 'src/app/modules/_app/services/dark-mode.service';

@Component({
  selector: 'app-tech-stack',
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TechStackComponent implements OnInit {

  dark$ = this.dark.getDarkMode$();

  constructor(private dark: DarkModeService) { }

  ngOnInit(): void {
  }

}
