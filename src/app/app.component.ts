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
      title: 'Contacts',
      url: '/contacts',
      icon: 'book'
    },
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
      title: 'Accounts',
      url: '/accounts',
      icon: 'calculator'
    },    
    {
      title: 'Events',
      url: '/events',
      icon: 'logo-buffer'
    },
    {
      title: 'Tasks',
      url: '/tasks',
      icon: 'bookmarks'
    },
    // {
    //   title: 'Deals',
    //   url: '/deals',
    //   icon: 'contact'
    // },     
    {
      title: 'Contact Us',
      url: '/contactus',
      icon: 'contacts'
    }, 
    {
      title: 'About Us',
      url: '/aboutus',
      icon: 'contact'
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
    var loginData = JSON.parse(localStorage.getItem('logindata'));
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
