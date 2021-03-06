/* eslint-disable @typescript-eslint/no-empty-function */

import React, { Dispatch, SetStateAction } from "react"

interface State {
  count: number
}

const initialState: State = {
  count: 0,
}

export const increment = (previousState: State): State => {
  return { count: previousState.count + 1 }
}

export const decrement = (previousState: State): State => {
  return { count: previousState.count - 1 }
}

const initialSetState: Dispatch<SetStateAction<State>> = () => {}

export const StateContext = React.createContext<State>(initialState)

export const SetStateContext = React.createContext<
  Dispatch<SetStateAction<State>>
>(initialSetState)

export const SplitActionsContextProvider: React.FC = (
  props: React.Props<unknown>
) => {
  const [state, setState] = React.useState(initialState)

  const { children } = props
  return (
    <StateContext.Provider value={state}>
      <SetStateContext.Provider value={setState}>
        {children}
      </SetStateContext.Provider>
    </StateContext.Provider>
  )
}
