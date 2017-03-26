import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

import { AppComponent } from './app.component';
import { FileBrowserComponent } from './FileBrowser/filebrowser.component';
import { StubService } from './FileBrowser/stub.service';
import { FileSizePipe } from './lib/filesize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FileBrowserComponent, 
    FileSizePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Angular2FontawesomeModule
  ],
  providers: [StubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
