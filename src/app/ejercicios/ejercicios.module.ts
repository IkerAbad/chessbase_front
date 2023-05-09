import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ejerciciosRoutingModule } from './ejercicios-routing.module';

import { CreateComponent } from './create/create.component';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { MyindexComponent } from './myindex/myindex.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    CreateComponent,
    IndexComponent,
    ViewComponent,
    EditComponent,
    MyindexComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    ejerciciosRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  exports: [
    IndexComponent,
    ViewComponent,
    CreateComponent,
    EditComponent
  ]
})
export class ejerciciosModule { }
