import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'calender', loadChildren: './calender/calender.module#CalenderPageModule' },
  { path: 'leads', loadChildren: './leads/leads.module#LeadsPageModule' },
  { path: 'contacts', loadChildren: './contacts/contacts.module#ContactsPageModule' },
  { path: 'accounts', loadChildren: './accounts/accounts.module#AccountsPageModule' },
  { path: 'modules', loadChildren: './modules/modules.module#ModulesPageModule' },
  { path: 'aboutus', loadChildren: './aboutus/aboutus.module#AboutusPageModule' },
  { path: 'tasks', loadChildren: './tasks/tasks.module#TasksPageModule' },
  { path: 'events', loadChildren: './events/events.module#EventsPageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'feedbacks', loadChildren: './feedbacks/feedbacks.module#FeedbacksPageModule' },
  { path: 'deals', loadChildren: './deals/deals.module#DealsPageModule' },
  { path: 'contactus', loadChildren: './contactus/contactus.module#ContactusPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
