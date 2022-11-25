import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-libraries-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './libraries-section.component.html',
  styleUrls: ['./libraries-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LibrariesSectionComponent {

}
