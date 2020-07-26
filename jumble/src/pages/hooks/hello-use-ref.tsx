import React from "react"
import { NextPage } from "next"

interface InputProps {
  isVisible: boolean
}

const Input: React.FC<InputProps> = (props: InputProps) => {
  const { isVisible } = props

  // https://ja.reactjs.org/docs/hooks-reference.html#useref
  const inputRef = React.useRef<HTMLInputElement>(null)
  console.log(inputRef.current)

  // render 後に実行されてフォーカスがあたる
  React.useEffect(() => {
    if (isVisible && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isVisible])

  if (isVisible) {
    return <input type="text" ref={inputRef} />
  }
  const style = { display: "none" }
  return <input style={style} type="text" />
}

const Page: NextPage = () => {
  const [state, setState] = React.useState(false)

  const onClick = (): void => {
    setState((currentState) => !currentState)
  }

  return (
    <div>
      <button type="button" onClick={onClick}>
        ボタン
      </button>
      <br />
      <Input isVisible={state} />
    </div>
  )
}

// eslint-disable-next-line import/no-default-export
export default Page
