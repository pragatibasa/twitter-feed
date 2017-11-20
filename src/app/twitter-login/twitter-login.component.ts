import { Component, OnInit } from '@angular/core';
import {TwitterApiService } from '../services/twitter-api.service';
import {Router} from '@angular/router';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-twitter-login',
  templateUrl: './twitter-login.component.html',
  styleUrls: ['./twitter-login.component.css']
})
export class TwitterLoginComponent implements OnInit {

  authenticationData:any;
  
  constructor(private dataService: TwitterApiService, private router: Router) { }

  ngOnInit() { }

  authenticateTwitter() {
    this.dataService.authenticate().subscribe(res => {
      this.authenticationData =  res;
      if(this.authenticationData.success == true && this.authenticationData.data != '') {
        this.router.navigateByUrl('/home');
      }
    });
  }

}
