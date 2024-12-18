import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: 'products', component: ProductComponent },
    { path: '', component: HomeComponent },
    { path: '**', component: HomeComponent }
];
