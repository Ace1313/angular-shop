import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppinglistService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.modal';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Carrot Soup',
      'This is a simple carrot aoup filled with vitamins',
      'https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c291cHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      [new Ingredient('Carrot', 5), new Ingredient('Onion', 2)]
    ),
    new Recipe(
      'Chocolate Cake',
      'Amazing cake with chocolate, fudge and marshmallwos',
      'https://images.unsplash.com/photo-1602351447937-745cb720612f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2FrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=600',
      [new Ingredient('Chocolate', 4), new Ingredient('marshmallow', 15)]
    ),
  ];

  constructor(private shoppingListService: ShoppinglistService) {}
  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }
  addIngredientsToShoppinglist(ingredients: Ingredient[]) {
    this.shoppingListService.addIng(ingredients);
  }
}
