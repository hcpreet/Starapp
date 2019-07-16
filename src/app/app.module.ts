import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppServices } from './services/app.service'
import { StarComponent } from './dialog/star/star.component'
import { DialogsService } from './dialog/dialog.service'

@NgModule({
  declarations: [
    AppComponent,
    StarComponent
  ],
  imports: [
    BrowserModule,
    DialogsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  entryComponents : [
    StarComponent
  ],
  providers: [DialogsService , AppServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
