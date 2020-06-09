import React from "react"

// このファイルに状態と状態変更関数が固まっている
//
// Redux であれば
// reducer, action, container とかに分割したりするものを
// この1ファイルに収めているような形

const INITIAL_COUNT = 0

interface Context {
  count: number
  increment: () => void
}

const initialContext: Context = {
  count: INITIAL_COUNT,
  increment: (): void => {
    //
  },
}

export const SimpleContext = React.createContext(initialContext)

export const SimpleContextProvider: React.FC = (props: React.Props<{}>) => {
  const [currentCount, setCount] = React.useState(0)

  const context = {
    count: currentCount,
    increment: (): void => {
      setCount(currentCount + 1)
    },
  }

  const { children } = props
  return (
    <SimpleContext.Provider value={context}>{children}</SimpleContext.Provider>
  )
}
