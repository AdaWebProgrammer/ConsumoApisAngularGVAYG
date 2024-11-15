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

```
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
  }```
}```


------------


### user-list.component.css

Este archivo contiene los estilos personalizados para la tabla de usuarios y la paginación, mejorando la presentación visual y la experiencia del usuario.

- **Estilos de la Tabla**: Da formato a la tabla con un diseño responsivo, bordes, y colores alternados en las filas para mejorar la legibilidad.
  - Fondo y color de cabecera: **`background-color: #007bff`** y **`color: #ffffff`** en `<thead>`.
  - Colores alternados en las filas de la tabla: **`nth-of-type(even)`** y **`nth-of-type(odd)`**.

- **Estilos de Paginación**: Define el diseño de los botones de paginación con colores, bordes redondeados, y efectos de hover.
  - Color de botón activo y de hover: **`background-color: #0056b3`** en `.pagination button.active` y `:hover`.


------------


### user-list.component.html

Este archivo define la estructura HTML de la tabla de usuarios y los controles de paginación en la interfaz de usuario.

- **Tabla de Usuarios**: Utiliza `*ngFor` para iterar sobre la lista de usuarios paginada (`paginatedUsers`) y renderizar una fila (`<tr>`) para cada usuario, mostrando su **`ID`**, **`Name`**, **`Email`** y **`Role`**.
- **Paginación**: Muestra un conjunto de botones para navegar entre páginas, permitiendo al usuario seleccionar diferentes páginas de la lista de usuarios.

Este archivo trabaja junto con **`user-list.component.ts`**, que maneja la lógica de paginación y obtiene los datos del servicio.


```/* Color de cabecera */
.styled-table thead tr {
  background-color: #007bff;
  color: #ffffff;
}

/* Colores alternados en las filas */
.styled-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

.styled-table tbody tr:nth-of-type(odd) {
  background-color: #ffffff;
}

/* Estilos de paginación */
.pagination button.active {
  background-color: #0056b3;
  font-weight: bold;
}

.pagination button:hover {
  background-color: #0056b3;
}```




------------




### Respuestas a las Preguntas del PDF

1. **¿Qué hace el método `getUsers` en el servicio?**

   El método `getUsers` realiza una solicitud HTTP GET a la API pública para obtener una lista de usuarios. Devuelve un observable que se suscribe en el componente para recibir y mostrar los datos.

2. **¿Por qué es necesario importar `HttpClientModule`?**

   `HttpClientModule` permite que Angular maneje solicitudes HTTP, necesarias para consumir APIs y obtener datos externos. Sin él, las solicitudes HTTP no se podrían realizar.

3. **¿Qué función cumple el método `ngOnInit` en el componente `UserListComponent`?**

   `ngOnInit` se ejecuta al inicializar el componente y llama al servicio para obtener los datos de los usuarios. De esta forma, los datos se cargan y muestran cuando el componente está listo.

4. **¿Para qué sirve el bucle `*ngFor` en Angular? Explique cómo se utiliza en este ejemplo.**

   El bucle `*ngFor` permite iterar sobre una lista de elementos y renderizar una plantilla para cada elemento. En este caso, recorre `paginatedUsers` para crear una fila de tabla (`<tr>`) para cada usuario. 

### Preguntas de Reflexión

1. **¿Qué ventajas tiene el uso de servicios en Angular para el consumo de APIs?**

   Los servicios en Angular centralizan la lógica de negocio, facilitando el consumo de APIs y el mantenimiento del código. Esto permite reutilizar el servicio en varios componentes y mejorar la separación de responsabilidades.

2. **¿Por qué es importante separar la lógica de negocio de la lógica de presentación?**

   La separación facilita el mantenimiento y prueba del código. La lógica de negocio se encapsula en servicios reutilizables y desacoplados de la interfaz, lo que permite que los componentes se centren en la presentación.

3. **¿Qué otros tipos de datos o APIs podrían integrarse en un proyecto como este?**

   Se podrían integrar APIs para obtener datos de productos, órdenes, informes de clima, noticias, entre otros, dependiendo de la finalidad del proyecto.

------------



#####Guzmán Vite Adamaris Yareth Guadalupe

###End
