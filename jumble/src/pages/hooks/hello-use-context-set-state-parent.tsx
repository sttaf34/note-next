import React from "react"
import { NextPage } from "next"

//
// Context の用意
//

const INITIAL_COUNT = 0

interface Context {
  count: number
  increment: () => void
}

const initialContext: Context = {
  count: INITIAL_COUNT,
  increment: (): void => console.log("increment"),
}

export const CountContext = React.createContext(initialContext)

//
// 子コンポーネント
//

const Child: React.FC = () => {
  const context = React.useContext(CountContext)
  const { count, increment } = context

  // 子コンポーネントでは、
  // 親コンポーネントで定義している状態変更の関数をそのまま動かすような形
  return (
    <>
      <p>ボタンを {count} 回押しましたね</p>
      <button type="button" onClick={increment}>
        ボタン
      </button>
    </>
  )
}

//
// 親コンポーネント
//

const Page: NextPage = () => {
  const [currentCount, setCount] = React.useState(INITIAL_COUNT)

  // 親コンポーネントの方に状態変更の処理を書いている
  // ./hello-use-context-set-state-child.tsx と比較
  const context = {
    count: currentCount,
    increment: (): void => {
      setCount(currentCount + 1)
    },
  }

  // Provider で囲んだ内部では useContext が使えるようになる
  // なんやかんやを props で渡す必要がなくなる
  return (
    <CountContext.Provider value={context}>
      <Child />
      <Child />
    </CountContext.Provider>
  )
}

// eslint-disable-next-line import/no-default-export
export default Page
