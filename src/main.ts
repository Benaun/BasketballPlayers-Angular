import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { PlayersListComponent } from './players-list/players-list.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, PlayersListComponent],
  template: `
  <app-players-list></app-players-list>
  `,
})
export class App {}

bootstrapApplication(App);
