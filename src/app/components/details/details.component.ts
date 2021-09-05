import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  crashDetails: any;
  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const collisionId = this.route.snapshot.params.id;
    this.apiService
      .fetchDetail(collisionId)
      .subscribe((data: any) => (this.crashDetails = data[0]));
  }
}
