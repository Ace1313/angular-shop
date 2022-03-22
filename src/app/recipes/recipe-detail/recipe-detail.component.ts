import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.modal';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {}

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppinglist(this.recipe.ingredients);
  }
}
