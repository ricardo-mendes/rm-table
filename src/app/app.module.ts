import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { InputSearchComponent } from './input-search/input-search.component';
import { TableHeaderComponent } from './table-header/table-header.component';
import { TableRowComponent } from './table-row/table-row.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    InputSearchComponent,
    TableHeaderComponent,
    TableRowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
