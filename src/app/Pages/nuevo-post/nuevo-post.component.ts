import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { postService } from '../../services/post.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-nuevo-post',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './nuevo-post.component.html',
  styleUrl: './nuevo-post.component.css'
})
export class NuevoPostComponent {

  arrErrores: { field: string, message: string }[] = [];

  formulario: FormGroup = new FormGroup({
    titulo: new FormControl(null, [
      Validators.required,
      Validators.minLength(3)
    ]),
    texto: new FormControl(null, [
      Validators.required,
      Validators.minLength(300)
    ]),
    autor: new FormControl(null, Validators.required),
    imagen: new FormControl(null, Validators.required),
    fecha: new FormControl(null, Validators.required),
    categoria: new FormControl(null, Validators.required)
  });

  postService = inject(postService);
  router = inject(Router);


  onSubmit() {
    this.arrErrores = [];

    if (this.formulario.valid) {

      this.postService.create(this.formulario.value);
      Swal.fire({
        title: `Post publicado`,
        text: `Se ha publicado tu artículo:  ${this.formulario.value.titulo}`,
        icon: 'success'
      });

      //Navegación hacia la lista de Posts
      this.router.navigateByUrl('/posts');
    }

  }
  fieldHasError(field: string) {
    return this.arrErrores.find(err => err.field === field);
  }

  checkError(controlName: string, errorName: string) {
    return this.formulario.get(controlName)!.hasError(errorName) &&
      this.formulario.get(controlName)!.touched;
  }
}