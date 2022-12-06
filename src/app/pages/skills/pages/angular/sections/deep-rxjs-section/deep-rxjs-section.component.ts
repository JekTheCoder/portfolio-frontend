import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { map, scan, share, startWith, Subject } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-deep-rxjs-section',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './deep-rxjs-section.component.html',
  styleUrls: ['./deep-rxjs-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeepRxjsSectionComponent {
	counter$ = new Subject<number>();
	acumulator$ = this.counter$.pipe(scan((acc, v) => acc + v, 0), share(), startWith(0));
	double$ = this.acumulator$.pipe(map(v => v*2));
}
