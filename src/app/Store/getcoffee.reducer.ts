import { createReducer, on } from '@ngrx/store'
import { addCoffee } from './getcoffee.action'
export interface CoffeeState {
  coffees: any[]
}
const initialState: any[] = []
export const GetCoffeeReducer = createReducer(
  initialState,
  on(addCoffee, (state, payload: any) => [...state, ...[payload.coffee]])
)