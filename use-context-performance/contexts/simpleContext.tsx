/* eslint-disable @typescript-eslint/no-empty-function */

import React from "react"

const INITIAL_COUNT = 0

interface Context {
  count: number
  setCount: React.Dispatch<React.SetStateAction<number>>
}

const initialContext: Context = {
  count: INITIAL_COUNT,
  setCount: (): void => {},
}

export const SimpleContext = React.createContext(initialContext)

export const SimpleContextProvider: React.FC = (props: React.Props<{}>) => {
  const [count, setCount] = React.useState(0)

  const context = {
    count,
    setCount,
  }

  const { children } = props
  return (
    <SimpleContext.Provider value={context}>{children}</SimpleContext.Provider>
  )
}
