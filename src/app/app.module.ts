// Angular components
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

// Globally used components
import {AppComponent} from './app.component';
import {routing} from 'app/app.routes';
import { BlogComponent } from 'components/blog/blog.component';
import {HttpClientService} from '../services/HttpClientService';

// Developed components
import {TinyEditorComponent} from 'components/tiny-editor/tiny-editor.component';
import {HeaderComponent} from 'components/header/header.component';
import {LoginComponent} from '../components/login/login.component';
import {DetailComponent} from '../components/detail/detail.component'
import { ForumComponent } from '../components/forum/forum.component';

// DataServices
import {LiveBlogService} from '../services/BlogService/LiveBlogService';
import {LiveUserService} from '../services/UserService/LiveUserService';
import {LiveInstitutionService } from '../services/InstitutionService/LiveInstitutionService';
import { LiveInternshipService } from 'services/InternshipService/LiveInternshipService';

@NgModule({
  declarations: [
    AppComponent,
    TinyEditorComponent,
    HeaderComponent,
    BlogComponent,
    LoginComponent,
    DetailComponent,
    ForumComponent,
  ],
  imports: [
    routing,
    BrowserModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [HttpClientService,
    LiveBlogService,
    LiveUserService,
    LiveInstitutionService,
    LiveInternshipService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
