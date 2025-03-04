import { Component } from '@angular/core';
import {NavbarComponent} from '../navbar/navbar.component';
import {RouterOutlet} from '@angular/router';


@Component({
  selector: 'app-template',
  standalone: true,
  imports: [
    NavbarComponent,
    RouterOutlet
  ],
  templateUrl: './template.component.html',
  styleUrl: './template.component.scss'
})
export class TemplateComponent {

}
