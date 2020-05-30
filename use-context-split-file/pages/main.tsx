import React from "react"
import { NextPage } from "next"

import MainContextProvider, { MainContext } from "../others/mainContext"
import Child from "../others/mainChild"

const Parent: React.FC = () => {
  const context = React.useContext(MainContext)
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
    <MainContextProvider>
      <Parent />
    </MainContextProvider>
  )
}

export default Page
