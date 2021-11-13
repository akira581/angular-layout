import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Layout1Component } from './layout1/layout1.component';
import { Layout2Component } from './layout2/layout2.component';
import { TopComponent } from './top/top.component';

const routes: Routes = [
  {
    path: '',
    component: TopComponent,
  },
  {
    path: 'layout1',
    component: Layout1Component,
  },
  {
    path: 'layout2',
    component: Layout2Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
