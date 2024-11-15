import { Component } from '@angular/core';
import { UserListComponent } from './components/user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserListComponent, HttpClientModule], // Asegúrate de incluir HttpClientModule aquí
  template: `<app-user-list></app-user-list>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}

