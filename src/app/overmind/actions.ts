import { Action } from 'overmind'

export const setTitle: Action<string> = ({ state }, title) => {
  state.title = title
}