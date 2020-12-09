import React from "react"
import { NextPage } from "next"

import {
  StateContext,
  SetStateContext,
  SplitUselessContextProvider,
} from "src/modules/split-useless-context/splitUselessContext"

const StateComponent: React.FC = () => {
  const state = React.useContext(StateContext)
  const { count } = state

  console.log("StateComponent render")
  return (
    <>
      <p>{count}</p>
    </>
  )
}

// ボタンを押すと increment が実行されてコンテキスト内の状態が変更
// ⬇
// コンテキスト内で increment が再度定義される
// ⬇
// 結果、このコンポーネントも再度 render される
const SetStateComponent: React.FC = () => {
  const { increment } = React.useContext(SetStateContext)

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
    <SplitUselessContextProvider>
      <Parent />
    </SplitUselessContextProvider>
  )
}

// eslint-disable-next-line import/no-default-export
export default Page
