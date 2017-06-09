import { Component, Output, EventEmitter } from '@angular/core';
import { Animal }  from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <h1>Log New Animal</h1>
  <form class="form-inline">
      <label>Species:</label>
      <input class="form-control" #newSpecies>
      <label>name:</label>
      <input class="form-control" #newName>
      <label>Age:</label>
      <input class="form-control" #newAge>
      <label>Diet:</label>
      <input class="form-control" #newDiet>
      <label>Location:</label>
      <input class="form-control" #newLocation>
      <label>Caretakers:</label>
      <input class="form-control" #newCaretakers>
      <label>Sex:</label>
      <input class="form-control" #newSex>
      <label>Likes:</label>
      <input class="form-control" #newLikes>
      <label>Dislikes:</label>
      <input class="form-control" #newDislikes>
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
