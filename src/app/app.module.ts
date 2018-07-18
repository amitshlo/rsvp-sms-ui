import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { GridContainerComponent } from './components/grid-container/grid-container.component';
import { BackendService } from './services/backend/backend.service';

@NgModule({
  declarations: [
    AppComponent,
    GridContainerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    FontAwesomeModule,
    ChartsModule
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
