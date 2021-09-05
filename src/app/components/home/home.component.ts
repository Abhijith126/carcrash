import { Component, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = [
    'firstCar',
    'secondCar',
    'crashedDate',
    'crashedTime',
  ];
  dataSource = new MatTableDataSource([]);

  constructor(private apiService: ApiService) {
    this.initilizeData();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if (filterValue) {
      const date = moment(filterValue.trim())
        .format('YYYY-MM-DD')
        .concat('T00:00.000');
      this.apiService.filterCrashesByDate(date).subscribe((data: any) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
      });
    } else {
      this.initilizeData();
    }
  }

  initilizeData() {
    this.apiService.getAllCrashes().subscribe((data: any) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }
}
