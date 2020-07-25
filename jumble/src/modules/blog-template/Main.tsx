import React from "react"
import { css } from "@emotion/core"

import { SizeMediaSmall, SizeMediaLarge } from "./constants"

// メディアクエリは小さいサイズ向けを指定なしで書いといて
// 大きいサイズは上書きで指定するような形
// https://qiita.com/knml/items/c94dc493571dd4127d43

const styleMain = css({
  div: {
    margin: "0 auto",
    width: SizeMediaSmall.ContentsWidth,
    h2: {
      margin: "1.8rem 0 0 0",
    },
    p: {
      margin: "1.8rem 0 0 0",
    },
  },
  // [] で囲む理由を失念、公式からも探せない
  [SizeMediaLarge.MediaQuery]: {
    div: {
      width: SizeMediaLarge.ContentsWidth,
    },
  },
})

export const Main: React.FC = (props: React.Props<unknown>) => {
  const { children } = props
  return (
    <main css={styleMain}>
      <div>{children}</div>
    </main>
  )
}
