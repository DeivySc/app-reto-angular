import { Component } from '@angular/core';
import {Task} from "../../interface/taks.interface";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {IAuth} from "../../../auth/interface/auth.interface";
import {Store} from "@ngrx/store";
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  regexp = "^[a-z0-9_-]{8,15}$";
  usu$?: Observable<IAuth[]>;
  tasks = new FormControl('', [Validators.required, Validators.pattern('[0-9a-zA-Z ]*')]);

  /*task: Task[] = [
    {id: 1, name: 'tarea 1', completed: false, color: 'primary'},
    {id: 2, name: 'tarea 2', completed: false, color: 'primary'},
    {id: 3, name: 'tarea 3', completed: false, color: 'primary'},
    {id: 4, name: 'tarea 4', completed: false, color: 'primary'},
  ]*/

  //En este código, utilizo el método Array.from() para generar un nuevo array con 4 elementos
  task: Task[] = Array.from({length: 4}, (_, i) => ({
    id: i + 1,
    name: `tarea ${i + 1}`,
    completed: false,
    color: 'primary'
  }));


  constructor(private _formBuilder: FormBuilder) { }

  allComplete: boolean = false;

  updateAllComplete(): void {
    if (this.task) {
      this.allComplete = this.task.every(t => t.completed);
    } else {
      console.log('La lista de tareas está vacía');
    }
  }

// Permite eliminar una tarea en el Array de Task(tareas)
  removeTask(id: number): void {
    const index = this.task.findIndex(x => x.id === id);
    if (index !== -1) {
      this.task.splice(index, 1);
      console.log(index);
    } else {
      console.log('ID no encontrado');
    }
  }


  // Permite registrar una nueva tarea en el Array de Task(tareas)
  onSubmit(): void {
    const taskValue = this.tasks.value;
    if (this.tasks.valid && taskValue && taskValue.trim() !== '') {
      const obj: Task = {
        id: this.task.length + 1,
        name: taskValue,
        completed: false,
        color: 'primary'
      }
      this.task.push(obj);
    } else {
      console.log("esta vacio");
    }
  }


  // Permite solo números, letras y espacios en un campo de entrada, y evita que se ingresen otros caracteres
  onKeyPress(event: any) {
    const regexpNumber = /[0-9a-zA-Z ]/;
    let inputCharacter = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !regexpNumber.test(inputCharacter)) {
      event.preventDefault();
    }
  }

}
