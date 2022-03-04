import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { ClearingTypeComponent } from './clearing-type/clearing-type.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClearingTypeService } from './shared/clearing-type.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatSaveDialogComponent } from './mat-save-dialog/mat-save-dialog.component';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ClearingTypeComponent,
    HeaderComponent,
    FooterComponent,
    MatSaveDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ClearingTypeService],
  bootstrap: [AppComponent],
  entryComponents: [MatSaveDialogComponent]
})
export class AppModule { }
