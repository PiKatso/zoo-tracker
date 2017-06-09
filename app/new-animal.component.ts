import { Component, Output, EventEmitter } from '@angular/core';
import { Animal }  from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <h1>Log New Animal</h1>
  <form class="form-inline">
      <input class="form-control" placeholder="enter species" #newSpecies>
      <input class="form-control" placeholder="enter name" #newName>
      <input class="form-control" placeholder="enter age" #newAge>
      <input class="form-control" placeholder="enter diet" #newDiet>
      <input class="form-control" placeholder="enter location" #newLocation>
      <br>
      <input class="form-control" placeholder="enter number of caretakers" #newCaretakers>
      <input class="form-control" placeholder="enter gender" #newSex>
      <input class="form-control" placeholder="enter likes" #newLikes>
      <input class="form-control" placeholder="enter dislikes" #newDislikes>
      <button class="btn"
       (click)="saveNewAnimal(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value);
       newSpecies.value=''; newName.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newCaretakers.value=''; newSex.value=''; newLikes.value=''; newDislikes.value='';">Add Animal</button>
  </form>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  saveNewAnimal(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
    var newAnimal: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimal);
  }
}
