import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children:[
      { path: 'lister', loadChildren: './lister/lister.module#ListerPageModule' },
      { path: 'transaction', loadChildren: './transaction/transaction.module#TransactionPageModule' },
      { path: 'home', loadChildren: './home/home.module#HomePageModule' },
      
 
   ]


  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
