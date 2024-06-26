import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductsService } from '../../shared/services/product.service';
import { Product } from '../../shared/interfaces/product.interface';
import { MatCardModule} from  '@angular/material/card';
import { MatButton, MatButtonModule} from  '@angular/material/button';
import { CardComponent } from './components/card/card.component';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent,RouterLink,MatButtonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  products: Product[] = [];
  productsService = inject(ProductsService);
routeParam: any;
  ngOnInit(){
    this.productsService.getAll().subscribe((products) => {
      this.products = products
    })
  }
}
