import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, concatMap, map, of, switchMap} from "rxjs";
import {loginFailure, loginSuccess} from "./auth.action";
import {AuthService} from "../service/auth.service";

@Injectable()
export class LoginEffects {
  login$ = createEffect(() => {
      return this.actions$.pipe(
        ofType('[Login] User Login'),
        switchMap(({username, password}) =>
          this.authService.login(username, password).pipe(
            map(token => loginSuccess({
              token
            })),
            catchError(error => of(loginFailure({error})))
          )
        )
      );
    }
  );


  constructor(private actions$: Actions, private authService: AuthService) {}
}
