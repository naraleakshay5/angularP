import { Component, OnInit } from '@angular/core';
import { DumpService } from './dump.service';
import { log } from 'console';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  data: any;
  constructor(private DumpService: DumpService) {}

  ngOnInit(): void {
    this.getDumpData();
  }

  //get api implemention
  getDumpData() {
    this.DumpService.allGet().subscribe((res: any) => {
      this.data = res;
      console.log(this.data);
    });
  }
}
