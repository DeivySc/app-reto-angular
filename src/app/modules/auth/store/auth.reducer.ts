import {createReducer, on} from "@ngrx/store";
import {login, loginFailure, loginSuccess} from "./auth.action";

export interface State {
  token: string | null;
  error: string | null;
  isLoading: boolean;
}

const initialState: State = {
  token: null,
  error: null,
  isLoading: false
};

export const loginReducer = createReducer(initialState,
  on(login, state => ({ ...state, isLoading: true })),
  on(loginSuccess, (state, { token }) => ({ ...state, token, isLoading: false })),
  on(loginFailure, (state, { error }) => ({ ...state, error, isLoading: false }))
);
