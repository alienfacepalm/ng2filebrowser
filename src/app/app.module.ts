import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FileBrowserComponent } from './FileBrowser/filebrowser.component';
import { StubService } from './FileBrowser/stub.service';
import { FileSizePipe } from './filesize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FileBrowserComponent, 
    FileSizePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [StubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
