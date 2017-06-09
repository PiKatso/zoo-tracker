import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal }  from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <form class="form-inline">
    <div *ngIf="currentAnimal">
      <h3>Edit Animal</h3>
      <label>Animal Species</label>
      <input class="form-control" [(ngModel)]="currentAnimal.species" [ngModelOptions]="{standalone: true}">
      <br>
      <label>Animal Name</label>
      <input class="form-control" [(ngModel)]="currentAnimal.name" [ngModelOptions]="{standalone: true}">
      <br>
      <label>Animal's Age</label>
      <input class="form-control" [(ngModel)]="currentAnimal.age" [ngModelOptions]="{standalone: true}">
      <br>
      <label>Animal's Diet</label>
      <input class="form-control" [(ngModel)]="currentAnimal.diet" [ngModelOptions]="{standalone: true}">
      <br>
      <label>Animal Location</label>
      <input class="form-control" [(ngModel)]="currentAnimal.location" [ngModelOptions]="{standalone: true}">
      <br>
      <label>Caretakers</label>
      <input class="form-control" [(ngModel)]="currentAnimal.caretakers" [ngModelOptions]="{standalone: true}">
      <br>
      <label>Animal's Gender</label>
      <input class="form-control" [(ngModel)]="currentAnimal.sex" [ngModelOptions]="{standalone: true}">
      <br>
      <label>Animal's Likes</label>
      <input class="form-control" [(ngModel)]="currentAnimal.likes" [ngModelOptions]="{standalone: true}">
      <br>
      <label>Animal's Dislikes</label>
      <input class="form-control" [(ngModel)]="currentAnimal.dislikes" [ngModelOptions]="{standalone: true}">
      <br>

      <button class="btn" (click)="finishedEditing()">Done</button>
    </div>
  </form>
  `
})

export class EditAnimalComponent {
  @Input() currentAnimal: Animal;
  @Output() editAnimalCompleteSender = new EventEmitter();


  finishedEditing() {
    this.editAnimalCompleteSender.emit();
  }
}
