import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { environment } from "../environments/environment";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";
import * as firebase from "firebase/app";

import { AppComponent } from "./app.component";
import { DashboardComponent } from "./views/dashboard/dashboard.component";
import { LoginComponent } from "./views/login/login.component";
import { AppRoutes } from "./app.routes";
import { AuthService } from "./services/auth.service";
import { AuthGuard } from "./services/auth.guard";
import { ArticleComponent } from "./views/article/article.component";
import { AvailableComponent } from "./frotend/available/available.component";
import { ClientComponent } from "./frotend/client/client.component";
import { CounterComponent } from "./frotend/counter/counter.component";
import { FeaturesComponent } from "./frotend/features/features.component";
import { FooterComponent } from "./frotend/footer/footer.component";
import { HomeComponent } from "./frotend/home/home.component";
import { MailComponent } from "./frotend/mail/mail.component";
import { MainDirectionsComponent } from "./frotend/main-directions/main-directions.component";
import { NavbarComponent } from "./frotend/navbar/navbar.component";
import { HeaderComponent } from "./frotend/header/header.component";
import { LayoutComponent } from "./frotend/layout/layout.component";
import { EmployeesComponent } from "./views/employees/employees.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { EmployeeService } from "./views/employees/shared/employee.service";
import { FormUploadComponent } from "./views/upload/form-upload/form-upload.component";
import { ListUploadComponent } from "./views/upload/list-upload/list-upload.component";
import { DetailsUploadComponent } from "./views/upload/details-upload/details-upload.component";
import { UploadFileService } from "./views/upload/upload-file.service";
import { ShowArticleComponent } from "./frotend/show-article/show-article.component";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    ArticleComponent,
    AvailableComponent,
    ClientComponent,
    CounterComponent,
    FeaturesComponent,
    FooterComponent,
    HomeComponent,
    MailComponent,
    MainDirectionsComponent,
    NavbarComponent,
    HeaderComponent,
    LayoutComponent,
    EmployeesComponent,
    FormUploadComponent,
    ListUploadComponent,
    DetailsUploadComponent,
    ShowArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, "simlead-demo"),
    HttpClientModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule
  ],
  providers: [AuthService, AuthGuard, EmployeeService, UploadFileService],
  bootstrap: [AppComponent]
})
export class AppModule {}
