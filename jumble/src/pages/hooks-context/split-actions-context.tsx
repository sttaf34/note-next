import React from "react"
import { NextPage } from "next"

import {
  increment,
  StateContext,
  SetStateContext,
  SplitActionsContextProvider,
} from "src/modules/split-actions-context/splitActionsContext"

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

  const onClick = (): void => {
    setState(increment)
  }

  console.log("SetStateComponent render")
  return (
    <>
      <button type="button" onClick={onClick}>
        増
      </button>
    </>
  )
}

const Parent: React.FC = () => {
  return (
    <>
      <StateComponent />
      <SetStateComponent />
    </>
  )
}

const Page: NextPage = () => {
  return (
    <SplitActionsContextProvider>
      <Parent />
    </SplitActionsContextProvider>
  )
}

// eslint-disable-next-line import/no-default-export
export default Page
