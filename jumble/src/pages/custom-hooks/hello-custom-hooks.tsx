import React from "react"
import { NextPage } from "next"

// ボタンを押したら閉じたり開いたりするコンポーネント
const HelloCustomHookA: React.FC = () => {
  const [isVisible, setVisible] = React.useState(false)

  const onClick = (): void => {
    setVisible(!isVisible)
  }

  return (
    <>
      <button type="button" onClick={onClick}>
        {isVisible ? "押すと隠します" : "押すと表示します"}
      </button>
      <br />
      {isVisible ? <span>表示中</span> : <span />}
    </>
  )
}

// HelloCustomHookA を独自フックを使って書き直してみる
const useToggle = (initialValue: boolean): [boolean, () => void] => {
  const [value, setValue] = React.useState(initialValue)
  const toggleValue = (): void => setValue(!value)
  return [value, toggleValue]
}

// 少しシンプルになったが、さすがにこれだけだと恩恵が感じづらい
const HelloCustomHookB: React.FC = () => {
  const [isVisible, toggleVisible] = useToggle(false)

  const onClick = (): void => {
    toggleVisible()
  }

  return (
    <>
      <button type="button" onClick={onClick}>
        {isVisible ? "押すと隠します" : "押すと表示します"}
      </button>
      <br />
      {isVisible ? <span>表示中</span> : <span />}
    </>
  )
}

const Page: NextPage = () => {
  return (
    <>
      <HelloCustomHookA />
      <hr />
      <HelloCustomHookB />
    </>
  )
}

// eslint-disable-next-line import/no-default-export
export default Page
