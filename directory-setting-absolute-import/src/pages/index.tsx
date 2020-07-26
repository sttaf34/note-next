import React from "react"
import { NextPage } from "next"
import { helloWorld } from "src/others/hello"

const Page: NextPage = () => {
  const hello = helloWorld("World")
  return (
    <>
      <h3>見出し</h3>
      <p>{hello}</p>
    </>
  )
}

export default Page
