import React from "react"
import { NextPage } from "next"

import { SimpleContextProvider, SimpleContext } from "../contexts/simpleContext"

const StateComponent: React.FC = () => {
  const { count } = React.useContext(SimpleContext)

  console.log("StateComponent render")
  return (
    <>
      <p>{count}</p>
    </>
  )
}

const SetStateComponent: React.FC = () => {
  // このコンポーネントは、最初に render されたら
  // 以降の render は必要ないものだけども、
  // SimpleContext を使っている関係で state 変更の都度 render される
  const { setCount } = React.useContext(SimpleContext)

  const increment = (): void => {
    setCount((count) => count + 1)
  }

  console.log("SetStateComponent render")
  return (
    <>
      <button type="button" onClick={increment}>
        増
      </button>
    </>
  )
}

const Parent: React.FC = () => {
  console.log("Parent render")
  return (
    <>
      <StateComponent />
      <SetStateComponent />
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
