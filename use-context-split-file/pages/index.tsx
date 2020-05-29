import React from "react"
import { NextPage } from "next"

//
// Context の用意
//

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

const IndexContext = React.createContext(initialContext)

//
// Component
//

const Child: React.FC = () => {
  const context = React.useContext(IndexContext)
  const { count, increment } = context

  return (
    <>
      <button type="button" onClick={increment}>
        増 by 子
      </button>
      <p>子コンポーネントでの表示 → {count}</p>
    </>
  )
}

const Parent: React.FC = () => {
  const context = React.useContext(IndexContext)
  const { count, increment } = context

  return (
    <>
      <button type="button" onClick={increment}>
        増 by 親
      </button>
      <p>親コンポーネントでの表示 → {count}</p>
      <Child />
    </>
  )
}

const Page: NextPage = () => {
  const [currentCount, setCount] = React.useState(0)

  const context = {
    count: currentCount,
    increment: (): void => {
      setCount(currentCount + 1)
    },
  }

  return (
    <IndexContext.Provider value={context}>
      <Parent />
    </IndexContext.Provider>
  )
}

export default Page
