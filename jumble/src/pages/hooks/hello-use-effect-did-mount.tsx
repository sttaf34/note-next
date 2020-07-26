/* eslint-disable react-hooks/exhaustive-deps */

import React from "react"
import { NextPage } from "next"

const Page: NextPage = () => {
  const initialText = "-"
  const [text, setText] = React.useState(initialText)

  // Access-Control-Allow-Origin 設定済の URL
  const host = "https://sttaf34-netlify-functions.netlify.app/"
  const path = ".netlify/functions/allow-origin"
  const url = host + path

  // こっちは CORS の関係で catch の方になる
  // const url = "https://www.yahoo.co.jp"

  // useEffect の中の処理が render 後に実行される
  React.useEffect(() => {
    fetch(url)
      .then((): void => {
        setText("通信成功しました")
      })
      .catch((error: Error): void => {
        setText(error.message)
      })
  }, [])

  return (
    <div>
      <p>{text}</p>
    </div>
  )
}

// eslint-disable-next-line import/no-default-export
export default Page
