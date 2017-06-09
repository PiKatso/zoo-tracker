import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <div *ngFor="let animal of childAnimalList">
     <h4><a (click)="showDeets(animal)">{{animal.species}}</a></h4>
  </div>

  <div *ngIf="animalShowDeets" class="keg-details">
      <h3>{{animalShowDeets.species}} : {{animalShowDeets.name}}</h3>
      <p>{{animalShowDeets.name}} is {{animalShowDeets.age}}</p>
      <p>{{animalShowDeets.name}}'s' diet is  {{animalShowDeets.diet}}</p>
      <p>{{animalShowDeets.name}} is located:  {{animalShowDeets.price}}</p>
      <p>{{animalShowDeets.name}} has {{animalShowDeets.caretakers}} caretakers</p>
      <p>{{animalShowDeets.name}} is {{animalShowDeets.sex}}</p>
      <p>{{animalShowDeets.name}} likes {{animalShowDeets.likes}}</p>
      <p>{{animalShowDeets.name}} dislikes {{animalShowDeets.dislikes}}</p>
    </div>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];

  animalShowDeets = null;

  showDeets(animal) {
    this.animalShowDeets = animal;
  }


}
