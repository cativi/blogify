import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';
import { POSTS } from '../data/posts.db';

@Injectable({
  providedIn: 'root'
})
export class postService {

  posts: Post[] = [];

  /**
    * Obtiene todos los Posts disponibles
    * @returns {Post[]} Un array con todas los Posts
   */
  getAll(): Post[] {
    return POSTS;
  }

  /**
    * Crea un nuevo Post en el Array
    * @create Crea un post con todos los componentes del interfaz
   */
  create(post: Post) {
    POSTS.push(post);
  }


  getByCategoria(): string[] {
    const arr: string[] = [];
    for (let post of POSTS) {
      if (!arr.includes(post.categoria)) {
        arr.push(post.categoria);
      }
    }
    return arr;
  }

  getCatPost(cat: string): Post[] {
    return POSTS.filter(post => post.categoria === cat);
  }


}
