import { Component, inject } from '@angular/core';
import { Post } from '../../interfaces/post.interface';
import { ServicioService } from '../../services/servicio.service';

@Component({
  selector: 'app-lista-posts',
  standalone: true,
  imports: [],
  templateUrl: './lista-posts.component.html',
  styleUrl: './lista-posts.component.css'
})
export class ListaPostsComponent {
  arrPosts: Post[] = [];

  postService = inject(ServicioService);


}
