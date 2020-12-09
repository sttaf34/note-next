import React from "react"

interface State {
  count: number
}

const initialState: State = {
  count: 0,
}

interface SetState {
  increment: () => void
}

const initialSetState: SetState = {
  increment: () => console.log(),
}

export const StateContext = React.createContext<State>(initialState)

export const SetStateContext = React.createContext<SetState>(initialSetState)

export const SplitUselessContextProvider: React.FC = (
  props: React.Props<unknown>
) => {
  const [count, setCount] = React.useState(0)

  const increment = () => {
    setCount((previousCount) => previousCount + 1)
  }

  const state: State = {
    count,
  }

  const setState: SetState = {
    increment,
  }

  const { children } = props
  return (
    <StateContext.Provider value={state}>
      <SetStateContext.Provider value={setState}>
        {children}
      </SetStateContext.Provider>
    </StateContext.Provider>
  )
}
