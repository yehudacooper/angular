import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { CalcResultComponent } from './comps/calc-result/calc-result.component';
import { ShowResultComponent } from './comps/show-result/show-result.component';

@NgModule({
  declarations: [
    AppComponent,
    CalcResultComponent,
    ShowResultComponent
  ],
  imports: [
    BrowserModule,FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
