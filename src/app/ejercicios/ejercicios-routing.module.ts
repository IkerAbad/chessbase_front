import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateComponent } from './create/create.component';
import { IndexComponent } from './index/index.component';
import { MyindexComponent } from './myindex/myindex.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = []

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class ejerciciosRoutingModule { }
