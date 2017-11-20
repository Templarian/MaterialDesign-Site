import { Component } from "@angular/core";
import { ViewerService } from "app/viewerPage/viewerPage.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Sidebar } from "app/viewerPage/sidebar/sidebar.model";
import { SidebarItem } from "app/viewerPage/sidebar/sidebarItem.model";

@Component({
  selector: 'mdi-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  providers: [
    ViewerService
  ]
})
export class SidebarComponent {

  sidebar: Sidebar;
  url: string;

  constructor(public router: Router,
    public route: ActivatedRoute,
    private viewerService: ViewerService
  ) {
    this.url = route.snapshot.url.join('/');
    this.sidebar = new Sidebar(this.url, [
      new SidebarItem("home", "Loading...", "", "", "", [])
    ]);
  }

  ngOnInit() {
    // Render Sidebar
    this.viewerService.getSidebar()
      .subscribe(sidebars => {
        this.sidebar = sidebars.find(sidebar => sidebar.url === this.url);
      });
  }

  isActive(sidebarItem: SidebarItem) {
    return sidebarItem.url == this.url && sidebarItem.hash == this.route.snapshot.fragment;
  }

}