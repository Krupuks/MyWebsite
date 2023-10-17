import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { SpaceComponent } from './backgrounds/space/space.component';
import { KevComponent } from './backgrounds/kev/kev.component';
import { ProjectTileComponent } from './pages/portfolio/project-tile/project-tile.component';
import { ProjectContainerComponent } from './pages/portfolio/project-container/project-container.component';
import { ProjectFilterComponent } from './pages/portfolio/project-filter/project-filter.component';
import { FooterComponent } from './footer/footer.component';
import { PolicyComponent } from './pages/policy/policy.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    SpaceComponent,
    KevComponent,
    ProjectTileComponent,
    ProjectContainerComponent,
    ProjectFilterComponent,
    FooterComponent,
    PolicyComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
    
      {path: "home", component: HomeComponent},
      {path: "about", component: AboutComponent},
      {path: "portfolio", component: PortfolioComponent},
      {path: "policy", component: PolicyComponent},
      {path: "**", redirectTo: "home", pathMatch: "full"}
    ]),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
