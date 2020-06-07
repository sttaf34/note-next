import React from "react"
import { NextPage } from "next"
import { ListRowProps, AutoSizer, List, Size } from "react-virtualized"
import { css } from "@emotion/core"
import { colorNames } from "../others/color"

const styleDiv = css({
  height: 300,
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
