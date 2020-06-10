import React from "react"
import { NextPage } from "next"
import { ListRowProps, AutoSizer, List, Size } from "react-virtualized"
import { css } from "@emotion/core"
import { colorNames } from "../others/color"

const styleDiv = css({
  height: 300,
  width: "80%",
})

const Page: NextPage = () => {
  const names = colorNames

  const rowRenderer = (props: ListRowProps): React.ReactNode => {
    const { key, index, style } = props
    return (
      <div key={key} style={style}>
        {names[index]}
      </div>
    )
  }

  // AutoSizer の中に位置するわけなので、
  // 全体の高さと幅は props で受け取れることになる
  const autoSizerChildren = (props: Size): React.ReactNode => {
    const { height, width } = props
    return (
      <List
        height={height}
        rowCount={names.length}
        rowHeight={40}
        rowRenderer={rowRenderer}
        width={width}
      />
    )
  }

  // AutoSizer は外側の要素のサイズに合わせてくれる仕組み
  // 外側の要素の横幅がパーセント指定でも大丈夫
  return (
    <>
      <p>AutoSizer</p>
      <hr />
      <div css={styleDiv}>
        <AutoSizer>{autoSizerChildren}</AutoSizer>
      </div>
    </>
  )
}

// eslint-disable-next-line import/no-default-export
export default Page
