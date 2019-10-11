
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ElementsComponent } from './components/elements/elements.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { TablesComponent } from './components/tables/tables.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { FoldersComponent } from './components/folders/folders.component';
import { MatTreeModule } from '@angular/material/tree';
import { DragdropComponent } from './components/dragdrop/dragdrop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HomeComponent } from './components/home/home.component';
import { TablesFilterComponent } from './components/tables-filter/tables-filter.component';
import { TablesSimpleComponent } from './components/tables-simple/tables-simple.component';
import { TablesCheckComponent } from './components/tables-check/tables-check.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { SliderComponent } from './components/slider/slider.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ExpansionComponent } from './components/expansion/expansion.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { StepperComponent } from './components/stepper/stepper.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatChipsModule} from '@angular/material/chips';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';






const appRoutes: Routes = [
  {path: '', redirectTo:  'home', pathMatch: 'full'},
  { path: 'elements', component: ElementsComponent },
  { path: 'home', component: HomeComponent},
  { path: 'tables', component: TablesComponent},
  { path: 'folders', component: FoldersComponent},
  { path: 'cards', component: DashboardComponent},
  { path: 'drop', component: DragdropComponent}

  
];

@NgModule({
  declarations: [
    AppComponent,
    ElementsComponent,
    ToolbarComponent,
    TablesComponent,
    DashboardComponent,
    FoldersComponent,
    DragdropComponent,
    HomeComponent,
    TablesFilterComponent,
    TablesSimpleComponent,
    TablesCheckComponent,
    SliderComponent,
    ExpansionComponent,
    StepperComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatMenuModule,
    MatTreeModule,
    DragDropModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatButtonToggleModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatExpansionModule,
    MatStepperModule,
    MatChipsModule,
    MatBadgeModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    
  
    

    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
