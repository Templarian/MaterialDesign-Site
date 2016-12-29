import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { IconComponent } from './shared/icon/icon.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BannerComponent } from './shared/banner/banner.component';

import { HomeComponent } from './home/home.component';
import { ViewerComponent } from './viewer/viewer.component';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';

const appRoutes: Routes = [
  //{ path: 'crisis-center', component: CrisisListComponent },
  //{ path: 'hero/:id',      component: HeroDetailComponent },
  {
    path: 'getting-started/web',
    component: ViewerComponent,
    data: {
      title: 'Getting Started - Web',
      file: 'content/getting-started-web'
    }
  },
  { path: '',
    component: HomeComponent
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewerComponent,
    PageNotFoundComponent,
    IconComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
