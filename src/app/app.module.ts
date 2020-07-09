import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleScreenComponent } from './title-screen/title-screen.component';
import { DialogueScreenComponent } from './dialogue-screen/dialogue-screen.component';
import { HttpClientModule } from '@angular/common/http';
import { EndScreenComponent } from './end-screen/end-screen.component';
import { AudioComponent } from './audio/audio.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleScreenComponent,
    DialogueScreenComponent,
    EndScreenComponent,
    AudioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
