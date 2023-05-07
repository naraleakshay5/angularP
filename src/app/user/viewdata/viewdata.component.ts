import { Component, OnInit } from '@angular/core';

import { CommanService } from '../comman.service';
import { Router, ActivatedRoute, Route } from '@angular/router';
@Component({
  selector: 'app-viewdata',
  templateUrl: './viewdata.component.html',
  styleUrls: ['./viewdata.component.css'],
})
export class ViewdataComponent implements OnInit {
  categoryDetails: any;
  id: any;
  constructor(
    private CommanService: CommanService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //this.details(this.route.snapshot.params['id']);
    //this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.router.snapshot.paramMap.get('id'));
  }
  details() {
    this.CommanService.getProductDetails(this.id).subscribe((res: any) => {
      this.categoryDetails = res;
      console.log(this.categoryDetails);
    });
  }
}
