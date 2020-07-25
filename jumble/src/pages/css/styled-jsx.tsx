import React from "react"
import { NextPage } from "next"
import css from "styled-jsx/css"

// CSS の記述が文字列になので補完が効かない
const styles = css`
  h1 {
    color: red;
  }
  p {
    color: red;
    border: 1px solid red;
    padding: 0.2rem;
  }
`

const Page: NextPage = () => {
  return (
    <>
      <style jsx>{styles}</style>
      <h1>日記</h1>
      <p>今日は良い天気でした。</p>
    </>
  )
}

// eslint-disable-next-line import/no-default-export
export default Page
