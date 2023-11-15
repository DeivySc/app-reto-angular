import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import { Store } from '@ngrx/store';
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {selectError, selectIsLoading, selectToken, selectUsername} from "../../store/auth.selector";
import {login} from "../../store/auth.action";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  token = '';
  user = '';
  error = '';
  isLoading = false;

  constructor(private store: Store, private router: Router, private _snackBar: MatSnackBar) {
    /*this.store.select(selectToken).subscribe(token => (this.token = token));
    this.store.select(selectUsername).subscribe(username => (
      console.log(this.user = username)
    ));
    this.store.select(selectError).subscribe(error => (this.error = error));
    this.store.select(selectIsLoading).subscribe(isLoading => (this.isLoading = isLoading));*/
  }
  onSubmit(): void {
    const { email, password } = this.loginForm.value;

    if (email === 'test01' && password === 'test01') {
      this.router.navigateByUrl('/task');
      this.store.dispatch(login({ username: email, password: password }));
      this.store.select(selectUsername).subscribe(user => {
        console.log('aqui va: ',login);
      });
    } else {
      this._snackBar.open('Usuario o contraseña incorrecta!!', 'OK', {
        horizontalPosition: "right",
        verticalPosition: "top",
        duration: 5000,
      });
    }

    // TODO: Use EventEmitter with form value
    //console.warn(this.loginForm.value);
  }

}
