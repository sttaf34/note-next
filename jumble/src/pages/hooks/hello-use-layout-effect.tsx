import React from "react"
import { NextPage } from "next"
import { setCookie, parseCookies } from "nookies"

const Page: NextPage = () => {
  const [value, setValue] = React.useState("abcdefghijklmnopqrstuvwxyz")

  const onClickA = (): void => {
    const randomNumber = String(Math.random())
    setCookie(null, "value", randomNumber, {})
    console.log(randomNumber)
  }

  // 実行のタイミングがコンポーネントがマウントした後なので、
  // value の初期値がチラっと見える
  // React.useEffect(() => {
  //   const object = parseCookies(null)
  //   setValue(object.value)
  // }, [])

  // 実行のタイミングがブラウザが表示する直前なので、
  // value の初期値がチラっと見えない
  React.useLayoutEffect(() => {
    const object = parseCookies(null)
    setValue(object.value)
  }, [])

  return (
    <>
      <p>{value}</p>
      <hr />
      <input type="button" value="クッキーに状態を保存" onClick={onClickA} />
    </>
  )
}

// eslint-disable-next-line import/no-default-export
export default Page
