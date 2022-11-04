import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavMenuLeftComponent } from './component/nav-menu-left/nav-menu-left.component';
import { ContentRightNavComponent } from './component/content-right-header/content-right-header.component';
import { ContainerComponent } from './component/container/container.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuLeftComponent,
    ContentRightNavComponent,
    ContainerComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
