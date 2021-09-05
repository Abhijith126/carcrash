import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  crashData: any;
  constructor(private apiService: ApiService) {
    this.crashData = this.apiService.getAllCrashes();
  }

  ngOnInit(): void {}
}
