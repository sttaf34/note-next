import React from "react"

interface Context {
  count: number
  increment: () => void
}

const initialContext: Context = {
  count: 0,
  increment: (): void => {
    //
  },
}

export const SplitlessContext = React.createContext(initialContext)

export const SplitlessContextProvider: React.FC = (
  props: React.Props<unknown>
) => {
  const [currentCount, setCount] = React.useState(0)

  const increment = () => {
    setCount((count) => count + 1)
  }

  const context = {
    count: currentCount,
    increment,
  }

  const { children } = props
  return (
    <SplitlessContext.Provider value={context}>
      {children}
    </SplitlessContext.Provider>
  )
}
