import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { OutputComponent } from './output/output.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

export interface PeriodicElement {
  id: number;
  name: string;
  model: string;
  price: number;
  newused: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Yugo', model: 'Toyota', price: 12000, newused: 'used'},
  {id: 2, name: 'Shunya', model: 'Honda', price: 10000, newused: 'used'},
  {id: 3, name: 'Tomo', model: 'Nissan', price: 15000, newused: 'new'},
  {id: 4, name: 'Jun', model: 'Toyota', price: 14500, newused: 'new'},
  {id: 5, name: 'Dong', model: 'Suzuki', price: 10000, newused: 'used'},
];




@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    OutputComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export class TableBasicExample {
  displayedColumns: string[] = ['id', 'name', 'model', 'price', 'newused'];
  dataSource = ELEMENT_DATA;
}