import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TwitterApiService } from './services/twitter-api.service';
import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { UrlDecodePipePipe } from './pipes/url-decode-pipe.pipe';
import { TransformTweetTextPipe } from './pipes/transform-tweet-text.pipe';
import { TwitterLoginComponent } from './twitter-login/twitter-login.component';
import { TwitterTrendingComponent } from './twitter-trending/twitter-trending.component';

const appRoutes: Routes = [{
      path: 'home',
      component: TwitterTrendingComponent
  },
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login',component: TwitterLoginComponent},
  ];


@NgModule({
  declarations: [
    AppComponent,
    UrlDecodePipePipe,
    TransformTweetTextPipe,
    TwitterLoginComponent,
    TwitterTrendingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)

  ],  
  providers: [TwitterApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
