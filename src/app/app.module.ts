// Angular components
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

// Globally used components
import {AppComponent} from './app.component';
import {routing} from 'app/app.routes';
import { BlogComponent } from 'components/blog/blog.component';
import {HttpClientService} from './database/HttpClientService';

// Developed components
import {TinyEditorComponent} from 'components/tiny-editor/tiny-editor.component';
import {HeaderComponent} from 'components/header/header.component';
import {LoginComponent} from '../components/login/login.component';
import {DetailComponent} from '../components/detail-page/detail.component'

// DataServices
import {LoginDataservice} from './database/login.dataservice';
import {BlogDataservice} from './database/blog.dataservice';
import {UserDataservice} from './database/user.dataservice';
import { SchoolService } from 'app/database/school.dataservice';

// QR Code
//import { QRCodeModule } from 'angular2-qrcode';

@NgModule({
  declarations: [
    AppComponent,
    TinyEditorComponent,
    HeaderComponent,
    BlogComponent,
    LoginComponent,
    DetailComponent,
  ],
  imports: [
    routing,
    BrowserModule,
    BrowserModule,
    FormsModule,
    HttpModule,
//    QRCodeModule,
  ],
  providers: [HttpClientService,
    LoginDataservice,
    BlogDataservice,
    UserDataservice,
    SchoolService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}