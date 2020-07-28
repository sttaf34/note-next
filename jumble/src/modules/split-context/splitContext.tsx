/* eslint-disable @typescript-eslint/no-empty-function */

import React, { Dispatch, SetStateAction } from "react"

interface State {
  count: number
}

const initialState: State = {
  count: 0,
}

const initialSetState: Dispatch<SetStateAction<State>> = () => {}

export const StateContext = React.createContext<State>(initialState)

export const SetStateContext = React.createContext<
  Dispatch<SetStateAction<State>>
>(initialSetState)

export const SplitContextProvider: React.FC = (props: React.Props<{}>) => {
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
