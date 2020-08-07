import React from "react"
import { NextPage } from "next"

// よくあるコンポーネント
const InputComponent: React.FC = () => {
  const [value, setValue] = React.useState("")

  const onChange = (event: React.FormEvent<HTMLInputElement>): void => {
    setValue(event.currentTarget.value)
  }

  return <input type="text" value={value} onChange={onChange} />
}

// ↑のをカスタムフックで機能を切り出す
const useInput = (initialValue = "") => {
  const [value, setValue] = React.useState(initialValue)
  const onChange = (event: React.FormEvent<HTMLInputElement>): void => {
    setValue(event.currentTarget.value)
  }
  return { value, onChange }
}

// コンポーネントの定義がシンプルになる
const UseComponentA: React.FC = () => {
  const { value, onChange } = useInput()
  return <input type="text" value={value} onChange={onChange} />
}

const UseComponentB: React.FC = () => {
  // このような書き方もできるみたい
  const properties = useInput()
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <input {...properties} />
}

const Page: NextPage = () => {
  return (
    <>
      <InputComponent />
      <hr />
      <UseComponentA />
      <hr />
      <UseComponentB />
    </>
  )
}

// eslint-disable-next-line import/no-default-export
export default Page
