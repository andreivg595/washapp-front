import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DashboardState } from '../reducers/dashboard.reducers';

export const selectDashboardState =
  createFeatureSelector<DashboardState>('dashboard');

export const getEmployees = createSelector(
  selectDashboardState,
  (state) => state.employees
);
