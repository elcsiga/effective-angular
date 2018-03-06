import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NumberService} from "./services/number.service";

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { BoardComponent } from './components/board/board.component';
import { FpsMeterComponent } from './components/fps-meter/fps-meter.component';
import { IsPrimPipe } from './pipes/is-prim.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    BoardComponent,
    FpsMeterComponent,
    IsPrimPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [NumberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
