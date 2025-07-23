import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { BindingObjet } from '../../../../core/models/demo2-binding.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-demo2-binding',
  imports: [JsonPipe, FormsModule],
  templateUrl: './demo2-binding.component.html',
  styleUrl: './demo2-binding.component.scss',
})
export class Demo2BindingComponent {
  helloWorld: string = 'Hello world from TS!';
  PI: number = Math.PI;
  date: Date = new Date();
  tableau: string[] = ['un', 'deux', 'trois'];
  booleen: boolean = true;
  unNull = null;
  unUndefined = undefined;
  objet: BindingObjet = {
    nom: 'Doe',
    prenom: 'John',
  };

  buttonIsDisabled: boolean = true;

  constructor() {
    this.helloWorld += ' le constructeur!';
    this.helloWorld += this.disBonjour('John');
  }

  disBonjour(nom: string): string {
    return `Bonjour ${nom}!`;
  }

  btnClicked(): void {
    this.buttonIsDisabled = !this.buttonIsDisabled;
  }
}
