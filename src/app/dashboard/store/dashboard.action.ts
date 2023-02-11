import { Action } from '@ngrx/store';
import { Asset } from 'src/app/interfaces/asset';

export enum DashboardAction {
	GET_ASSETS = '[Dashboard] Get Assets',
	GET_ASSETS_SUCCESS = '[Dashboard] Get Assets Success'
}

export class FindAll implements Action {
	readonly type = DashboardAction.GET_ASSETS;
}

export class FindAllSuccess implements Action {
	readonly type = DashboardAction.GET_ASSETS_SUCCESS;
    constructor(public assets: Asset[]) {}
}

export type DashboardActions = FindAll | FindAllSuccess;

