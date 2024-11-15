/*import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {

}

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  imports: [CommonModule, HttpClientModule],
  providers: [UserService] // Agrega el servicio aquí para el componente standalone
})
export class UserListComponent {
  users: any[] = [];
  private userService = inject(UserService);

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }
} */

  import { Component, inject, OnInit } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { HttpClientModule } from '@angular/common/http';
  import { UserService } from '../../services/user.service';
  
  @Component({
    selector: 'app-user-list',
    standalone: true,
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css'],
    imports: [CommonModule, HttpClientModule],
    providers: [UserService]
  })
  export class UserListComponent implements OnInit {
    users: any[] = [];
    paginatedUsers: any[] = [];
    currentPage: number = 1;
    itemsPerPage: number = 15;
  
    private userService = inject(UserService);
  
    ngOnInit(): void {
      this.userService.getUsers().subscribe(data => {
        this.users = data;
        this.updatePaginatedUsers();
      });
    }
  
    updatePaginatedUsers() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      this.paginatedUsers = this.users.slice(startIndex, endIndex);
    }
  
    goToPage(page: number) {
      this.currentPage = page;
      this.updatePaginatedUsers();
    }
  
    get totalPages(): number {
      return Math.ceil(this.users.length / this.itemsPerPage);
    }
  }
  

