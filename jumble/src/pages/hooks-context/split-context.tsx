import React from "react"
import { NextPage } from "next"

import {
  StateContext,
  SetStateContext,
  SplitContextProvider,
} from "src/modules/split-context/splitContext"

//
// hooks-context/split-context と hooks-context/splitless-context は
// 同じ機能を持つページだが、コンテキストを分割しているかどうかが異なる
// コンポーネントの render の動作確認用
//

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

const SetStateComponent: React.FC = () => {
  const setState = React.useContext(SetStateContext)

  // setState の中の処理を関数で書く形にすることで、
  // const state = React.useContext(StateContext) をする必要がなくなり、
  // state 変更時に、このコンポーネント自身は render されない
  const increment = (): void => {
    setState((state) => ({ count: state.count + 1 }))
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
    <SplitContextProvider>
      <Parent />
    </SplitContextProvider>
  )
}

// eslint-disable-next-line import/no-default-export
export default Page
