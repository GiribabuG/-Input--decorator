import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentComponent } from './parentComponent/parent.component';
import { ChildComponent} from './childComponent/child.component'
// import { Routes, RouterModule} from '@angular/router'

// const appRoutes : Routes = [
//   {path:"parent", component:ParentComponent},
//   {path:"child", component:ChildComponent}
// ] 

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    // RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [ParentComponent]
})
export class AppModule { }
