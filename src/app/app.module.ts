import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';

import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ContentComponent } from './content/content.component';
import { AboutCSPLComponent } from './about-cspl/about-cspl.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { FAQsComponent } from './faqs/faqs.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AccountComponent } from './account/account.component';
import { DemoComponent } from './demo/demo.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import { FaqDemoComponent } from './faq-demo/faq-demo.component';
import {HttpClientModule} from '@angular/common/http';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { PurchaseDetailComponent } from './purchase-detail/purchase-detail.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ContentComponent,
    AboutCSPLComponent,
    OurTeamComponent,
    FAQsComponent,
    ContactUsComponent,
    AccountComponent,
    DemoComponent,
    ForgetPasswordComponent,
    WelcomeComponent,
    LoginComponent,
    FaqDemoComponent,
    PurchaseDetailComponent,
  ],
  imports: [BrowserModule, CommonModule, AppRoutingModule, RouterOutlet,RouterModule, BrowserAnimationsModule,MatExpansionModule ,HttpClientModule,MatMenuModule,MatTabsModule,MatStepperModule,MatSlideToggleModule, MatFormFieldModule,
    MatInputModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
