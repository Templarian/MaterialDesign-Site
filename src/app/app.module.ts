import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

import { AppComponent } from './app.component';
import { IconComponent } from './shared/icon/icon.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BannerComponent } from './shared/banner/banner.component';

import { HomeComponent } from './home/home.component';
import { IconsComponent } from './icons/icons.component';
import { ViewerComponent } from './viewer/viewer.component';
import { ResourcesComponent } from './resources/resources.component';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';

const appRoutes: Routes = [
  //{ path: 'icon/:iconName',      component: HeroDetailComponent },
  {
    path: 'getting-started',
    component: ViewerComponent,
    data: {
      file: 'content/getting-started.md'
    }
  },
  {
    path: 'getting-started/android',
    component: ViewerComponent,
    data: {
      file: 'content/getting-started-android.md'
    }
  },
  {
    path: 'getting-started/angular',
    component: ViewerComponent,
    data: {
      file: 'content/getting-started-angular.md'
    }
  },
  {
    path: 'getting-started/angularjs',
    component: ViewerComponent,
    data: {
      file: 'content/getting-started-angularjs.md'
    }
  },
  {
    path: 'getting-started/bootstrap',
    component: ViewerComponent,
    data: {
      file: 'content/getting-started-bootstrap.md'
    }
  },
  {
    path: 'getting-started/polymer',
    component: ViewerComponent,
    data: {
      file: 'content/getting-started-polymer.md'
    }
  },
  {
    path: 'getting-started/react',
    component: ViewerComponent,
    data: {
      file: 'content/getting-started-react.md'
    }
  },
  {
    path: 'getting-started/svg',
    component: ViewerComponent,
    data: {
      file: 'content/getting-started-svg.md'
    }
  },
  {
    path: 'getting-started/webpack',
    component: ViewerComponent,
    data: {
      file: 'content/getting-started-webpack.md'
    }
  },
  {
    path: 'getting-started/webfont',
    component: ViewerComponent,
    data: {
      file: 'content/getting-started-webfont.md'
    }
  },
  { path: '',
    component: HomeComponent
  },
  { path: 'icons',
    component: IconsComponent
  },
  { path: 'resources',
    component: ResourcesComponent
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IconsComponent,
    ViewerComponent,
    ResourcesComponent,
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
  providers: [
    // None
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
  
}
