import React from "react"
import { css } from "@emotion/core"

import { SizeMediaSmall, SizeMediaLarge } from "../others/constants"

const styleFooter = css({
  div: {
    margin: "0 auto",
    width: SizeMediaSmall.ContentsWidth,
    p: {
      textAlign: "center",
      margin: "1.8rem 0",
    },
  },
  [SizeMediaLarge.MediaQuery]: {
    div: {
      width: SizeMediaLarge.ContentsWidth,
    },
  },
})

export const Footer: React.FC = () => {
  return (
    <footer css={styleFooter}>
      <div>
        <p>&copy;</p>
      </div>
    </footer>
  )
}

export default Footer
