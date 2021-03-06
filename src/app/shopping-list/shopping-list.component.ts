import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppinglistService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscription: Subscription;
  constructor(public shoppingService: ShoppinglistService) {}

  ngOnInit() {
    this.ingredients = this.shoppingService.getIngredient();
    this.subscription = this.shoppingService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  onEditItem(index: number) {
    this.shoppingService.startedEditing.next(index);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
