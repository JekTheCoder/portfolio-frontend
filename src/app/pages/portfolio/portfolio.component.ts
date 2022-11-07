import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements AfterViewInit, OnDestroy {
  protected sections: { [key in string]: HTMLElement } = {};
  protected sectionsKeys?: string[];

  @ViewChild('aboutMe') aboutMe!: ElementRef;
  @ViewChild('projects') projects!: ElementRef;
  @ViewChild('contactMe') contactMe!: ElementRef;

  protected unsuscriber$ = new Subject<void>();

  constructor(private route: ActivatedRoute, private changeDec: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.sections = {
      'about-me': this.aboutMe.nativeElement,
      projects: this.projects.nativeElement,
      'contact-me': this.contactMe.nativeElement,
    };

    this.sectionsKeys = Object.keys(this.sections);

    this.route.fragment
      .pipe(takeUntil(this.unsuscriber$))
      .subscribe((fragment) => {
        if (!fragment) return;
        const element: HTMLElement | undefined = this.sections[fragment];
        if (element) element.scrollIntoView();
      });

    this.changeDec.detectChanges();
  }

  ngOnDestroy(): void {
    this.unsuscriber$.next();
    this.unsuscriber$.complete();
  }
}
