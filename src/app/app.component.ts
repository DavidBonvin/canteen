import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import {TemplateComponent} from './shared/components/template/template.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, RouterOutlet, TemplateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(){}
  ngOnInit(): void {

  }
}
// import { Component, OnInit } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { MenuComponent } from "./shared/components/menu/menu.component";
//
// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet, MenuComponent],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.scss'
// })
// export class AppComponent implements OnInit {
//
//   constructor(){}
//   ngOnInit(): void {
//
//   }
// }
