import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-deep-rxjs-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './deep-rxjs-section.component.html',
  styleUrls: ['./deep-rxjs-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeepRxjsSectionComponent {

}
