import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { User } from '../../models/user';

import { GithubUsers } from '../../providers/github-users/github-users';

@IonicPage()
@Component({
  selector: 'page-user-details',
  templateUrl: 'user-details.html',
})
export class UserDetailsPage {
  user: User;
  login: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private githubUsers: GithubUsers) {
    this.login = navParams.get('login');

    githubUsers.loadDetails(this.login).subscribe(user => {
      this.user = user;
    })
  }
}
