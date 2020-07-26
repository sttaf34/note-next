import React from "react"
import { NextPage } from "next"
import {
  SimpleContext,
  SimpleContextProvider,
} from "src/modules/use-context-split-file-simple/simpleContext"

const Child: React.FC = () => {
  const context = React.useContext(SimpleContext)
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
  const context = React.useContext(SimpleContext)
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
  return (
    <SimpleContextProvider>
      <Parent />
    </SimpleContextProvider>
  )
}

// eslint-disable-next-line import/no-default-export
export default Page
