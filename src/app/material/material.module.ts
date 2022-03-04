import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';


const MaterialComponents = [
  MatButtonModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatToolbarModule,
  MatGridListModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatCheckboxModule,
  MatCardModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatDialogModule
]



@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
