import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Asset } from 'src/app/interfaces/asset';
import { DashboardActions, DashboardAction } from './dashboard.action';

export interface DashboardState {
  assets: Asset[];
}

const initialState: DashboardState = {
	assets: []
};

export function reducer(state = initialState, action: DashboardActions): DashboardState {
	switch (action.type) {
		case DashboardAction.GET_ASSETS: {
			return { ...state, assets: [] };
		}
		case DashboardAction.GET_ASSETS_SUCCESS: {
			return { ...state, assets: action.assets };
		}
		default: {
			return state;
		}
	}
}

const moduleSelector = createFeatureSelector<DashboardState>('dashboard');
export const assets = createSelector(moduleSelector, (s: DashboardState) => s.assets);
