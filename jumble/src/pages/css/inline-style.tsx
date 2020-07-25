import React from "react"
import { NextPage } from "next"

const Page: NextPage = () => {
  // Emotion や styled components を使わずとも、実はこれで反映される
  // 補完が効かない
  const aStyleA = {
    border: "1px solid red",
    padding: "2px",
  }
  const aStyleB = {
    borderTop: "2px solid green",
    borderBottom: "2px solid green",
    padding: "2px",
  }

  return (
    <>
      <span style={aStyleA}>インラインスタイル</span>
      <br />
      <br />
      <span style={aStyleB}>インラインスタイル</span>
      <br />
    </>
  )
}

// eslint-disable-next-line import/no-default-export
export default Page
