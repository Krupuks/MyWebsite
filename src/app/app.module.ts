import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { HomeComponent } from './routes/home/home.component';
import { AboutComponent } from './routes/about/about.component';
import { PortfolioComponent } from './routes/portfolio/portfolio.component';
import { ContactComponent } from './routes/contact/contact.component';
import { SpaceComponent } from './backgrounds/space/space.component';
import { KevComponent } from './backgrounds/kev/kev.component';
import { ProjectTileComponent } from './routes/portfolio/project-tile/project-tile.component';
import { ProjectContainerComponent } from './routes/portfolio/project-container/project-container.component';
import { ProjectFilterComponent } from './routes/portfolio/project-filter/project-filter.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    ContactComponent,
    SpaceComponent,
    KevComponent,
    ProjectTileComponent,
    ProjectContainerComponent,
    ProjectFilterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
    
      {path: "home", component: HomeComponent},
      {path: "about", component: AboutComponent},
      {path: "portfolio", component: PortfolioComponent},
      {path: "**", redirectTo: "home", pathMatch: "full"}
    ]),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
