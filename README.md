# Consumo de Apis de terceros

Este proyecto es una aplicación de Angular que consume una API de usuarios, mostrando los datos en una tabla con paginación. Utiliza componentes y servicios para separar la lógica de negocio de la lógica de presentación.

## Características

- Consumo de API pública para obtener datos de usuarios.
- Muestra los datos en una tabla con paginación.
- Diseño responsivo y personalizable para la tabla de usuarios.

## Estructura del Proyecto

La carpeta `components/user-list` contiene los archivos principales del componente `UserListComponent`:

- **`user-list.component.ts`**: Este archivo contiene la lógica del componente, incluyendo el uso del servicio para obtener los datos y la implementación de la paginación.
- **`user-list.component.html`**: Define la estructura HTML para la tabla de usuarios y los controles de paginación.
- **`user-list.component.css`**: Contiene los estilos personalizados para la tabla y la paginación, mejorando la presentación visual.

### Código Esencial

#### `user-list.component.ts`

Este archivo define el componente de la lista de usuarios y maneja la lógica de paginación.

```typescript
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
}```

hola mundoddd

