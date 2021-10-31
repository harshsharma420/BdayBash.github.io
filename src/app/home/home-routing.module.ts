import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: HomePage,
    children: [
    {
      path:'landing-page',
      children: [
        {
          path:'',
          loadChildren:() => import('../landing-page/landing-page.module').then(m => m.LandingPagePageModule)
        }
      ]
    },
    {
      path:'login',
      children: [
        {
          path:'',
          loadChildren:() => import('../login/login.module').then(m => m.LoginPageModule)
        }
      ]
    },
    {
      path:'shop',
      children: [
        {
          path:'',
          loadChildren:() => import('../shop/shop.module').then(m => m.ShopPageModule)
        }
      ]
    },
    {
      path:'help',
      children: [
        {
          path:'',
          loadChildren:() => import('../help/help.module').then(m => m.HelpPageModule)
        }
      ]
    },
    {
      path: '',
      redirectTo: 'tabs/landing-page',
      pathMatch:'full'
    }

    ]
  },
  {
    path: '',
    redirectTo: 'tabs/landing-page',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
