import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionPageComponent } from './transaction-page/transaction-page.component';

const routes: Routes = [
  {path:'', redirectTo: "transaction-page", pathMatch:'full'},
  {path: 'transaction-page',component: TransactionPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule { }
