import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ProductsService } from '../../shared/services/product.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule,MatInputModule, MatButtonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {

  productsService = inject(ProductsService)
  matSnackBar = inject(MatSnackBar)
  router = inject(Router)

  form = new FormGroup({
    title: new FormControl<string>('', {
      nonNullable: true,
      validators: Validators.required

    })
  }
  );

  onSubmit(){
    console.log('clicou');
    
    this.productsService.post({
      title: this.form.controls.title.value
    })
    .subscribe(()=>{
      this.matSnackBar.open('Produto Criado com Sucesso', 'Ok');

      this.router.navigateByUrl('/');
    })
    
  }
}
