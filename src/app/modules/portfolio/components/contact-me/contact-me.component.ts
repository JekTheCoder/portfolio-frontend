import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {

  githubIcon = faGithub;
  mailIcon = faEnvelope;
  linkedInIcon = faLinkedin;

  protected contactMeForm = new FormGroup({
    name: new FormControl<string>(''),
    email: new FormControl<string>('', { validators: [Validators.required, Validators.email] }),
    message: new FormControl('', Validators.required)
  });

  constructor() { }

  ngOnInit(): void {
  }

}
