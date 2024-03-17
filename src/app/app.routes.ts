import { Routes } from '@angular/router';

export const routes: Routes = [

    { path: '', pathMatch: 'full', redirectTo: '/posts' },
    {
        path: 'paginas',
        loadChildren: () => import('./Pages/pages.routes').
            then(m => m.pagesRoutes)

    },
    { path: '**', redirectTo: '/posts' }
];
