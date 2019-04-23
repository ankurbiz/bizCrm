import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    // {
    //   title: 'List',
    //   url: '/list',
    //   icon: 'list'
    // },
    // {
    //   title: 'Login',
    //   url: '/login',
    //   icon: 'list'
    // },
    {
      title: 'Calendar',
      url: '/calender',
      icon: 'calendar'
    },
    {
      title: 'Leads',
      url: '/leads',
      icon: 'people'
    },
    {
      title: 'Contacts',
      url: '/contacts',
      icon: 'book'
    },
    {
      title: 'Accounts',
      url: '/accounts',
      icon: 'calculator'
    },
    {
      title: 'Deals',
      url: '/deals',
      icon: 'contact'
    },
    {
      title: 'Tasks',
      url: '/tasks',
      icon: 'bookmarks'
    },
    {
      title: 'Events',
      url: '/events',
      icon: 'logo-buffer'
    },
    {
      title: 'Contact Us',
      url: '/contactus',
      icon: 'contacts'
    },    
    {
      title: 'Settings',
      url: '/settings',
      icon: 'settings'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
