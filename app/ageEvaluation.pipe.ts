import {Pipe, PipeTransform} from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: 'ageEvaluation',
  pure: false
})


export class AgeEvaluationPipe implements PipeTransform {
  transform(input: Animal[], ageSearch) {
    var output: Animal[] = [];
    if (ageSearch == "young") {
      for (let animal of input) {
        if (animal.age <= 2) {
          output.push(animal);
        }
      }
    return output;
  } else if (ageSearch == "adult") {
    for (let animal of input) {
      if (animal.age > 3) {
        output.push(animal);
      }
    }
    return output;
      } else {
        return input;
      }
    }

}
