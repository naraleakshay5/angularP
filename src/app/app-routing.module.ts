import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewdataComponent } from './user/viewdata/viewdata.component';
import { DetailsComponent } from './details/details.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    component: ViewdataComponent,
    path: 'catDetails/:id',
  },
  {
    path: 'details',
    component: DetailsComponent,
  },
  {
    path: 'user',
    component: UserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
