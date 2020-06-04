import React from "react"
import { css } from "@emotion/core"

import { SizeMediaSmall, SizeMediaLarge } from "../others/constants"

const styleHeader = css({
  div: {
    margin: "0 auto",
    width: SizeMediaSmall.ContentsWidth,
    h1: {
      margin: "1.8rem 0 0 0",
    },
    "h1:after": {
      content: "'(スマホ)'",
    },
  },
  [SizeMediaLarge.MediaQuery]: {
    div: {
      width: SizeMediaLarge.ContentsWidth,
      "h1:after": {
        content: "'(PC)'",
      },
    },
  },
})

export const Header: React.FC = () => {
  return (
    <header css={styleHeader}>
      <div>
        <h1>タイトル</h1>
      </div>
    </header>
  )
}

export default Header
