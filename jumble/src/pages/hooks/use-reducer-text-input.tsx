import React from "react"
import { NextPage } from "next"

//
// あまり意味がないけど useReducer を <input type="text"> で使ってみた
//

// アクションタイプの列挙
const ActionType = {
  Text: "T",
} as const
type ActionType = typeof ActionType[keyof typeof ActionType]

// アクションの型
type Action = {
  type: ActionType
  payload: {
    value: string
  }
}

// 前の状態とアクションを元に、次の状態を返す関数
// eslint-disable-next-line consistent-return
const reducer = (previousValue: string, action: Action): string => {
  switch (action.type) {
    case ActionType.Text: {
      return action.payload.value
    }
  }
}

const Page: NextPage = () => {
  const [currentValue, dispatch] = React.useReducer(reducer, "こんにちは！")

  const onChange = (event: React.FormEvent<HTMLInputElement>): void => {
    const action: Action = {
      type: ActionType.Text,
      payload: {
        value: event.currentTarget.value,
      },
    }
    dispatch(action)
  }

  return (
    <div>
      <input type="text" value={currentValue} onChange={onChange} />
      <p>{currentValue}</p>
    </div>
  )
}

// eslint-disable-next-line import/no-default-export
export default Page
