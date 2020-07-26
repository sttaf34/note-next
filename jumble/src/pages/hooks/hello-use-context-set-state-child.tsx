import React from "react"
import { NextPage } from "next"

//
// Context の用意
//

const INITIAL_COUNT = 0

interface Context {
  count: number
  dispatch: React.Dispatch<React.SetStateAction<number>>
}

const initialContext: Context = {
  count: INITIAL_COUNT,
  dispatch: (): void => console.log(""),
}

export const CountContext = React.createContext(initialContext)

//
// 子コンポーネント
//

const Child: React.FC = () => {
  const context = React.useContext(CountContext)
  const { count, dispatch } = context

  // 子コンポーネントに状態変更処理を書いているような形
  // ./hello-use-context-set-state-parent.tsx と比較
  const onClick = (): void => {
    dispatch(count + 1)
  }

  return (
    <>
      <p>ボタンを {count} 回押しましたね</p>
      <button type="button" onClick={onClick}>
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

  const context = {
    count: currentCount,
    dispatch: setCount,
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
