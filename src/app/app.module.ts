import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { AuthModule, OidcSecurityService } from 'angular-auth-oidc-client';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ChildOneComponent } from './child-one/child-one.component';
import { ChildTwoComponent } from './child-two/child-two.component';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { BasicHighlightDirective } from './directives/basic-highlight.directive'
import { BetterHighlightDirective } from './directives/better-highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { UsersComponent } from './users/users.component';
import { ServiceComponent } from './service/service.component';
import { AccountComponent } from './service/account/account.component';
import { NewAccountComponent } from './service/new-account/new-account.component';
import { LoggingService } from './service/logging.service';
import { AccountsService } from './service/accounts.service';
import { RoutesEgComponent } from './routes-eg/routes-eg.component';
import { ErrorPageComponent } from './routesEg/error-page/error-page.component';
import { HomeComponent } from './routesEg/home/home.component';
import { PageNotFoundComponent } from './routesEg/page-not-found/page-not-found.component';
import { ServersComponent } from './routesEg/servers/servers.component';
import { UserComponent } from './routesEg/users/user/user.component';
import { ServerComponent } from './routesEg/servers/server/server.component';
import { EditServerComponent } from './routesEg/servers/edit-server/edit-server.component';
@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    DataBindingComponent,
    ParentComponent,
    ChildComponent,
    ChildOneComponent,
    ChildTwoComponent,
    DirectivesComponent,
    BetterHighlightDirective,
    UnlessDirective,
    UsersComponent,
    ServiceComponent,
    AccountComponent,
    NewAccountComponent,
    RoutesEgComponent,
    ErrorPageComponent,
    HomeComponent,
    PageNotFoundComponent,
    ServersComponent,
    UserComponent,
    ServerComponent,
    EditServerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [AccountsService, LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
