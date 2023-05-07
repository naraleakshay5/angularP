import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { CommanService } from './comman.service';
import { log } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  constructor(private CommanService: CommanService, private route: Router) {}
  data: any;
  category: any;
  categoryDetails: any;
  displayAllDetails = false;
  tableData = true;
  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories() {
    this.CommanService.getAllCategories().subscribe((res: any) => {
      this.data = res;
    });
  }

  Category(value: any) {
    console.log(value);
    this.CommanService.getCategoriesName(value).subscribe((res: any) => {
      this.category = res;
      console.log(this.category);
    });
  }
  details(id: any) {
    this.CommanService.getProductDetails(id).subscribe((res: any) => {
      this.categoryDetails = res;
      console.log(this.categoryDetails);
    });
    this.displayAllDetails = true;
    this.tableData = false;
  }
  hideDetails() {
    this.displayAllDetails = false;
    this.tableData = true;
  }
}
