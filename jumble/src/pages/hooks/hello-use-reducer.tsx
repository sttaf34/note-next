import React from "react"
import { NextPage } from "next"

// アクションタイプの列挙
const ActionType = {
  Increment: "I",
  Decrement: "D",
} as const
type ActionType = typeof ActionType[keyof typeof ActionType]

// アクションの型
type Action = {
  type: ActionType
  payload: {
    value: number
  }
}

// 前の状態とアクションを元に、次の状態を返す関数
// eslint-disable-next-line consistent-return
const reducer = (previousValue: number, action: Action): number => {
  switch (action.type) {
    case ActionType.Increment: {
      const newValue = previousValue + action.payload.value
      return newValue
    }
    case ActionType.Decrement: {
      const newValue = previousValue - action.payload.value
      return newValue
    }
  }
}

const Page: NextPage = () => {
  const initialCount = 0
  const [currentValue, dispatch] = React.useReducer(reducer, initialCount)

  const increment = () => {
    const action: Action = {
      type: ActionType.Increment,
      payload: {
        value: 3,
      },
    }
    dispatch(action)
  }

  const decrement = () => {
    const action: Action = {
      type: ActionType.Decrement,
      payload: {
        value: 2,
      },
    }
    dispatch(action)
  }

  return (
    <div>
      <p>{currentValue}</p>
      <button type="button" onClick={increment}>
        増やす
      </button>
      <button type="button" onClick={decrement}>
        減らす
      </button>
    </div>
  )
}

// eslint-disable-next-line import/no-default-export
export default Page
