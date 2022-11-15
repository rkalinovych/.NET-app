import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private service: MainService){

  }
  DepartmentList: any = []
  ngOnInit(): void {
    this.service.getDepList().subscribe(data=>{
      this.DepartmentList=data;
    });
  }
}
