import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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

import { HomePageComponent } from './homePage/homePage.component';
import { ContributorPageComponent } from './contributorPage/contributorPage.component';
import { ContributorsPageComponent } from './contributorsPage/contributorsPage.component';
import { IconPageComponent } from './iconPage/iconPage.component';
import { IconsPageComponent } from './iconsPage/iconsPage.component';
import { DownloadPageComponent } from './downloadPage/downloadPage.component';
import { AdminIconsPageComponent } from './admin/iconsPage/iconsPage.component';
import { ViewerPageComponent } from './viewerPage/viewerPage.component';
import { ResourcesPageComponent } from './resourcesPage/resourcesPage.component';
import { AdminLoginPageComponent } from './admin/loginPage/loginPage.component';
import { NotFoundPageComponent } from './notFoundPage/notFoundPage.component';
import { MarkdownComponent } from "app/shared/markdown/markdown.component";
import { AdminAliasPageComponent } from 'app/admin/aliasPage/aliasPage.component';
import { HistoryPageComponent } from 'app/historyPage/historyPage.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MockInterceptor } from 'app/shared/interceptor/mock.interceptor';
import { UserComponent } from 'app/shared/userPhoto/userPhoto.component';
import { IconSearchComponent } from 'app/shared/iconSearch/iconSearch.component';
import { PromiseCacheService } from 'app/shared/promiseCache.service';
import { AdminTagPageComponent } from 'app/admin/tagPage/tagPage.component';
import { AdminRenamePageComponent } from 'app/admin/renamePage/renamePage.component';

const appRoutes: Routes = [
  {
    path: 'getting-started',
    component: ViewerPageComponent,
    data: {
      file: 'content/getting-started.md'
    }
  },
  {
    path: 'getting-started/android',
    component: ViewerPageComponent,
    data: {
      file: 'content/getting-started-android.md'
    }
  },
  {
    path: 'getting-started/angular',
    component: ViewerPageComponent,
    data: {
      file: 'content/getting-started-angular.md'
    }
  },
  {
    path: 'getting-started/angularjs',
    component: ViewerPageComponent,
    data: {
      file: 'content/getting-started-angularjs.md'
    }
  },
  {
    path: 'getting-started/bootstrap',
    component: ViewerPageComponent,
    data: {
      file: 'content/getting-started-bootstrap.md',
      stylesheets: [
        '//cdn.materialdesignicons.com/2.0.46/css/materialdesignicons.min.css',
        '/assets/bootstrap/helper.css'
      ]
    }
  },
  {
    path: 'getting-started/bootstrap-3',
    component: ViewerPageComponent,
    data: {
      file: 'content/getting-started-bootstrap-v3.md'
    }
  },
  {
    path: 'getting-started/polymer',
    component: ViewerPageComponent,
    data: {
      file: 'content/getting-started-polymer.md'
    }
  },
  {
    path: 'getting-started/react',
    component: ViewerPageComponent,
    data: {
      file: 'content/getting-started-react.md'
    }
  },
  {
    path: 'getting-started/svg',
    component: ViewerPageComponent,
    data: {
      file: 'content/getting-started-svg.md'
    }
  },
  {
    path: 'getting-started/vuejs',
    component: ViewerPageComponent,
    data: {
      file: 'content/getting-started-vuejs.md'
    }
  },
  {
    path: 'getting-started/webpack',
    component: ViewerPageComponent,
    data: {
      file: 'content/getting-started-webpack.md'
    }
  },
  {
    path: 'getting-started/webfont',
    component: ViewerPageComponent,
    data: {
      file: 'content/getting-started-webfont.md'
    }
  },
  {
    path: 'getting-started/windows',
    component: ViewerPageComponent,
    data: {
      file: 'content/getting-started-windows.md'
    }
  },
  {
    path: 'contribute',
    component: ViewerPageComponent,
    data: {
      file: 'content/contribute.md'
    }
  },
  {
    path: 'contribute/icon-naming',
    component: ViewerPageComponent,
    data: {
      file: 'content/contribute-naming.md'
    }
  },
  {
    path: 'contribute/site',
    component: ViewerPageComponent,
    data: {
      file: 'content/contribute-site.md'
    }
  },
  {
    path: 'contribute/site/api',
    component: ViewerPageComponent,
    data: {
      file: 'content/api.md'
    }
  },
  {
    path: 'contribute/site/api/data',
    component: ViewerPageComponent,
    data: {
      file: 'content/data.md'
    }
  },
  {
    path: 'guides',
    component: ViewerPageComponent,
    data: {
      file: 'content/guides.md'
    }
  },
  {
    path: 'guide/home-assistant',
    component: ViewerPageComponent,
    data: {
      file: 'content/guide-home-assistant.md'
    }
  },
  {
    path: 'guide/wcag',
    component: ViewerPageComponent,
    data: {
      file: 'content/guide-wcag.md'
    }
  },
  {
    path: 'code-of-conduct',
    component: ViewerPageComponent,
    data: {
      file: 'content/code-of-conduct.md'
    }
  },
  {
    path: 'build/site',
    component: ViewerPageComponent,
    data: {
      file: 'content/build.md'
    }
  },
  {
    path: 'about',
    component: ViewerPageComponent,
    data: {
      file: 'content/about.md'
    }
  },
  {
    path: 'license',
    component: ViewerPageComponent,
    data: {
      file: 'content/license.md'
    }
  },
  {
    path: 'contact',
    component: ViewerPageComponent,
    data: {
      file: 'content/contact.md'
    }
  },
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'icons',
    component: IconsPageComponent,
    data: {
      package: '38EF63D0-4744-11E4-B3CF-842B2B6CFE1B'
    }
  },
  {
    path: 'icons/light',
    component: IconsPageComponent,
    data: {
      package: '531A9B44-1962-11E5-89CC-842B2B6CFE1B'
    }
  },
  {
    path: 'icons/:tagUrl',
    component: IconsPageComponent,
    data: {
      package: '38EF63D0-4744-11E4-B3CF-842B2B6CFE1B'
    }
  },
  {
    path: 'icon/:iconName',
    component: IconPageComponent,
    data: {
      package: '38EF63D0-4744-11E4-B3CF-842B2B6CFE1B'
    }
  },
  {
    path: 'icon/:iconName/light',
    component: IconPageComponent,
    data: {
      package: '531A9B44-1962-11E5-89CC-842B2B6CFE1B'
    }
  },
  {
    path: 'contributors',
    component: ContributorsPageComponent,
    data: {
      package: '38EF63D0-4744-11E4-B3CF-842B2B6CFE1B'
    }
  },
  {
    path: 'contributor/:name',
    component: ContributorPageComponent,
    data: {
      package: '38EF63D0-4744-11E4-B3CF-842B2B6CFE1B'
    }
  },
  {
    path: 'download',
    component: DownloadPageComponent,
    data: {
      package: '38EF63D0-4744-11E4-B3CF-842B2B6CFE1B'
    }
  },
  {
    path: 'history',
    component: HistoryPageComponent,
    data: {
      package: '38EF63D0-4744-11E4-B3CF-842B2B6CFE1B'
    }
  },
  {
    path: 'resources',
    component: ResourcesPageComponent
  },
  {
    path: 'admin',
    component: AdminLoginPageComponent
  },
  {
    path: 'admin/icons',
    component: AdminIconsPageComponent
  },
  {
    path: 'admin/alias',
    component: AdminAliasPageComponent
  },
  {
    path: 'admin/tag',
    component: AdminTagPageComponent
  },
  {
    path: 'admin/rename',
    component: AdminRenamePageComponent
  },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContributorPageComponent,
    ContributorsPageComponent,
    IconPageComponent,
    IconsPageComponent,
    ViewerPageComponent,
    ResourcesPageComponent,
    DownloadPageComponent,
    HistoryPageComponent,
    AdminLoginPageComponent,
    AdminIconsPageComponent,
    AdminAliasPageComponent,
    AdminTagPageComponent,
    AdminRenamePageComponent,
    NotFoundPageComponent,
    IconComponent,
    UserComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    MarkdownComponent,
    IconSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: MockInterceptor,
    multi: true,
  }, PromiseCacheService],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {

}
