import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <div *ngIf="animalShowDeets">
    <h3>{{animalShowDeets.species}} : {{animalShowDeets.name}}</h3>
    <p>{{animalShowDeets.name}} is {{animalShowDeets.age}}</p>
    <p>{{animalShowDeets.name}}'s' diet is  {{animalShowDeets.diet}}</p>
    <p>{{animalShowDeets.name}} is located:  {{animalShowDeets.price}}</p>
    <p>{{animalShowDeets.name}} has {{animalShowDeets.caretakers}} caretakers</p>
    <p>{{animalShowDeets.name}} is {{animalShowDeets.sex}}</p>
    <p>{{animalShowDeets.name}} likes {{animalShowDeets.likes}}</p>
    <p>{{animalShowDeets.name}} dislikes {{animalShowDeets.dislikes}}</p>
    <button class="btn" (click)="editButtonClicked(animalShowDeets)">Edit</button>
  </div>

<div class="age-search">
    <label>Search Animals by Age</label>
    <select (change)="onAgeSearch($event.target.value)">
      <option value="young">Adolescents</option>
      <option value="adult">Adults</option>
      <option value="allAnimals" selected="selected">All Animals</option>
    </select>
  </div>

  <div *ngFor="let animal of childAnimalList | ageEvaluation:filterByAge">
     <h4><a *ngIf="animal.showAnimal == null" (click)="showDeets(animal)">{{animal.species}}</a></h4>
  </div>

  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() editAnimalSender = new EventEmitter();

  animalShowDeets = null;
  filterByAge: string = "allAnimals";

  onAgeSearch(ageSelection) {
    this.filterByAge = ageSelection;
}

  showDeets(animal) {
    this.animalShowDeets = animal;
  }

  editButtonClicked(AnimalToEdit: Animal) { this.editAnimalSender.emit(AnimalToEdit);
  }


}
