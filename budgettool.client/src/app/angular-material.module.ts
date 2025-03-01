import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTableModule } from '@angular/material/table';
import { MatPaginator } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule } from "@angular/forms";
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from "@angular/material/core";
import { MatSelectModule } from "@angular/material/select";

@NgModule({

  // Lists modules that are being imported by this module
  imports: [
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginator,
    MatSortModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    MatOptionModule,
    MatSelectModule
  ],

  // Lists modules that will be exported with this module, so they don't have to
  // be imported again by consuming modules.
  exports: [
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginator,
    MatSortModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    MatOptionModule,
    MatSelectModule
  ]
})

export class AngularMaterialModule { }
