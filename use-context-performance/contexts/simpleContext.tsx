import React from "react"

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
