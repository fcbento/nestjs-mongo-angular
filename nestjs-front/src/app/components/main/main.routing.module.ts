import { NgModule } from '@angular/core';
import { Routes, RouterModule, } from '@angular/router';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: 'home', component: MenuComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
],
exports: [RouterModule]
})export class MainRoutingModule { }