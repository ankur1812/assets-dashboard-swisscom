import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Asset } from 'src/app/interfaces/asset';
import { AssetApiService } from '../services/asset-api.service';
import { FindAllSuccess, DashboardAction } from './dashboard.action';

@Injectable()
export class DashboardEffects {
	@Effect()
	findAll$: Observable<Action> = this.actions$.pipe(
		ofType(DashboardAction.GET_ASSETS),
		switchMap(() => this.assetApiService.getData()),
    map((results: Asset[]) => new FindAllSuccess(results))
	);
	constructor(private actions$: Actions, private assetApiService: AssetApiService) {}
}
