import React from "react"
import { NextPage } from "next"

import {
  SplitlessContext,
  SplitlessContextProvider,
} from "src/modules/splitless-context/splitlessContext"

const StateComponent: React.FC = () => {
  const { count } = React.useContext(SplitlessContext)

  console.log("StateComponent render")
  return (
    <>
      <p>{count}</p>
    </>
  )
}

// const { count } = React.useContext(SplitlessContext) の count が変更されても
// このコンポーネントは render される必要はないのだが、毎回 render される
const SetStateComponent: React.FC = () => {
  const { increment } = React.useContext(SplitlessContext)

  console.log("SetStateComponent render")
  return (
    <>
      <button type="button" onClick={increment}>
        増
      </button>
    </>
  )
}

// ボタンを押すと表示されている値が増えるページ
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
    <SplitlessContextProvider>
      <Parent />
    </SplitlessContextProvider>
  )
}

// eslint-disable-next-line import/no-default-export
export default Page
