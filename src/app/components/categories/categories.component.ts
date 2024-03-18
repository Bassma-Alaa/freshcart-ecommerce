import { Category } from './../../core/services/pipe/guard/interfaces/category';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/core/services/product.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule , RouterLink],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  constructor(private _ProductService:ProductService){}
  CategoryData:Category[]=[]
ngOnInit(): void {
this._ProductService.getCategories().subscribe({
  next:(res)=>{
    console.log(res);
    this.CategoryData = res.data;

  }
})
}

}
