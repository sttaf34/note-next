import React from "react"
import { NextPage } from "next"
import Link from "next/link"

const Page: NextPage = () => {
  React.useEffect(() => {
    const timerId = window.setInterval(() => console.log(new Date()), 1000)

    // return した関数は componentWillUnmount なタイミングで実行される
    return (): void => {
      console.log("clearInterval")
      clearInterval(timerId)
    }
  }, [])

  return (
    <Link href="/">
      <a>別のページへ</a>
    </Link>
  )
}

// eslint-disable-next-line import/no-default-export
export default Page
