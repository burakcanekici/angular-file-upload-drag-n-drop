import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FileDragNDropDirective } from './file-drag-n-drop.directive';

import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatIconModule, MatInputModule, MatListModule, MatButtonModule, MatGridListModule, MatSnackBarModule, BrowserAnimationsModule ],
  declarations: [ AppComponent, HelloComponent, FileDragNDropDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
