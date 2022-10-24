import { NgModule } from '@angular/core';
import { LoginModule } from './components/login/login.module';
import { SignUpModule } from './components/sign-up/sign-up.module';

import { ActionReducer, INIT, StoreModule, UPDATE } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { authReducer, AuthState } from './store/reducers/auth.reducers';
import { AuthEffects } from './store/effects/auth.effects';

export const hydrationMetaReducer = (
  reducer: ActionReducer<AuthState>
): ActionReducer<AuthState> => {
  return (state, action) => {
    if (action.type === INIT || action.type === UPDATE) {
      const storageValue = localStorage.getItem('state');
      if (storageValue) {
        try {
          return JSON.parse(storageValue);
        } catch {
          localStorage.removeItem('state');
        }
      }
    }
    const nextState = reducer(state, action);
    localStorage.setItem('state', JSON.stringify(nextState));
    return nextState;
  };
};

@NgModule({
  imports: [
    LoginModule,
    SignUpModule,
    StoreModule.forFeature('auth', authReducer, {
      metaReducers: [hydrationMetaReducer],
    }),
    EffectsModule.forFeature([AuthEffects]),
  ],
  exports: [],
})
export class AuthModule {}
