import React from "react"
import { NextPage } from "next"

import { SimpleContextProvider, SimpleContext } from "../contexts/simpleContext"

const ChildA: React.FC = () => {
  const context = React.useContext(SimpleContext)
  const { count, increment } = context

  console.log("ChildA render")
  return (
    <>
      <button type="button" onClick={increment}>
        増 by 子
      </button>
      <p>子コンポーネントでの表示 → {count}</p>
    </>
  )
}

const ChildB: React.FC = () => {
  const context = React.useContext(SimpleContext)
  const { count, increment } = context

  console.log("ChildB render")
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

  console.log("Parent render")
  return (
    <>
      <button type="button" onClick={increment}>
        増 by 親
      </button>
      <p>親コンポーネントでの表示 → {count}</p>
      <ChildA />
      <ChildB />
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

export default Page
