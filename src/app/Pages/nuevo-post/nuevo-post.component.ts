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
    id: new FormControl(null, Validators.required),
    titulo: new FormControl(null, Validators.required),
    texto: new FormControl(null, Validators.required),
    autor: new FormControl(null, Validators.required),
    imagen: new FormControl(null, Validators.required),
    fecha: new FormControl(null, Validators.required),
    categoria: new FormControl(null, Validators.required)
  });

  postService = inject(postService);
  router = inject(Router);


  async onSubmit() {
    this.arrErrores = [];
    try {
      const response = await this.postService.create(this.formulario.value);
      Swal.fire({
        title: `Post publicado`,
        text: `Se ha publicado un artículo`,
        icon: 'success'
      });
      //Navegación hacia la lista de Posts
      this.router.navigateByUrl('/posts');

    } catch ({ error }: any) {
      this.arrErrores = error;
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