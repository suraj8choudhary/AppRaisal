import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'implicit/callback', loadChildren: './auth/implicit/auth-callback/auth-callback.module#AuthCallbackPageModule' },
  { path: 'implicit/logout', loadChildren: './auth/implicit/end-session/end-session.module#EndSessionPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'user-details', loadChildren: './user-details/user-details.module#UserDetailsPageModule' },
  { path: 'goals1', loadChildren: './goals1/goals1.module#Goals1PageModule' },
  { path: 'goals2', loadChildren: './goals2/goals2.module#Goals2PageModule' },
  { path: 'goals3', loadChildren: './goals3/goals3.module#Goals3PageModule' },
  { path: 'goals4', loadChildren: './goals4/goals4.module#Goals4PageModule' },
  { path: 'goals5', loadChildren: './goals5/goals5.module#Goals5PageModule' },
  { path: 'goals6', loadChildren: './goals6/goals6.module#Goals6PageModule' },
  { path: 'goals7', loadChildren: './goals7/goals7.module#Goals7PageModule' },
  { path: 'goals8', loadChildren: './goals8/goals8.module#Goals8PageModule' },
  { path: 'selfreview', loadChildren: './selfreview/selfreview.module#SelfreviewPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
