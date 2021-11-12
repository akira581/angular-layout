import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Layout1Component } from './layout1/layout1.component';

const routes: Routes = [
  {
    path: 'layout1',
    component: Layout1Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
