import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataViewComponent } from './data-view/data-view.component';
import { CryptoComponent } from './components/crypto/crypto.component'

const routes: Routes = [
  {path:'skill-list', component: DataViewComponent,
},
{
  path: 'crypto',
   component : CryptoComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
