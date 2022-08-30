import { createAction,props } from '@ngrx/store'
//export const getCoffee = createAction('[Coffee] Get coffee')
export const addCoffee = createAction(
  '[Coffee] Add coffee',
  props<any>()
 // (payload: any) => payload
)