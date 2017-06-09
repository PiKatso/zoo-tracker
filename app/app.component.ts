import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <new-animal (newAnimalSender)="createNewAnimal($event)"></new-animal>

  <animal-list [childAnimalList]="animalList" (editAnimalSender)="editAnimal($event)"></animal-list>

  <div class="edit-animal">
    <edit-animal [currentAnimal]="selectedAnimal" (editAnimalCompleteSender)="finishedEditing()"></edit-animal>
  </div>
  `
})

export class AppComponent {
  selectedAnimal: Animal = null;

  animalList: Animal[] = [
    new Animal('Arctic Fox', 'Moon', 2, 'Carnivore', 'Northern Trail', 5, 'Female', 'Cool shade', 'Loud noises'),
    new Animal('Ocelot', 'Prince', 4, 'Carnivore', 'Tropical Rain Forest Building', 6, 'Male', 'Laying in the sunshine', 'Toys that are not rope-based'),
    new Animal('Northwest Black Tailed Deer', 'Tinkerbell', 8, 'Herbivore', 'Northern Trail', 2, 'Female', 'Delicate roots and leaves', 'Loud Noises')
  ];

  createNewAnimal(newAnimalFromChild: Animal) {
    this.animalList.push(newAnimalFromChild);
  }

  editAnimal(animalToEdit: Animal) {
    this.selectedAnimal = animalToEdit;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

}
