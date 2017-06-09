import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <div *ngFor="let animal of childAnimalList">
     <h4><a>{{animal.species}}</a></h4>
  </div>

  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];


}
