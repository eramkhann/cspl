import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { ContentComponent } from '../content/content.component';
import { AboutCSPLComponent } from '../about-cspl/about-cspl.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { FAQsComponent } from '../faqs/faqs.component';
import { OurTeamComponent } from '../our-team/our-team.component';
import { AccountComponent } from '../account/account.component';
import { DemoComponent } from '../demo/demo.component';
import { ForgetPasswordComponent } from '../forget-password/forget-password.component';
import { WelcomeComponent } from '../welcome/welcome.component';
import { LoginComponent } from '../login/login.component';
import { FaqDemoComponent } from '../faq-demo/faq-demo.component';
import { PurchaseDetailComponent } from '../purchase-detail/purchase-detail.component';

const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'about', component: AboutCSPLComponent },
  { path: 'our-team', component: OurTeamComponent },
  { path: 'faqs', component: FAQsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'account', component: AccountComponent },
  { path: 'demo', component: DemoComponent  },
  { path: 'forget', component: ForgetPasswordComponent  },
  { path: 'welcome', component: WelcomeComponent  },
  { path: 'login', component: LoginComponent  },
  { path: 'faqdemo', component: FaqDemoComponent  },
  { path: 'purchase', component: PurchaseDetailComponent  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
