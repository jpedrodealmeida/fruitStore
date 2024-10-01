import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SaleService } from '../../../sale/sale.service';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent implements OnInit, OnDestroy {

  private saleService = inject(SaleService);

  title = 'A Simple Fruit & Vegetable Store';
  form!: FormGroup;
  private fb = inject(FormBuilder);
  private subscription = new Subscription;

  constructor() {
    this.form = this.fb.group({
      search: ['']
    })
  }

  ngOnInit(): void {
     this.subscription.add(this.form.controls['search'].valueChanges.subscribe((filter)=> {
       this.saleService.getProducts({filter});
     }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
