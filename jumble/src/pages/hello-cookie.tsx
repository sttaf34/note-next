import React from "react"
import { NextPage } from "next"
import { useCookies } from "react-cookie"

const Page: NextPage = () => {
  const key = "randomNumber"

  const [cookies, setCookie, removeCookie] = useCookies(["cookie"])

  const onClickA = (): void => {
    const randomNumber = Math.random()
    console.log(randomNumber)
    setCookie(key, randomNumber)
  }

  const onClickB = (): void => {
    removeCookie(key)
  }

  return (
    <>
      <p>{JSON.stringify(cookies)}</p>
      <input type="button" value="クッキーに乱数を保存" onClick={onClickA} />
      <br />
      <input
        type="button"
        value="クッキーに保存した値を削除"
        onClick={onClickB}
      />
      <hr />
    </>
  )
}

// eslint-disable-next-line import/no-default-export
export default Page
