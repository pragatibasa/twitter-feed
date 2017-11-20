import { Component, OnInit,Pipe, PipeTransform } from '@angular/core';
import {TwitterApiService } from '../services/twitter-api.service';
import { Subscription } from 'rxjs/Subscription';
import {Router} from '@angular/router';

@Component({
  selector: 'app-twitter-trending',
  templateUrl: './twitter-trending.component.html',
  styleUrls: ['./twitter-trending.component.css']
})
export class TwitterTrendingComponent implements OnInit {

  locationTrends: any;

  constructor(private dataService: TwitterApiService, private router: Router) {}

  ngOnInit() {
    this.dataService.getTrends().subscribe(res => {
      if(res.success) 
        this.locationTrends = res.data;
      else 
        this.router.navigateByUrl('/login');  
    });
  }
}
