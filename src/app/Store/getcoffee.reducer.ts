import { createReducer, on } from '@ngrx/store'
import { addCoffee } from './getcoffee.action'
export interface CoffeeState {//store
  coffees: any[]
}
const initialState: any[] = []

export const GetCoffeeReducer = createReducer(
  initialState,
  on(addCoffee, (state, coffee1: any) => [...state, ...[coffee1]]))