import React from "react"
import { NextPage } from "next"

const HelloHooksUseState: React.FC = () => {
  // 状態の初期値を用意しとく
  const initialCount = 0

  // React.useState は
  // 「現在の状態」と「状態を更新する関数」を返す
  const [currentCount, setCount] = React.useState(initialCount)

  const onClick = (): void => {
    setCount(currentCount + 1)
  }

  return (
    <div>
      <p>ボタンを {currentCount} 回押しましたね</p>
      <button type="button" onClick={onClick}>
        ボタン
      </button>
    </div>
  )
}

// https://ja.reactjs.org/docs/forms.html
// 制御されたコンポーネントを useState を使って書いてみた形
const UseStateInputText: React.FC = () => {
  const [value, setValue] = React.useState("初期値")

  const onChange = (event: React.FormEvent<HTMLInputElement>): void => {
    setValue(event.currentTarget.value)
  }

  return (
    <>
      <input type="text" value={value} onChange={onChange} />
      <br />
      <span>{value}</span>
    </>
  )
}

const UseStateInputButton: React.FC = () => {
  const [count, setCount] = React.useState(0)

  // 状態変更関数に、値を渡している形
  const onClickA = (): void => {
    setCount(count + 1)
  }

  // 状態の変更関数に、値ではなく関数を渡している形
  const onClickB = (): void => {
    // 仮引数が現在の状態、return するのは次の状態
    setCount((previousCount) => {
      const nextCount = previousCount + 1
      return nextCount
    })
  }

  return (
    <>
      <input type="button" value="値" onClick={onClickA} />
      <br />
      <input type="button" value="関数" onClick={onClickB} />
      <br />
      <span>{count}</span>
    </>
  )
}

const UseStateInputCheckbox: React.FC = () => {
  const [isChecked, setIsChecked] = React.useState(false)

  const onClick = (): void => {
    setIsChecked(!isChecked)
  }

  const message = isChecked ? "チェック！" : "空っぽ"

  return (
    <>
      <label htmlFor="checkbox">
        <input
          id="checkbox"
          type="checkbox"
          onClick={onClick}
          checked={isChecked}
        />
        <span>{message}</span>
      </label>
    </>
  )
}

const UseStateInputRadio: React.FC = () => {
  const [value, setValue] = React.useState("apple")

  const onClick = (event: React.FormEvent<HTMLInputElement>): void => {
    setValue(event.currentTarget.value)
  }

  return (
    <>
      <label htmlFor="apple">
        <input
          id="apple"
          type="radio"
          name="fruit"
          value="apple"
          onClick={onClick}
          checked={value === "apple"}
        />
        りんご
      </label>
      <label htmlFor="orange">
        <input
          id="orange"
          type="radio"
          name="fruit"
          value="orange"
          onClick={onClick}
          checked={value === "orange"}
        />
        みかん
      </label>
      <p>{value}</p>
    </>
  )
}

const Page: NextPage = () => {
  return (
    <>
      <HelloHooksUseState />
      <hr />
      <UseStateInputText />
      <hr />
      <UseStateInputButton />
      <hr />
      <UseStateInputCheckbox />
      <hr />
      <UseStateInputRadio />
    </>
  )
}

// eslint-disable-next-line import/no-default-export
export default Page
