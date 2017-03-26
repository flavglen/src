import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { NotfoundCompComponent } from './notfound-comp/notfound-comp.component';
import {CalendarModule} from 'primeng/primeng';
import { CalendarComponentComponent } from './calendar-component/calendar-component.component';


const appRoutes: Routes = [
  { path: '', component: MyNewComponentComponent },
  { path: 'crisis-center', component: MyNewComponentComponent },
  { path: '**', component: NotfoundCompComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent,
    NotfoundCompComponent,
    CalendarComponentComponent

  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    CalendarModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
