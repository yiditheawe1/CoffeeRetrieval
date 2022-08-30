import { createAction } from '@ngrx/store'
//export const getCoffee = createAction('[Coffee] Get coffee')
export const addCoffee = createAction(
  '[Coffee] Add coffee',
  (payload: any) => payload
)